class VotosController < ApiController

  before_action :crear_service

  def dar_voto
    @voto = @service.dar_voto
    render json: @voto
  end

  def eliminar_voto
    @service.eliminar_voto
  end

  private

  def crear_service
    @service = VotosService.new(params)
  end
end