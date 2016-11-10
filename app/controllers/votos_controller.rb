class VotosController < ApiController

  before_action :crear_service

  def dar_voto_positivo
    @voto_positivo = @service.dar_voto_positivo
    render json: @voto_positivo
  end

  def dar_voto_negativo
    @voto_negativo = @service.dar_voto_negativo
    render json: @voto_negativo
  end

  def eliminar_voto
    @service.eliminar_voto
  end

  private

  def crear_service
    @service = VotosService.new(params)
  end
end