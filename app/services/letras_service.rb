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

  def agregar_comentario
    letra_a_utilizar = Letra.find parametros_de_creacion_de_comentario[:letra_id]
    letra_a_utilizar.comentarios.create parametros_de_creacion_de_comentario
    letra_a_utilizar
  end

  def agregar_respuesta
    comentario_a_utilizar = Comentario.find parametros_de_creacion_de_respuesta[:comentario_id]
    comentario_a_utilizar.respuestas.create parametros_de_creacion_de_respuesta
    comentario_a_utilizar.letra
  end

  private

  def parametros_de_creacion
    @parametros.require(:letra).permit(:titulo, :contenido)
  end

  def parametros_de_busqueda
    @parametros.permit(:id, :letra_id)
  end

  def parametros_de_creacion_de_comentario
    @parametros.permit(:letra_id, :contenido)
  end

  def parametros_de_creacion_de_respuesta
    @parametros.permit(:comentario_id, :contenido)
  end

end