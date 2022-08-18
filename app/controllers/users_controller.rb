class UsersController < ApplicationController
    before_action :find_user, only: [:show, :update]

    def index
        render json: User.all
    end

    def show
        render json: @user
    end

    def create
        user = User.create!(user_params)
        render json:  user, status: :created
    end

    def update
        @user.update!(user_params)
        render json: @user, status: :accepted
    end

    private

    def user_params
        params.permit(:f_name, :l_name, :bio, :username, :password)
    end

    def find_user
        @user = User.find(params[:id])
    end
end
