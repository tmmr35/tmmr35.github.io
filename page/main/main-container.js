import { Container } from "../../component/container.js";
import { SunriseButton } from "./sunrise-button.js";
import { SummonSheepButton } from "./summon-sheep-button.js";
import { ContentButton } from "./content-button.js";

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
        this.renderSummonSheepButton();
        this.renderContentButton();
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
        const sunriseBtn = new SunriseButton(this.sheepCanvas);

        this.container.appendChild(sunriseBtn.getElement());
    }

    renderSummonSheepButton() {
        const summonSheepBtn = new SummonSheepButton(this.sheepCanvas);

        this.container.appendChild(summonSheepBtn.getElement());
    }

    renderContentButton() {
        const contentBtn = new ContentButton();
        this.container.appendChild(contentBtn.getElement());
    }
}
