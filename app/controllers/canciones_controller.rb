class CancionesController < ApiController

  before_action :crear_service

  def crear
    @cancion = @service.crear_cancion
    render json: @cancion, status: :created
  end

  def ver
    @cancion = @service.ver_cancion
    render json: @cancion
  end

  def todas
    render json: @service.todas_las_canciones
  end

  def editar
    render json: @service.editar
  end

  private

  def crear_service
    @service = CancionesService.new(params)
  end
end