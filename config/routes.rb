Rails.application.routes.draw do

  resources :favorites, only: [:create, :destroy]
  resources :categories
  resources :posts, except: [:create, :destroy]
  resources :users, except: [:show, :create]

  get '/user_authorized', to: 'users#show'
  post '/signup', to: 'users#create'
  post '/posts', to: 'posts#create'
  delete '/posts/:id', to: 'posts#destroy'
  post '/login', to: 'sessions#create'
  delete "/logout", to: "sessions#destroy"
  get '/profile', to: 'users#show'
  post '/profile', to: 'users#create'
  patch '/profile/:id', to: 'users#update'
  get '/favorites', to: 'favorites#index'
  patch '/favorites/:id', to: 'favorites#create'

  
  # get 'sessions/create'
  # get 'sessions/destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
