class PostsController < ApplicationController
    before_action :find_post, only: [:show]

    def index
        render json: Post.all
    end

    def show
        render json: @post, status: :ok
    end

    def create
        # if current_user
        #     @post.user_id = current_user.id
        # end
        post = Post.create!(post_params)
        # session[:post_id] = post.id
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
        params.permit(:user_id, :category_id, :fact)
    end
end
