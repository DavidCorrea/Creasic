class AudiosService < Service

  def initialize params
    @parametros = params
  end

  def agregar_audio
    cancion = Cancion.find @parametros[:cancion_id]
    cancion.audios.create parametros_de_creacion_de_audio

    cancion
  end

  private

  def parametros_de_creacion_de_audio
    @parametros.permit(:usuario_id, :cancion_id, :media_id)
  end


end