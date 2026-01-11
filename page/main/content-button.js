export class ContentButton {
    constructor() {
        this.element = document.createElement("button");
        this.element.className = "float-button";
        this.element.textContent = "📜";

        this.isContentOpen = false;

        this.init();
    }

    init() {
        this.element.style.top = "190px";
        this.element.style.right = "30px";

        const defaultColor = "#9575CD"; 
        const hoverColor = "#7E57C2";
        this.element.style.backgroundColor = defaultColor;

        this.element.onmouseenter = () => {
            this.element.style.backgroundColor = hoverColor;
        };
        this.element.onmouseleave = () => {
            this.element.style.backgroundColor = defaultColor;
        };

        this.element.addEventListener("click", () => {
            this.toggleContent();
        });
    }

    toggleContent() {
        this.isContentOpen = !this.isContentOpen;
        
        if (this.isContentOpen) {
            document.body.classList.add("view-content");
            this.element.textContent = "🎨";
        } else {
            document.body.classList.remove("view-content");
            this.element.textContent = "📜";
        }
    }

    getElement() {
        return this.element;
    }
}