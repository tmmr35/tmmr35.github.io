export class SunriseButton {
    constructor(sheepCanvas) {
        this.sheepCanvas = sheepCanvas;
        this.isDay = true;

        this.element = document.createElement("button");
        this.element.className = "float-button";
        
        this.theme = {
            day: {
                default: "#ff79b0",
                hover: "#607D8B"
            },
            night: {
                default: "#607D8B",
                hover: "#ff79b0"
            }
        };

        this.init();
    }

    init() {
        this.element.style.top = "30px";
        this.element.style.right = "30px";

        this.updateButtonStyle();

        this.element.addEventListener("click", () => {
            this.onClick();
        });
    }

    updateButtonStyle() {
        const currentTheme = this.isDay ? this.theme.day : this.theme.night;
        
        this.element.textContent = this.isDay ? "Day" : "Night";
        this.element.style.backgroundColor = currentTheme.default;
        
        this.element.onmouseenter = () => {
            this.element.style.backgroundColor = currentTheme.hover;
            this.element.textContent = this.isDay ? "Night" : "Day";
        };
        this.element.onmouseleave = () => {
            this.element.style.backgroundColor = currentTheme.default;
            this.element.textContent = this.isDay ? "Day" : "Night";
        };
    }

    onClick() {
        this.isDay = !this.isDay;
        
        this.sheepCanvas.sunRise(this.isDay);
        console.log(this.isDay ? "해가 떠요" : "해가 져요");

        this.updateButtonStyle();
    }

    getElement() {
        return this.element;
    }
}