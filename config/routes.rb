Rails.application.routes.draw do

  resources :favorites
  resources :categories
  resources :posts
  resources :users, except: [:index, :show]

  get '/current_users', to: 'users#show'

  # get 'sessions/click'
  # get 'sessions/create'
  # get 'sessions/destroy'
  delete "/logout", to: "sessions#destroy"
  post '/login', to: 'sessions#create'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
