class Season {

    constructor({id, name}) {
        this.id = id;
        this.name = name;
    }

    getSeason(){
        const seasonList = document.getElementById('season-list'); // getting individual season
        const seasonDiv = document.createElement('div') // div that holds season
        seasonDiv.seasonList.add('season-list'); // adding list to the div

        const seasonInformation = this.getSeasonData();
        const activities = this.getActivityData();

        seasonDiv.appendChild(seasonInformation);
        seasonList.appendChild(seasonDiv);
        seasonList.appendChild(activities);

    }

    getSeasonData(){
        const seasonData = document.createElement('div');
        seasonData.innerHTML = `${this.name}`;
        return seasonData;
    }

    getActivityData(){
        const activityData = document.createElement('div');
        activityData.id = `season-${this.id}`;
        activityData.classList.add('activity');

        this.acvivities.forEach(activity => {
            const newActivity = new Activity(activity);

            const li = newActivity.getSeason();
            activityData.appendChild(li);

        });
        return activityData;
    }
}