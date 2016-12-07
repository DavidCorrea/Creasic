class CreasicException < StandardError
  attr_reader :mensaje, :errores

  def initialize(mensaje, errores)
    super mensaje
    @mensaje = mensaje
    @errores = errores
  end
end