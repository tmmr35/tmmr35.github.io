import { Container } from "../../component/container.js";

export class MainContainer {
    constructor(sheepCanvas) {
        console.log("✅ main-container loaded");
        this.sheepCanvas = sheepCanvas;

        this.isDay = true;

        this.init();
    }

    init() {
        const containerInstance = new Container({
            id: "main-container",
            className: "custom-class-if-needed",
        });

        this.container = containerInstance.getElement();
        this.renderNavButton();
        this.renderSunriseButton();
    }

    renderNavButton() {
        const button = document.createElement("button");
        button.textContent = "📄 다른 페이지로 이동";
        button.className = "navigation-button";

        button.addEventListener("click", () => {
            window.location.href = "../post/post.html";
        });

        this.container.appendChild(button);
    }

    renderSunriseButton() {
        const button = document.createElement("button");
        button.className = "float-button";

        button.style.top = "30px";
        button.style.right = "30px";

        const theme = {
            day: {
                default: "#ff79b0",
                hover: "#607D8B"
            },
            night: {
                default: "#607D8B",
                hover: "#ff79b0"
            }
        };

        const updateButtonStyle = () => {
            const currentTheme = this.isDay ? theme.day : theme.night;
            
            button.textContent = this.isDay ? "Day" : "Night";
            button.style.backgroundColor = currentTheme.default;
            
            button.onmouseenter = () => {
                button.style.backgroundColor = currentTheme.hover;
                button.textContent = this.isDay ? "Night" : "Day";
            };
            button.onmouseleave = () => {
                button.style.backgroundColor = currentTheme.default;
                button.textContent = this.isDay ? "Day" : "Night";
            };
        };

        updateButtonStyle();

        button.addEventListener("click", () => {
            this.isDay = !this.isDay;
            
            this.sheepCanvas.sunRise(this.isDay);
            console.log(this.isDay ? "해가 떠요" : "해가 져요");

            updateButtonStyle();
        });

        this.container.appendChild(button);
    }
}
