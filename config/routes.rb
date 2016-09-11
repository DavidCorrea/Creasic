Rails.application.routes.draw do

  root 'views#application_template'

  get 'views/*path', :to => 'views#partial_template'

  devise_for :usuarios, :controllers => { registrations: 'registracion' }

end
