class FavoritesController < ApplicationController
    before_action :authorize

    def index
        render json: Favorite.all
    end

    def show
        render json: Favorite.find(params[:id])
    end

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :id
    end
end
