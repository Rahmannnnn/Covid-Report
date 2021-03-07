class OptionItem extends HTMLElement {
    set region(region) {
        this._region = region;
        this.render();
    }

    render() {
        if(this._region.name === "Global"){
            this.innerHTML = `
            <div class="option">
                <input type="radio" class="radio" id=${this._region.name} name="category"/>
                <label for=${this._region.name}>${this._region.name}</label>
            </div>`;
        } else {
            this.innerHTML = `
            <div class="option">
                <img src="https://www.countryflags.io/${this._region.iso2}/flat/16.png">
                <input type="radio" class="radio" id=${this._region.name} name="category"/>
                <label for=${this._region.name}>${this._region.name}</label>
            </div>`;            
        }
    }
}

customElements.define("option-item", OptionItem);
