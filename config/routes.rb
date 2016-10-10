Rails.application.routes.draw do

  root 'views#application_template'

  get  'views/*path',    :to => 'views#partial_template'

  post 'usuarios/crear', :to => 'usuarios#crear'

  post 'letras/crear',   :to => 'letras#crear'
  get  'letras/todas',   :to => 'letras#todas'
  get  'letras/ver/*id', :to => 'letras#ver'

  post 'comentarios/crear', :to => 'comentarios#crear'
  get 'comentarios/todos/*letra_id', :to => 'comentarios#todos'

end
