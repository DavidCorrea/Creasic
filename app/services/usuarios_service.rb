class UsuariosService

  def initialize params
    @parametros = params
  end

  def crear_usuario
    unless Usuario.exists? parametros_de_creacion
      Usuario.create! parametros_de_creacion
    end
  end

  private

  def parametros_de_creacion
    @parametros.require(:usuario).permit(:id_externo, :email)
  end

end