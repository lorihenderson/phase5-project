class SessionsController < ApplicationController
  # skip_before_action :authenticate_user

  def click
    session[:click] ||= 0
    session[:click] += 1
  end

  # post '/login'
  def create
    user = User.find_by_username(params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: { error: 'invalid credentials' }, status: :unauthorized
    end
  end

  # delete '/logout'
  def destroy
    session.delete :user_id
    head :no_content
  end
end
