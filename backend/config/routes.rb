Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :seasons, only: [:index, :show]
  resources :activities, except: [:update]

end
