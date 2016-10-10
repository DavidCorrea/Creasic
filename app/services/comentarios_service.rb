class ComentariosService

  def initialize params
    @parametros = params
  end

  def crear_comentario
    Comentario.create! parametros_de_creacion
  end

  def todos_los_comentarios
    Comentario.where(letra_id: parametros_de_busqueda[:letra_id])
  end

  private

  def parametros_de_creacion
    @parametros.require(:comentario).permit(:contenido, :letra_id)
  end

  def parametros_de_busqueda
    @parametros.permit(:letra_id)
  end

end