class NotasService

  def initialize params
    @parametros = params
  end

  def todas
    Nota.all
  end

  def todas_acordes
    Acorde.where(default: true)
  end

end