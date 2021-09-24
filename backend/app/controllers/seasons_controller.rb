class SeasonsController < ApplicationController

    def index
        seasons = Season.all
        render json: seasons, include: [:activities]
    end

    def show
        season = Season.find(param[:id])
        render json: season
    end
end