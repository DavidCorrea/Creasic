class AudiosService

  def initialize params
    @parametros = params
    @cancion_id = params[:cancion_id]
    asignar_usuario
  end

  def agregar_audio
    cancion = Cancion.find @cancion_id
    cancion.audios.create parametros_de_creacion_de_audio

    cancion
  end

  private

  def asignar_usuario
    if @parametros[:usuario_id]
      @usuario = Usuario.find_by_id_externo(@parametros[:usuario_id])
    end
  end

  def parametros_de_creacion_de_audio
    @parametros.permit(:cancion_id, :media_id).merge({usuario: @usuario})
  end


end