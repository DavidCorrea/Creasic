class CancionSerializer < ActiveModel::Serializer
  attributes :id, :usuario_id, :email_usuario, :titulo, :contenido

  has_many :comentarios
  has_many :votos

  def email_usuario
    object.usuario.email
  end

  def usuario_id
    object.usuario.id_externo
  end

end