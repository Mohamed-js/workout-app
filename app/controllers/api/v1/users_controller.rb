class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[show update]

  def show
    render json: @user, only: %i[name height current_weight last_weight], status: :ok
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: { message: 'Successfully signed up!' }, status: :ok
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @user.last_weight = @user.current_weight
    @user.current_weight = params[:weight]
    @user.height = params[:height]

    if @user.save
      render json: { message: 'Successfully updated!' }
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :password)
  end
end
