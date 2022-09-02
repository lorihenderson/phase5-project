class PostsController < ApplicationController
    before_action :find_user, only: [:show]
    skip_before_action :user_authorized

    def index
        render json: Post.all
    end

    def show
        render json: @post, status: :ok
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

    def find_post
        @post = Post.find(params[:id])
    end

    def post_params
        params.permit(:user_id, :category_id)
    end
end
