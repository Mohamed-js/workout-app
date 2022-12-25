class Api::V1::TrackedMovementsController < ApplicationController
  before_action :set_user

  # ALL TRACKED MOVEMENTS
  def index
    @movements = @user.movements.uniq
    render json: @movements, status: :ok
  end

  # ADD NEW TRACKED MOVEMENT
  def create
    movement = @user.tracked_movements.build(movement_id: params[:movement_id], movement_count: 0)
    render json: { message: 'Successfully added!' }, status: :ok if movement.save
  end
end
