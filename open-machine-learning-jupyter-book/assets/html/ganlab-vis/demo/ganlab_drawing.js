export class GANLabDrawing {
    constructor(canvas, plotSizePx) {
        this.canvas = canvas;
        this.plotSizePx = plotSizePx;
        this._drawingPositions = [];
        this.isDrawing = false;
        this.context = canvas.getContext('2d');
        this.context.strokeStyle = 'rgba(0, 136, 55, 0.25)';
        this.context.lineJoin = 'round';
        this.context.lineWidth = 10;
        const drawingContainer = document.getElementById('vis-content-container');
        const offsetLeft = drawingContainer.offsetLeft + 5;
        const offsetTop = drawingContainer.offsetTop + 15;
        this.canvas.addEventListener('mousedown', (event) => {
            this.isDrawing = true;
            this.draw([event.pageX - offsetLeft, event.pageY - offsetTop]);
        });
        this.canvas.addEventListener('mousemove', (event) => {
            if (this.isDrawing) {
                this.draw([event.pageX - offsetLeft, event.pageY - offsetTop]);
            }
        });
        this.canvas.addEventListener('mouseup', (event) => {
            this.isDrawing = false;
        });
    }
    get drawingPositions() {
        return this._drawingPositions;
    }
    prepareDrawing() {
        this._drawingPositions = [];
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        const drawingElement = document.getElementById('drawing-container');
        drawingElement.style.display = 'block';
        const drawingBackgroundElement = document.getElementById('drawing-disable-background');
        drawingBackgroundElement.style.display = 'block';
    }
    draw(position) {
        this._drawingPositions.push([position[0] / this.plotSizePx, 1.0 - position[1] / this.plotSizePx]);
        this.context.beginPath();
        this.context.moveTo(position[0] - 1, position[1]);
        this.context.lineTo(position[0], position[1]);
        this.context.closePath();
        this.context.stroke();
    }
}
