class SecuenciasDeAcordesService < Service

  def initialize params
    @parametros = params
  end

  def crear
    on_transaction do
      SecuenciaDeAcordes.create! parametros_de_creacion
    end
  end

  def todas
    SecuenciaDeAcordes.all
  end

  def ver
    on_transaction do
      SecuenciaDeAcordes.find parametros_de_busqueda[:id]
    end
  end

  def editar
    on_transaction do
      secuencia_a_editar = ver
      secuencia_a_editar.actualizar_desde parametros_de_edicion
      secuencia_a_editar
    end
  end

  private

  def parametros_de_creacion
    transformar_notas_a_json

    @parametros.permit(:usuario_id, :titulo, :bpm, acordes_attributes: [ :posicion, :notas ])
  end

  def parametros_de_busqueda
    @parametros.permit(:id)
  end

  def parametros_de_edicion
    transformar_notas_a_json

    @parametros.permit(:usuario_id, :titulo, :bpm, acordes_attributes: [ :id, :posicion, :notas ])
  end

  def transformar_notas_a_json
    @parametros[:acordes_attributes].each do | acorde |
      acorde[:notas] = acorde[:notas].to_json
    end
  end

end