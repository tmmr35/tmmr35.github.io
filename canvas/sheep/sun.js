export class Sun {
    constructor() {
        this.radius = 150;
        this.x = 250;

        this.sunriseY = 200;
        this.sunsetY = 1000; 

        this.y = this.sunsetY;
        this.targetY = this.sunriseY;
        this.speed = 4;

        this.isDay = true;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.sunsetY = this.stageHeight * 0.7 + this.radius + 50;

        if (this.isDay) {
            this.targetY = this.sunriseY;
        } else {
            this.targetY = this.sunsetY;
        }
    }

    update() {
        const dy = this.targetY - this.y;
        this.y += dy * 0.05;
    }

    draw(ctx, t) {
        this.update();

        ctx.save();
        ctx.fillStyle = "#ffcc33";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.restore();
    }

    sunRise(isDay) {
        this.isDay = isDay;

        if (this.isDay) {
            this.targetY = this.sunriseY;
        } else {
            this.targetY = this.sunsetY;
        }
    }
}