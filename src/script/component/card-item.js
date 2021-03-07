class CardItem extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.text = this.getAttribute("text") || null;
        this.color = this.getAttribute("color") || null;
 
        this.innerHTML = `
        <div class="card ${this.color}">
            <h1>${this.text}</h1>
            <p id="counter"></p>
        </div>`;
    }
}

customElements.define("card-item", CardItem);