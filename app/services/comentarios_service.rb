class ComentariosService < Service

  def initialize params
    @parametros = params
  end

  def agregar_comentario
    on_transaction do
      tipo_de_post = encontrar_tipo_de_comentable
      post_a_comentar = tipo_de_post.find @parametros[:comentable_id]
      post_a_comentar.comentarios.create! parametros_de_creacion_de_comentario
      post_a_comentar
    end
  end

  def agregar_respuesta
    on_transaction do
      comentario_a_utilizar = Comentario.find parametros_de_creacion_de_respuesta[:comentario_id]
      comentario_a_utilizar.comentarios.create! parametros_de_creacion_de_respuesta
      comentario_a_utilizar.comentable
    end
  end

  private

  def parametros_de_creacion_de_comentario
    @parametros.permit(:usuario_id, :comentable_id, :contenido, :media_id)
  end

  def parametros_de_creacion_de_respuesta
    @parametros.permit(:usuario_id, :comentario_id, :media_id, :contenido)
  end

  def encontrar_tipo_de_comentable
    tipo_de_post = @parametros[:tipo]
    comentables[tipo_de_post.to_sym]
  end

end