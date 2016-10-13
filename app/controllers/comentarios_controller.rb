class ComentariosController < ApplicationController

  before_action :crear_service

  def crear
    @comentario = @service.crear_comentario

    render json: @comentario, status: :created
  end

  def todos
    render json: @service.todos_los_comentarios
  end



  private

  def crear_service
    @service = ComentariosService.new(params)
  end
end