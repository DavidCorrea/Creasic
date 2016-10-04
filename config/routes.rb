Rails.application.routes.draw do

  root 'views#application_template'

  get  'views/*path',    :to => 'views#partial_template'

  post 'usuarios/crear', :to => 'registracion#crear'

  post 'letras/crear',   :to => 'letras#crear'
  get  'letras/todas',   :to => 'letras#todas'

end
