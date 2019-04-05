Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :items
      resources :lists
      resources :user_waste_items
      resources :waste_items
      resources :users
      resources :wards
    end
end

root 'pages#index'
match '*path', to: 'pages#index', via: :all

get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  !request.xhr? && request.format.html?
end

end
