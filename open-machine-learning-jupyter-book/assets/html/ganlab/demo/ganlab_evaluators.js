export class GANLabEvaluatorGridDensities {
    constructor(numGrid) {
        this.numGrid = numGrid;
        this.gridTrueSampleCount = new Array(numGrid * numGrid).fill(0);
        this.gridTrueDensities = new Array(numGrid * numGrid).fill(0.0);
        this.gridGeneratedDensities = new Array(numGrid * numGrid);
    }
    mapPointToGridIndex(point) {
        return Math.trunc(point[0] * this.numGrid) +
            this.numGrid * Math.trunc(point[1] * this.numGrid);
    }
    createGridsForTrue(trueAtlas, numTrueSamples) {
        for (let i = 0; i < numTrueSamples; ++i) {
            const values = trueAtlas.splice(i * 2, i * 2 + 2);
            this.gridTrueSampleCount[this.mapPointToGridIndex([values[0], values[1]])]++;
            this.gridTrueDensities[this.mapPointToGridIndex([values[0], values[1]])] += 1.0 / numTrueSamples;
        }
    }
    updateGridsForGenerated(generatedSamples) {
        const numGeneratedSamples = generatedSamples.length;
        this.gridGeneratedDensities.fill(0.0);
        for (let i = 0; i < numGeneratedSamples; ++i) {
            this.gridGeneratedDensities[this.mapPointToGridIndex(generatedSamples[i])] += 1.0 / numGeneratedSamples;
        }
    }
    getKLDivergenceScore() {
        let score = 0.0;
        const smoothingEps = 0.0001;
        for (let j = 0; j < this.gridTrueDensities.length; ++j) {
            score += (this.gridTrueDensities[j] + smoothingEps) * Math.log2((this.gridTrueDensities[j] + smoothingEps) /
                (this.gridGeneratedDensities[j] + smoothingEps));
        }
        return score;
    }
    getJSDivergenceScore() {
        let leftJS = 0.0;
        let rightJS = 0.0;
        const smoothingEps = 0.0001;
        for (let j = 0; j < this.gridTrueDensities.length; ++j) {
            const averageDensity = 0.5 *
                (this.gridTrueDensities[j] + this.gridGeneratedDensities[j]);
            leftJS += (this.gridTrueDensities[j] + smoothingEps) * Math.log2((this.gridTrueDensities[j] + smoothingEps) /
                (averageDensity + smoothingEps));
            rightJS += (this.gridGeneratedDensities[j] + smoothingEps) * Math.log2((this.gridGeneratedDensities[j] + smoothingEps) /
                (averageDensity + smoothingEps));
        }
        return 0.5 * (leftJS + rightJS);
    }
}
