class UsuariosController < ApplicationController

  before_action :crear_service

  def crear
    @service.crear_usuario

    head :created
  end

  private

  def crear_service
    @service = UsuariosService.new(params)
  end

end