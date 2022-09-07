Rails.application.routes.draw do

  resources :favorites, only: [:create, :destroy]
  resources :categories
  resources :posts, except: [:create], dependent: :destroy
  resources :users, except: [:show, :create]

  get 'sessions/click'
  get '/user_authorized', to: 'users#show'
  post '/signup', to: 'users#create'
  post '/posts', to: 'posts#create'
  post '/login', to: 'sessions#create'
  delete "/logout", to: "sessions#destroy"
  post '/profile', to: 'users#create'
  put '/profile', to: 'users#update'
  
  # get 'sessions/create'
  # get 'sessions/destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
