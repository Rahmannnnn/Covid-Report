import DataRegion from '../data/data-region.js';

const main = function () {
    const selected = document.querySelector(".selected");
    const optionsContainer = document.querySelector(".options-container");  
    const optionListElement = document.querySelector("option-list");

    const confirmed = document.querySelector(".yellow");
    const recovered = document.querySelector(".green");
    const deaths = document.querySelector(".red");
    const lastUpdate = document.querySelector(".last");

    const renderOption = result => { 
        result.unshift({name:"Global"});
        optionListElement.regions = result;

        const option = document.querySelectorAll("option-item");
        option.forEach(region => {
            region.addEventListener("click", () => {
                selected.innerHTML = region.querySelector("label").innerHTML;

                if(selected.innerHTML === "Global"){
                    DataRegion.searchGlobal()
                    .then(renderResult)
                    .catch(fallbackResult)
                } else {
                    DataRegion.searchRegion(selected.innerHTML)
                    .then(renderResult)
                    .catch(fallbackResult)
                }
    
                optionsContainer.classList.remove("active");
            })
            
        });
    }

    const renderResult = result => {
        const formatter = new Intl.NumberFormat('en');
        const date = new Date(result.lastUpdate);

        confirmed.removeChild(confirmed.querySelector("#counter"));
        confirmed.innerHTML += `
            <p id="counter">${formatter.format(result.confirmed.value)}</p>
        `;

        recovered.removeChild(recovered.querySelector("#counter"));
        recovered.innerHTML += `
            <p id="counter">${formatter.format(result.recovered.value)}</p>
        `;

        deaths.removeChild(deaths.querySelector("#counter"));
        deaths.innerHTML += `
            <p id="counter">${formatter.format(result.deaths.value)}</p>
        `;

        lastUpdate.removeChild(lastUpdate.querySelector("p"));
        lastUpdate.innerHTML += `
            <p>Last Update : ${date}</p>
        `;
    };

    var fallbackResult = function (message) {
        confirmed.innerHTML = "";
        confirmed.innerHTML += '<h2 class="placeholder">' + message + '</h2>'

        recovered.innerHTML = "";
        recovered.innerHTML += '<h2 class="placeholder">' + message + '</h2>'

        deaths.innerHTML = "";
        deaths.innerHTML += '<h2 class="placeholder">' + message + '</h2>'

    };

    selected.addEventListener("click", () => {
        optionsContainer.classList.toggle("active");
    });

    DataRegion.allCountries()
        .then(renderOption)
        .catch(fallbackResult)

    DataRegion.searchGlobal()
        .then(renderResult)
        .catch(fallbackResult)
}

export default main;