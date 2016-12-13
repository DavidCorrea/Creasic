class CancionesService < Service

  def initialize params
    @parametros = params
  end

  def crear_cancion
    on_transaction do
      Cancion.create! parametros_de_creacion
    end
  end

  def todas_las_canciones
    Cancion.all
  end

  def ver_cancion
    on_transaction do
      Cancion.find parametros_de_busqueda[:id]
    end
  end

  def editar
    on_transaction do
      cancion_a_editar = ver_cancion
      cancion_a_editar.update! parametros_de_edicion
      cancion_a_editar
    end
  end

  private

  def parametros_de_creacion
    @parametros.permit(:usuario_id, :titulo, :contenido)
  end

  def parametros_de_busqueda
    @parametros.permit(:id)
  end

  def parametros_de_edicion
    @parametros.permit(:cancion_id, :titulo, :contenido)
  end

end