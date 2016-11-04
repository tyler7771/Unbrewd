Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resources :roasters, only: [:index, :create, :update]
    resources :drinks, only: [:create, :show, :index, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end
  root to: 'static_pages#root'
end
