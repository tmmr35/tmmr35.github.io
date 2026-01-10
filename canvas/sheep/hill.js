export class Hill {
    constructor(dayColor, nightColor, speed, total, gapHeightGrid, min, max) {
        this.dayColor = dayColor;
        this.nightColor = nightColor;
        this.speed = speed;
        this.total = total;
        this.gapHeightGrid = gapHeightGrid;
        this.min = min;
        this.max = max;

        this.color = dayColor;
    }

    setIsDay(isDay) {
        this.color = isDay ? this.dayColor : this.nightColor;
    }

    resize(stageWidth, stageHeight) {
        // 초기화 로직
        if (!this.points) {
            this.stageWidth = stageWidth;
            this.stageHeight = stageHeight;
            this.points = [];
            this.gap = Math.ceil(this.stageWidth / (this.total - 2));

            for (let i = 0; i < this.total; i++) {
                this.points[i] = { x: i * this.gap, y: this.getY() };
            }
            return;
        }

        // 계산에 필요한 비율과 기준점 찾기
        const scaleY = stageHeight / this.stageHeight;
        const widthRatio = stageWidth / this.stageWidth;
        const oldCenter = this.stageWidth / 2;

        // 중앙에 가장 가까운 점(Anchor)의 인덱스 찾기
        let centerIdx = 0;
        let minDist = Math.abs(this.points[0].x - oldCenter);

        for (let i = 1; i < this.points.length; i++) {
            const dist = Math.abs(this.points[i].x - oldCenter);
            if (dist < minDist) {
                minDist = dist;
                centerIdx = i;
            }
        }

        // 기준점의 새로운 X 좌표 미리 계산
        const newAnchorX = this.points[centerIdx].x * widthRatio;

        // 상태 업데이트 및 전체 좌표 재설정
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.gap = Math.ceil(this.stageWidth / (this.total - 2));

        this.points.forEach((point, i) => {
            point.y *= scaleY; // 높이 조절
            // 공식: 내 위치 = 기준점 위치 + (나와 기준점의 거리 칸수 * 간격)
            point.x = newAnchorX + (i - centerIdx) * this.gap;
        });
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();

        let cur = this.points[0];
        let prev = cur;

        let dots = [];
        cur.x += this.speed;

        if (cur.x > -this.gap) {
            this.points.unshift({
                x: -(this.gap * 2),
                y: this.getY(),
            });
        } else if (cur.x > this.stageWidth + this.gap) {
            this.points.splice(-1);
        }

        ctx.moveTo(cur.x, cur.y);

        let prevCx = cur.x;
        let prevCy = cur.y;

        for (let i = 1; i < this.points.length; i++) {
            cur = this.points[i];
            cur.x += this.speed;
            const cx = (prev.x + cur.x) / 2;
            const cy = (prev.y + cur.y) / 2;
            ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);

            dots.push({
                x1: prevCx,
                y1: prevCy,
                x2: prev.x,
                y2: prev.y,
                x3: cx,
                y3: cy,
            });

            prev = cur;
            prevCx = cx;
            prevCy = cy;
        }

        ctx.lineTo(prev.x, prev.y);
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.stageHeight);
        ctx.fill();

        return dots;
    }

    getY() {
        const gapHeight = this.stageHeight / this.gapHeightGrid;
        const minHeight = gapHeight * (this.gapHeightGrid - this.min);
        const maxHeight = gapHeight * (this.gapHeightGrid - this.max);

        return minHeight - Math.random() * (minHeight - maxHeight);
    }
}
