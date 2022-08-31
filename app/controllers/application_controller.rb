class ApplicationController < ActionController::Base
    include ActionController::Cookies
    before_action :user_authorized
    skip_before_action :verify_authenticity_token

    # make current user actions
    def current_user
        @current_user ||= User.find_by(id: session[:user_id])
    end

    def user_authorized
        render json: { error: 'User not authorized' }, status: :unauthorized unless current_user
    end

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    
    private

    def render_not_found(exception)
        render json: { error: "#{exception.model} not found" }, status: :not_found
    end

    def render_invalid(exception)
        render json: { errors: exception.record.errors.full_messages  }, status: :unprocessable_entity
    end

end
