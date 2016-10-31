class ComentariosController < ApiController

  before_action :crear_service

  def agregar_comentario
    @post = @service.agregar_comentario
    render json: @post, status: :created
  end

  def agregar_respuesta
    @post = @service.agregar_respuesta
    render json: @post, status: :created
  end

  private

  def crear_service
    @service = ComentariosService.new(params)
  end

end