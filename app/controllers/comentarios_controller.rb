class ComentariosController < ApiController

  before_action :crear_service

  def agregar_comentario
    @letra = @service.agregar_comentario
    render json: @letra, status: :created
  end

  def agregar_respuesta
    @letra = @service.agregar_respuesta
    render json: @letra, status: :created
  end

  private

  def crear_service
    @service = ComentariosService.new(params)
  end

end