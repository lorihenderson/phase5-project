class PostsController < ApplicationController
    before_action :find_post, only: [:show]

    def index
        render json: Post.all
    end

    def show
        render json: @post, status: :ok
    end

    def create
        post = Post.create!(post_params_with_user_id)
        render json: post, status: :created
    end

    def destroy
       @post.destroy
    end

    private

    def find_post
        @post = Post.find(params[:id])
    end

    def post_params
        params.permit(:category_id, :fact)
    end

    def post_params_with_user_id
        post_params.merge(user_id: session[:user_id])
    end
end
