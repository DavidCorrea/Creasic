class ComentariosAnidadosController < ApplicationController

  before_action :crear_service

  def crear
    @comentario_anidado = @service.crear_comentario_anidado

    render json: @comentario_anidado, status: :created
  end

  def todos
    render json: @service.todos_los_comentarios_anidados
  end

  private

  def crear_service
    @service = ComentariosAnidadosService.new(params)
  end
end