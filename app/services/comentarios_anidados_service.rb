class ComentariosAnidadosService

  def initialize params
    @parametros = params
  end

  def crear_comentario_anidado
    ComentarioAnidado.create! parametros_de_creacion
  end

  def todos_los_comentarios_anidados
    ComentarioAnidado.where(comentario_id: parametros_de_busqueda[:comentario_id])
  end

  private

  def parametros_de_creacion
    @parametros.require(:comentario_anidado).permit(:contenido, :comentario_id)
  end

  def parametros_de_busqueda
    @parametros.permit(:comentario_id)
  end

end