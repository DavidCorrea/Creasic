class NotasService

  def initialize params
    @parametros = params
  end

  def todas
    Nota.all
  end

end