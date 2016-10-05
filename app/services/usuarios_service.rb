class UsuariosService

  def initialize params
    @parametros = params
  end

  def crear_usuario
    unless Usuario.exists?(@parametros)
      Usuario.create!(id_externo: @parametros[:id_externo])
    end
  end

  private

  def parametros_de_creacion
    @parametros.require(:usuario).permit(:id_externo)
  end

end