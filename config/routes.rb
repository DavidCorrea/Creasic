Rails.application.routes.draw do

  root 'views#application_template'

  get 'views/*path', :to => 'views#partial_template'

end
