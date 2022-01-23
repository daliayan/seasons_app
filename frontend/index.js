const seasonApi = new SeasonApi('http://localhost:3000/seasons')

document.addEventListener('DOMContentLoaded', () => {
    seasonApi.getSeason(); // gettign season data
});