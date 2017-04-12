Rails.application.routes.draw do
  get 'donate', to: 'donate#index'

  post 'donate', to: 'donate#create'
end
