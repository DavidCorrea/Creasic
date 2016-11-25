Rails.application.routes.draw do

  root 'views#application_template'

  get  'views/*path',    :to => 'views#partial_template'

  scope '/usuarios' do
    get  '/existe/*id_externo'             , :to => 'usuarios#existe'
    get  '/nombre_esta_disponible/*nombre' , :to => 'usuarios#nombre_esta_disponible'
    get  '/todos'                          , :to => 'usuarios#todos'
    post '/crear'                          , :to => 'usuarios#crear'
    get  '/ver/*id_externo'                , :to => 'usuarios#ver'
    post '/editar/*id_externo'             , :to => 'usuarios#editar'
  end

  scope '/letras' do
    post '/crear',      :to => 'letras#crear'
    get  '/todas',      :to => 'letras#todas'
    get  '/ver/*id',    :to => 'letras#ver'
    post '/editar/*id', :to => 'letras#editar'
  end

  scope '/secuencias_de_acordes' do
    post '/crear',      :to => 'secuencias_de_acordes#crear'
    get  '/todas',      :to => 'secuencias_de_acordes#todas'
    get  '/ver/*id',    :to => 'secuencias_de_acordes#ver'
    post '/editar/*id', :to => 'secuencias_de_acordes#editar'
  end

  scope '/notas' do
    get '/todas',   :to => 'notas#todas'
    get '/acordes', :to => 'notas#acordes'
  end

  scope '/comentarios' do
    post '/comentar/*id',             :to => 'comentarios#agregar_comentario'
    post '/responder/*comentario_id', :to => 'comentarios#agregar_respuesta'
  end

  scope '/votos' do
    post '/dar_voto/*id',     :to => 'votos#dar_voto'
    get  '/obtener_valor_de_voto/*votable_id', :to => 'votos#obtener_valor_de_voto'
    post '/eliminar_voto/*id',     :to => 'votos#eliminar_voto'
  end

end
