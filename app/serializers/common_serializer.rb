class CommonSerializer < ActiveModel::Serializer
  attributes :id, :usuario_id, :email_usuario

  def email_usuario
    object.usuario.email
  end

  def usuario_id
    object.usuario.id_externo
  end
end