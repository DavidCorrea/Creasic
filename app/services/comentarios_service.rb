class ComentariosService

  def initialize params
    @parametros = params
    @post_id = params[:comentable_id]
    asignar_usuario
  end

  def agregar_comentario
    tipo_de_post = encontrar_tipo_de_post
    post_a_comentar = tipo_de_post.find @post_id
    post_a_comentar.comentarios.create parametros_de_creacion_de_comentario

    post_a_comentar
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

  def encontrar_tipo_de_post
    tipo_de_post = @parametros[:tipo]
    tipos_de_posts[tipo_de_post.to_sym]
  end

  def tipos_de_posts
    {
        secuencia: SecuenciaDeAcordes,
        letra: Letra,
        cancion: Cancion
    }
  end

  def parametros_de_creacion_de_comentario
    @parametros.permit(:comentable_id, :contenido, :media_id).merge({usuario: @usuario})
  end

  def parametros_de_creacion_de_respuesta
    @parametros.permit(:comentario_id, :contenido).merge({usuario: @usuario})
  end

end