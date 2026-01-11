export class Canvas {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.firstChild);
    }

    getContext() {
        return this.ctx;
    }

    getCanvas() {
        return this.canvas;
    }

    resize(width, height) {
        const ratio = window.devicePixelRatio;

        this.canvas.width = width * ratio;
        this.canvas.height = height * ratio;
        
        this.ctx.scale(ratio, ratio);
    }
}
