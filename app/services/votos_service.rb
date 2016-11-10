class VotosService

  def initialize params
    @parametros = params
    @post_id = params[:votable_id]
    @tipos_de_post = [Comentario, Respuesta]
    asignar_usuario
  end

  def dar_voto_positivo
    tipo_de_post = encontrar_tipo_de_post
    post_a_votar = tipo_de_post.find @post_id
    post_a_votar.votos.create parametros_de_creacion

  end

  def dar_voto_negativo
    tipo_de_post = encontrar_tipo_de_post
    post_a_votar = tipo_de_post.find @post_id
    post_a_votar.votos.create parametros_de_creacion
  end

  def eliminar_voto
    @voto = Voto.find parametros_de_busqueda[:id]
    @voto.destroy
  end

  def obtener_valor_de_voto
    tipo_de_post = encontrar_tipo_de_post
    post_votado = tipo_de_post.find @post_id

    if post_votado.votos.count > 0
      post_votado.votos.first.valor
    else
      0
    end
  end

  private

  def asignar_usuario
    if @parametros[:usuario_id]
      @usuario = Usuario.find_by_id_externo(@parametros[:usuario_id])
    end
  end

  def encontrar_tipo_de_post
    @tipos_de_post.find { |tipo| tipo.exists? @post_id }
  end

  def parametros_de_creacion
    @parametros.permit(:votable_id, :valor).merge({usuario: @usuario})
  end

  def parametros_de_busqueda
    @parametros.permit(:id)
  end

end