class PostsController < ApplicationController
    def index
        render json: Post.all
    end

    def show
        render json: Post.find(params[:id])
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def destroy
        post.destroy
        head :no_content
    end

    private

    def post_params
        params.permit(:user_id, :category_id)
    end
end
