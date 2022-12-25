class ApplicationController < ActionController::API
  private

  def set_user
    if request.headers['Authorization'].present?
      @user = User.find_by(authentication_token: request.headers['Authorization'])
      unless @user
        render json: {
          error: 'Not Authorized!'
        }, status: 401
      end
    else
      render json: {
        token: 'Missing Token'
      }, status: :unprocessable_entity
    end
  end
end
