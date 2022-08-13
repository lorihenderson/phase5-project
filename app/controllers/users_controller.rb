class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def show
        render json: User.find(params[:id])
    end

    def create
        user = User.create!(user_params)
        render json:  user, status: :created
    end

    private

    def user_params
        params.permit(:f_name, :l_name, :bio, :username, :password)
    end
end
