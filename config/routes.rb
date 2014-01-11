NewAuthDemo::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
  resources :gists, :defaults => { :format => :json },
                    :only => [:index, :create, :new, :show] do
    resource :favorite, :only => [:create, :destroy]
  end

  resources :favorites, :only => [:index]

  resource :session, :only => [:create, :destroy, :new]

  root :to => "root#root"
end
