class DataRegion {
    static searchRegion(keyword) {
        return fetch(`https://covid19.mathdro.id/api/countries/${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.confirmed){
                return Promise.resolve(responseJson);
            } else {
                return Promise.reject(`not found`);
            }
        })
    }

    static searchGlobal() {
        return fetch(`https://covid19.mathdro.id/api`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
           if(responseJson.confirmed){
                return Promise.resolve(responseJson);
           } else {
                return Promise.reject(`not found`);
           }
        })
    }

    static allCountries() {
        return fetch(`https://covid19.mathdro.id/api/countries`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson.countries){
                    return Promise.resolve(responseJson.countries);
                } else {
                    return Promise.reject(`not found`);
                }
            })
    }
}

export default DataRegion;