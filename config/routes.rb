Rails.application.routes.draw do

  resources :favorites
  resources :categories
  resources :posts
  resources :users, except: [:show, :create]

  get 'sessions/click'
  get '/user_authorized', to: 'users#show'
  post '/signup', to: 'users#create'
  
  post '/login', to: 'sessions#create'
  delete "/logout", to: "sessions#destroy"
  
  # get 'sessions/create'
  # get 'sessions/destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
