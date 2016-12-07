class LetrasController < ApiController

  before_action :cargar_usuario, except: [:ver, :todas]
  before_action :crear_service

  def crear
    @letra = @service.crear_letra
    render json: @letra, status: :created
  end

  def ver
    @letra = @service.ver_letra
    render json: @letra
  end

  def todas
    render json: @service.todas_las_letras
  end

  def editar
    render json: @service.editar
  end

  private

  def crear_service
    @service = LetrasService.new(params)
  end
end