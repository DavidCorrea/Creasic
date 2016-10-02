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

  private

  def parametros_de_creacion
    @parametros.require(:letra).permit(:titulo, :contenido)
  end

end