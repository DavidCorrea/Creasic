class VotosService < Service

  def initialize params
    @parametros = params
  end

  def dar_voto
    on_transaction do
      tipo_de_post = encontrar_tipo_de_votable
      post_a_votar = tipo_de_post.find @parametros[:votable_id]
      post_a_votar.votos.create parametros_de_creacion
    end
  end

  def eliminar_voto
    on_transaction do
      voto = Voto.find parametros_de_busqueda[:id]
      voto.destroy
    end
  end

  private

  def parametros_de_creacion
    @parametros.permit(:usuario_id, :valor)
  end

  def parametros_de_busqueda
    @parametros.permit(:id)
  end

  def encontrar_tipo_de_votable
    tipo_de_post = @parametros[:tipo]
    votables[tipo_de_post.to_sym]
  end

end