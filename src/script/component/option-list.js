import "./option-item.js";

class OptionList extends HTMLElement {

    set regions(regions) {
        this._regions = regions;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._regions.forEach(region => {
            const regionItemElement = document.createElement("option-item");
            regionItemElement.region = region;
            this.appendChild(regionItemElement);
        })
    }
}


customElements.define("option-list", OptionList);