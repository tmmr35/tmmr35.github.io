export class SummonSheepButton {
    constructor(sheepCanvas) {
        this.sheepCanvas = sheepCanvas;

        this.element = document.createElement("button");
        this.element.className = "float-button";
        this.element.textContent = "🐑";

        this.init();
    }

    init() {
        this.element.style.top = "110px"; 
        this.element.style.right = "30px";

        const defaultColor = "#81C784";
        const hoverColor = "#66BB6A";

        this.element.style.backgroundColor = defaultColor;

        this.element.onmouseenter = () => {
            this.element.style.backgroundColor = hoverColor;
            this.element.transform = "scale(1.1)";
        };
        this.element.onmouseleave = () => {
            this.element.style.backgroundColor = defaultColor;
            this.element.transform = "scale(1)";
        };

        this.element.addEventListener("click", () => {
            this.summon();
        });
    }

    summon() {
        console.log("✨ 양 한 마리 추가!");
        if (this.sheepCanvas && this.sheepCanvas.addSheep) {
            this.sheepCanvas.addSheep(); 
        } else {
            console.warn("SheepCanvas에 addSheep 메서드가 없습니다.");
        }
    }

    getElement() {
        return this.element;
    }
}