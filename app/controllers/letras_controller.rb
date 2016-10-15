class LetrasController < ApplicationController

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
    @service = LetrasService.new(params)
  end
end