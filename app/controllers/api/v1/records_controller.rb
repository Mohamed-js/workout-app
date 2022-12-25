class Api::V1::RecordsController < ApplicationController
  before_action :set_user

  # ALL USER RECORDS
  def index
    @tracked = @user.ordered_tracked_movements
    render json: @tracked, include: :movement, status: :ok
  end

  # SHOW TOP SCORE
  def show
    @top = @user.top_score(params[:id])
    render json: @top, status: :ok
  end

  # CREATE NEW RECORD
  def create
    movement = @user.tracked_movements.build(movement_id: params[:movement_id], movement_count: params[:movement_count])
    render json: { message: 'Successfully added!' }, status: :ok if movement.save
  end
end
