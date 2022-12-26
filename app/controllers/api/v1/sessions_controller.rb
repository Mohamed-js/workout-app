class Api::V1::SessionsController < ApplicationController

  def authenticated?
    render json: { existance: User.find_by(authentication_token: params[:token]) ? true : false }, status: :ok
  end

  def create
    @user = User.find_by(name: params[:name])
    if @user&.authenticate(params[:password])
      p @user.authentication_token
      render json: @user, only: %i[name authentication_token], status: :ok
    else
      render json: { failure: 'There is no such user.' }, status: :unauthorized
    end
  end
end
