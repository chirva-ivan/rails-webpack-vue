Rails.application.routes.draw do
  root to: 'landing#index'

  get "/", to: "landing#index", format: false

  get "/*path", to: "landing#index", format: false
end
