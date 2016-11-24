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
    eliminar_acordes_no_presentes secuencia_a_editar
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
    transformar_notas_a_json

    @parametros.permit(:usuario, :titulo, :bpm, acordes_attributes: [ :posicion, :notas ]).merge({usuario_id: @usuario.id })
  end

  def parametros_de_busqueda
    @parametros.permit(:id, :secuencia_de_acordes_id)
  end

  def parametros_de_edicion
    transformar_notas_a_json

    @parametros.permit(:usuario, :titulo, :bpm, acordes_attributes: [ :id, :posicion, :notas ]).merge({usuario_id: @usuario.id })
  end

  def transformar_notas_a_json
    @parametros[:acordes_attributes].each do | acorde |
      acorde[:notas] = acorde[:notas].to_json
    end
  end

  def eliminar_acordes_no_presentes secuencia
    ids_presentes = @parametros[:acordes_attributes].map { |acorde| acorde[:id] }
    acordes_a_eliminar = secuencia.acordes.where.not(id: ids_presentes)
    acordes_a_eliminar.destroy_all
  end

end