class UsuariosController < ApplicationController

  before_action :crear_service

  def existe
    render json: @service.existe_usuario
  end

  def nombre_esta_disponible
    render json: @service.nombre_esta_disponible
  end

  def crear
    @service.crear_usuario

    head :created
  end

  def ver
    render json: @service.ver_usuario
  end

  def todos
    render json: @service.todos
  end

  def editar
    render json: @service.editar_usuario
  end

  private

  def crear_service
    @service = UsuariosService.new(params)
  end

end