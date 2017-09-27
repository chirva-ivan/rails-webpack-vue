Rails.application.routes.draw do
  root to: 'index#index'

  get "/", to: "index#index", format: false

  get "/*path", to: "index#index", format: false
end
