class NotasController < ApiController

  before_action :crear_service

  def todas
    render json: @service.todas
  end

  def acordes
    render json: @service.todas_acordes
  end

  private

  def crear_service
    @service = NotasService.new(params)
  end
end