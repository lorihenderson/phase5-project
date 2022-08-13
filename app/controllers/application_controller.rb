class ApplicationController < ActionController::Base
    include ActionController::Cookies

    # make current user actions
    def current_user
        @current_user ||= User.find_by(id: session[:user_id])
    end
end
