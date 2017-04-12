Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  get 'donate', to: 'donate#index'

  post 'donate', to: 'donate#create'
end
