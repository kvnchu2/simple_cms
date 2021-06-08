Rails.application.routes.draw do
  root 'demo#index'
  get 'demo/index'
  get 'demo/hello'
  get 'demo/contact'
  get 'demo/about'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #default route
  get ':controller(/:action(/:id))'
end
