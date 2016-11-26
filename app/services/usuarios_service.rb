class UsuariosService

  def initialize params
    @parametros = params
  end

  def existe_usuario
    Usuario.exists?(id_externo: id_externo)
  end

  def nombre_esta_disponible
    !Usuario.exists?(nombre: nombre)
  end

  def crear_usuario
    Usuario.create! parametros_de_creacion
  end

  def ver_usuario
    Usuario.find_by_id_externo(id_externo)
  end

  def todos
    Usuario.all
  end

  def editar_usuario
    usuario_a_editar = ver_usuario
    usuario_a_editar.update!(parametros_de_edicion usuario_a_editar)
    usuario_a_editar
  end

  private

  def parametros_de_creacion
    @parametros.require(:usuario).permit(:id_externo, :email, :nombre)
  end

  def parametros_de_edicion usuario
    @parametros.require(:usuario).permit(:descripcion, :gustos, :intereses, :instrumentos).merge(id: usuario.id)
  end

  def id_externo
    @parametros[:id_externo]
  end

  def nombre
    @parametros[:nombre]
  end

end