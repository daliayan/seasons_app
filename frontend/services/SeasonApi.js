class SeasonApi {

    constructor(baseURL){
        this.baseURL = baseURL;
    }

    getSeasons(){
        fetch(this.baseURL)
        .then(response => response.json())
        .then(json => json.forEach(
            seasonObject => {
                const season = new SeasonApi(seasonObject)
                season.getSeasons();
            }
        ))
    }
}