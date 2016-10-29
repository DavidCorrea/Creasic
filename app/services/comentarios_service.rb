class ComentariosService

  def initialize params
    @parametros = params
    asignar_usuario
  end

  def agregar_comentario
    letra_a_utilizar = Letra.find parametros_de_creacion_de_comentario[:comentable_id]
    letra_a_utilizar.comentarios.create parametros_de_creacion_de_comentario
    letra_a_utilizar
  end

  def agregar_respuesta
    comentario_a_utilizar = Comentario.find parametros_de_creacion_de_respuesta[:comentario_id]
    comentario_a_utilizar.respuestas.create parametros_de_creacion_de_respuesta
    comentario_a_utilizar.comentable
  end

  private

  def asignar_usuario
    if @parametros[:usuario_id]
      @usuario = Usuario.find_by_id_externo(@parametros[:usuario_id])
    end
  end

  def parametros_de_creacion_de_comentario
    @parametros.permit(:comentable_id, :contenido).merge({usuario: @usuario})
  end

  def parametros_de_creacion_de_respuesta
    @parametros.permit(:comentario_id, :contenido).merge({usuario: @usuario})
  end

end