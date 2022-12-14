class UsersController < ApplicationController
    before_action :find_user, only: [:update]
    skip_before_action :user_authorized, only: [:show, :create]

    def index
        render json: User.all
    end

    def show
        render json: current_user, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        @user.update!(bio: params[:bio])
        render json: @user, status: :accepted
    end

    private

    def user_params
        params.permit(:f_name, :l_name, :bio, :username, :password)
    end

    def find_user
        @user = User.find(session[:user_id])
    end
end
