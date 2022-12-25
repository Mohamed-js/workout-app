Rails.application.routes.draw do
  root 'app#index'
  namespace :api do
    namespace :v1 do
      root to: 'movements#index'
      resources :users, only: %i[show create update]
      resources :sessions, only: :create
      resources :records, only: %i[index create show]
      resources :tracked_movements, only: %i[index create]
      resources :untracked_movements, only: :index
    end
  end
end
