class Api::V1::UntrackedMovementsController < ApplicationController
  before_action :set_user

  # ALL UNTRACKED MOVEMENTS
  def index
    @tracked_movements = @user.movements
    @all_movements = Movement.all
    @movements = @all_movements - @tracked_movements
    render json: @movements, status: :ok
  end
end
