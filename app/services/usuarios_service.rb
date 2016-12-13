class UsuariosService < Service

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
    on_transaction do
      Usuario.create! parametros_de_creacion
    end
  end

  def ver_usuario
    on_transaction do
      Usuario.find_by_id_externo!(id_externo)
    end
  end

  def todos
    Usuario.all
  end

  def editar_usuario
    on_transaction do
      usuario_a_editar = ver_usuario
      usuario_a_editar.update!(parametros_de_edicion usuario_a_editar)
      usuario_a_editar
    end
  end

  private

  def parametros_de_creacion
    @parametros.permit(:id_externo, :email, :nombre)
  end

  def parametros_de_edicion usuario
    @parametros.permit(:descripcion, :gustos, :intereses, :instrumentos).merge(id: usuario.id)
  end

  def id_externo
    @parametros[:id_externo]
  end

  def nombre
    @parametros[:nombre]
  end

end