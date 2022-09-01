class CategoriesController < ApplicationController
    skip_before_action :user_authorized
    
    def index
        render json: Category.all
    end

    def show
        render json: Category.find(params[:id])
    end
end
