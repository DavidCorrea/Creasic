class CancionesService

  def initialize params
    @parametros = params
    asignar_usuario
  end

  def crear_cancion
    Cancion.create! parametros_de_creacion
  end

  def todas_las_canciones
    Cancion.all
  end

  def ver_cancion
    Cancion.find parametros_de_busqueda[:id]
  end

  def editar
    cancion_a_editar = ver_cancion
    cancion_a_editar.update! parametros_de_edicion
    cancion_a_editar
  end

  private

  def asignar_usuario
    if @parametros[:usuario_id]
      @usuario = Usuario.find_by_id_externo(@parametros[:usuario_id])
    end
  end

  def parametros_de_creacion
    @parametros.require(:cancion).permit(:titulo, :contenido).merge({usuario: @usuario})
  end

  def parametros_de_busqueda
    @parametros.permit(:id, :cancion_id)
  end

  def parametros_de_edicion
    @parametros.require(:cancion).permit(:titulo, :contenido).merge({usuario: @usuario})
  end

end