class CategoriesController < ApplicationController
    # before_action :authorize
    skip_before_action :authorize

    def index
        render json: Category.all
    end

    def show
        render json: Category.find(params[:id])
    end

    def create
        cat = Category.create!(cat_params)
        render json: cat, status: :created
    end

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :id
    end

    def cat_params
        params.permit(:topic)
    end
end
