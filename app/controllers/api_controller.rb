class ApiController < ApplicationController

  before_action :cargar_usuario
  around_action :verificar_errores

  def cargar_usuario
    if params[:usuario_id]
      usuario = Usuario.find_by_id_externo(params[:usuario_id])
      params[:usuario_id] = usuario.id
    end
  end

  def verificar_errores
    yield
  rescue CreasicException => e
    render json: { mensaje: e.mensaje, errores: e.errores }, status: :unprocessable_entity
  end

end