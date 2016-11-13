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

  def parametros_de_edicion
    @parametros.require(:letra).permit(:titulo, :contenido).merge({usuario: @usuario})
  end

end