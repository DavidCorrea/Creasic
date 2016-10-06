class LetrasService

  def initialize params
    @parametros = params
  end

  def crear_letra
    Letra.create! parametros_de_creacion
  end

  def todas_las_letras
    Letra.all
  end

  def ver_letra
    Letra.find parametros_de_busqueda[:id]
  end

  private

  def parametros_de_creacion
    @parametros.require(:letra).permit(:titulo, :contenido)
  end

  def parametros_de_busqueda
    @parametros.permit(:id)
  end

end