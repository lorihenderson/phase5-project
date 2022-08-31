class PostsController < ApplicationController

    def index
        render json: Post.all
    end

    def show
        render json: Post.find(params[:id])
    end

    def create
        post = Post.create!(post_params_with_user_id)
        render json: post, status: :created
    end

    def destroy
        post.destroy
        head :no_content
    end

    private

    def post_params
        params.permit(:category_id, :fact)
    end

    def post_params_with_user_id
        post_params.merge(user_id: session[:user_id])
    end

end
