class Service

  def on_transaction
    yield
  rescue ActiveRecord::RecordInvalid => e
    raise CreasicException.new('Los valores ingresados no son validos', e.record.errors.full_messages)
  rescue ActiveRecord::RecordNotFound => e
    raise CreasicException.new('No se pudo encontrar lo buscado.', [])
  end

  def votables
    {
        comentario: Comentario
    }
  end

  def comentables
    {
        secuencia: SecuenciaDeAcordes,
        letra: Letra,
        cancion: Cancion
    }
  end

end