class SecuenciasDeAcordesService

  def initialize params
    @parametros = params
    asignar_usuario
  end

  def crear
    SecuenciaDeAcordes.create! parametros_de_creacion
  end

  def todas
    SecuenciaDeAcordes.all
  end

  def ver
    SecuenciaDeAcordes.find parametros_de_busqueda[:id]
  end

  def editar
    secuencia_a_editar = ver
    secuencia_a_editar.update! parametros_de_edicion
    secuencia_a_editar
  end

  private

  def asignar_usuario
    if @parametros[:usuario_id]
      @usuario = Usuario.find_by_id_externo(@parametros[:usuario_id])
    end
  end

  def parametros_de_creacion
    @parametros.require(:secuencia_de_acordes).permit(:usuario, :titulo, :bpm, acordes_attributes: [ nota_ids: [] ]).merge({usuario_id: @usuario.id })
  end

  def parametros_de_busqueda
    @parametros.permit(:id, :secuencia_de_acordes_id)
  end

  def parametros_de_edicion
    @parametros.require(:secuencia_de_acordes).permit(:usuario, :titulo, :bpm, acordes_attributes: [ :id, nota_ids: [] ]).merge({usuario_id: @usuario.id })
  end

end