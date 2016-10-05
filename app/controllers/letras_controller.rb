class LetrasController < ApplicationController

  before_action :crear_service

  def crear
    @letra = @service.crear_letra

    render json: @letra, status: :created
  end

  def todas
    render json: @service.todas_las_letras
  end

  private

  def crear_service
    @service = LetrasService.new(params)
  end
end