class LetrasService

  def initialize params
    @parametros = params
    asignar_usuario
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

  def editar
    letra_a_editar = ver_letra
    letra_a_editar.update! parametros_de_edicion
    letra_a_editar
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

  def asignar_usuario
    if @parametros[:usuario_id]
      @usuario = Usuario.find_by_id_externo(@parametros[:usuario_id])
    end
  end

  def parametros_de_creacion
    @parametros.require(:letra).permit(:titulo, :contenido).merge({usuario: @usuario})

  end

  def parametros_de_busqueda
    @parametros.permit(:id, :letra_id)
  end

  def parametros_de_creacion_de_comentario
    @parametros.permit(:letra_id, :contenido).merge({usuario: @usuario})
  end

  def parametros_de_creacion_de_respuesta
    @parametros.permit(:comentario_id, :contenido).merge({usuario: @usuario})
  end

  def parametros_de_edicion
    @parametros.require(:letra).permit(:titulo, :contenido).merge({usuario: @usuario})
  end

end