class FavoritesController < ApplicationController
    def index
        render json: Favorite.all
    end

    def create
        @favorite = current_user.favorites.new(favorite_params)
        if !@favorite.save
            flash[:notice] = @favorite.errors.full_messages
        end
        redirect_to @favorite.post
    end

    def destroy
        @favorite = current_user.favorites.find(params[:id])
        post = @favorite.post
        @favorite.destroy
        redirect_to post
    end

    private

    def favorite_params
        params.require(:favorite).permit(:post_id)
    end
end
