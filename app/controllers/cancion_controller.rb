class CancionController < ApplicationController

  def crear_cancion
    parametros_de_cancion = params.require(:cancion).permit(:titulo, :letra)
    @cancion = Cancion.create! parametros_de_cancion

    render json: @cancion, status: :created
  end
end