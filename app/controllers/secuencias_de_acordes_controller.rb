class SecuenciasDeAcordesController < ApiController

  before_action :crear_service

  def crear
    render json: @service.crear, status: :created
  end

  def todas
    render json: @service.todas
  end

  def ver
    render json: @service.ver
  end

  def editar
    render json: @service.editar
  end

  private

  def crear_service
    @service = SecuenciasDeAcordesService.new(params)
  end

end