class NotasController < ApiController

  before_action :crear_service

  def todas
    render json: @service.todas
  end

  private

  def crear_service
    @service = NotasService.new(params)
  end
end