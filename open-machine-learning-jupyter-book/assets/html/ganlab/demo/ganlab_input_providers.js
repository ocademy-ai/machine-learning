import * as tf from '@tensorflow/tfjs-core';
export class GANLabInputProviderBuilder {
    constructor(batchSize) {
        this.batchSize = batchSize;
        this.providerCounter = -1;
    }
}
export class GANLabNoiseProviderBuilder extends GANLabInputProviderBuilder {
    constructor(noiseSize, noiseType, atlasSize, batchSize) {
        super(batchSize);
        this.noiseSize = noiseSize;
        this.noiseType = noiseType;
        this.atlasSize = atlasSize;
    }
    generateAtlas() {
        if (this.noiseType === '1D Gaussian' ||
            this.noiseType === '2D Gaussian') {
            this.atlas = tf.truncatedNormal([this.atlasSize, this.noiseSize], 0.5, 0.25);
        }
        else {
            this.atlas = tf.randomUniform([this.atlasSize, this.noiseSize], 0.0, 1.0);
        }
    }
    getInputProvider(fixStarting) {
        const provider = this;
        return {
            getNextCopy() {
                provider.providerCounter++;
                return provider.atlas.slice([fixStarting ? 0 :
                        (provider.providerCounter * provider.batchSize) %
                            provider.atlasSize, 0], [provider.batchSize, provider.noiseSize]);
            },
            disposeCopy(copy) {
                copy.dispose();
            }
        };
    }
    getNoiseSample() {
        return this.atlas.slice([0, 0], [this.batchSize, this.noiseSize]).dataSync();
    }
}
export class GANLabTrueSampleProviderBuilder extends GANLabInputProviderBuilder {
    constructor(atlasSize, selectedShapeName, drawingPositions, batchSize) {
        super(batchSize);
        this.atlasSize = atlasSize;
        this.selectedShapeName = selectedShapeName;
        this.drawingPositions = drawingPositions;
        this.inputAtlasList = [];
    }
    generateAtlas() {
        for (let i = 0; i < this.atlasSize; ++i) {
            const distribution = this.sampleFromTrueDistribution(this.selectedShapeName, this.drawingPositions);
            this.inputAtlasList.push(distribution[0]);
            this.inputAtlasList.push(distribution[1]);
        }
        this.atlas = tf.tensor2d(this.inputAtlasList, [this.atlasSize, 2]);
    }
    getInputProvider(fixStarting) {
        const provider = this;
        return {
            getNextCopy() {
                provider.providerCounter++;
                return provider.atlas.slice([fixStarting ? 0 :
                        (provider.providerCounter * provider.batchSize) %
                            provider.atlasSize, 0], [provider.batchSize, 2]);
            },
            disposeCopy(copy) {
                copy.dispose();
            }
        };
    }
    getInputAtlas() {
        return this.inputAtlasList;
    }
    sampleFromTrueDistribution(selectedShapeName, drawingPositions) {
        const rand = Math.random();
        switch (selectedShapeName) {
            case 'drawing': {
                const index = Math.floor(drawingPositions.length * rand);
                return [
                    drawingPositions[index][0] +
                        0.02 * this.randNormal(),
                    drawingPositions[index][1] +
                        0.02 * this.randNormal()
                ];
            }
            case 'line': {
                return [
                    0.8 - 0.75 * rand + 0.01 * this.randNormal(),
                    0.6 + 0.3 * rand + 0.01 * this.randNormal()
                ];
            }
            case 'gaussians': {
                if (rand < 0.5) {
                    return [
                        0.3 + 0.1 * this.randNormal(),
                        0.7 + 0.1 * this.randNormal()
                    ];
                }
                else {
                    return [
                        0.7 + 0.05 * this.randNormal(),
                        0.4 + 0.2 * this.randNormal()
                    ];
                }
            }
            case 'ring': {
                return [
                    0.5 + 0.3 * Math.cos(rand * Math.PI * 2) +
                        0.025 * this.randNormal(),
                    0.45 + 0.25 * Math.sin(rand * Math.PI * 2) +
                        0.025 * this.randNormal(),
                ];
            }
            case 'disjoint': {
                const stdev = 0.025;
                if (rand < 0.333) {
                    return [
                        0.35 + stdev * this.randNormal(),
                        0.75 + stdev * this.randNormal()
                    ];
                }
                else if (rand < 0.666) {
                    return [
                        0.75 + stdev * this.randNormal(),
                        0.6 + stdev * this.randNormal()
                    ];
                }
                else {
                    return [
                        0.45 + stdev * this.randNormal(),
                        0.35 + stdev * this.randNormal()
                    ];
                }
            }
            default: {
                throw new Error('Invalid true distribution');
            }
        }
    }
    randNormal() {
        const u = 1 - Math.random();
        const v = 1 - Math.random();
        return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    }
}
export class GANLabUniformNoiseProviderBuilder extends GANLabInputProviderBuilder {
    constructor(noiseSize, numManifoldCells, batchSize) {
        super(batchSize);
        this.noiseSize = noiseSize;
        this.numManifoldCells = numManifoldCells;
    }
    generateAtlas() {
        const inputAtlasList = [];
        if (this.noiseSize === 1) {
            for (let i = 0; i < this.numManifoldCells + 1; ++i) {
                inputAtlasList.push(i / this.numManifoldCells);
            }
        }
        else if (this.noiseSize === 2) {
            for (let i = 0; i < this.numManifoldCells + 1; ++i) {
                for (let j = 0; j < this.numManifoldCells + 1; ++j) {
                    inputAtlasList.push(i / this.numManifoldCells);
                    inputAtlasList.push(j / this.numManifoldCells);
                }
            }
        }
        while ((inputAtlasList.length / this.noiseSize) % this.batchSize > 0) {
            inputAtlasList.push(0.5);
        }
        this.atlas = tf.tensor2d(inputAtlasList, [inputAtlasList.length / this.noiseSize, this.noiseSize]);
    }
    getInputProvider() {
        const provider = this;
        return {
            getNextCopy() {
                provider.providerCounter++;
                if (provider.providerCounter * provider.batchSize >
                    Math.pow(provider.numManifoldCells + 1, provider.noiseSize)) {
                    provider.providerCounter = 0;
                }
                return provider.atlas.slice([
                    (provider.providerCounter * provider.batchSize) %
                        Math.pow(provider.numManifoldCells + 1, provider.noiseSize),
                    0
                ], [provider.batchSize, provider.noiseSize]);
            },
            disposeCopy(copy) {
                copy.dispose();
            }
        };
    }
    calculateDensitiesForGaussian() {
        if (this.noiseSize === 2) {
            const densities = [];
            for (let i = 0; i < this.numManifoldCells; ++i) {
                for (let j = 0; j < this.numManifoldCells; ++j) {
                    densities.push(this.probDensity((i + 0.5) / this.numManifoldCells, (j + 0.5) / this.numManifoldCells));
                }
            }
            return densities;
        }
        else {
            return [];
        }
    }
    probDensity(x, y) {
        const mu = 0.5;
        const std = 0.25;
        return 1.0 / (2.0 * Math.PI * std * std) * Math.exp(-0.5 /
            (std * std) * ((x - mu) * (x - mu) + (y - mu) * (y - mu)));
    }
}
export class GANLabUniformSampleProviderBuilder extends GANLabInputProviderBuilder {
    constructor(numGridCells, batchSize) {
        super(batchSize);
        this.numGridCells = numGridCells;
    }
    generateAtlas() {
        const inputAtlasList = [];
        for (let j = 0; j < this.numGridCells; ++j) {
            for (let i = 0; i < this.numGridCells; ++i) {
                inputAtlasList.push((i + 0.5) / this.numGridCells);
                inputAtlasList.push((j + 0.5) / this.numGridCells);
            }
        }
        this.atlas = tf.tensor2d(inputAtlasList, [this.numGridCells * this.numGridCells, 2]);
    }
    getInputProvider() {
        const provider = this;
        return {
            getNextCopy() {
                provider.providerCounter++;
                return provider.atlas.slice([
                    (provider.providerCounter * provider.batchSize) %
                        (provider.numGridCells * provider.numGridCells),
                    0
                ], [provider.batchSize, 2]);
            },
            disposeCopy(copy) {
                copy.dispose();
            }
        };
    }
}
