Rails.application.routes.draw do
  get 'sessions/click'
  # get 'sessions/create'
  # get 'sessions/destroy'
  delete "/logout", to: "sessions#destroy"

  resources :favorites
  resources :categories
  resources :posts
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
