Rails.application.routes.draw do

  root 'views#application_template'

  get 'views/*path', :to => 'views#partial_template'

  devise_for :usuarios, :controllers => { registrations: 'registracion' }

  post 'cancion/crear_cancion' => 'cancion#crear_cancion'

  get 'cancion/obtener_canciones' => 'cancion#obtener_canciones'

end
