class ActivitiesController < ApplicationController

    before_action :made_activities, only: [:show, :destroy]

    def index
        activities = Activity.all
        render json: activities
    end

    def show
        render json: @activity
    end

    def create
        activity = Activity.create(activities_params)
        if activity.save
            render json: activity
        else
            render json: activity.errors
        end
    end

    def destroy
        @activity.destroy
        render json: {message: "Successfully Deleted #{@activity.name}" }
    end

    private

    def made_activities
        @activity = Activity.find(params[:id])
    end

    def activities_params
        params.permit(:name, :location, :price, :season_id)
    end


end