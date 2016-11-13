class RespuestaSerializer < ActiveModel::Serializer
  attributes :id, :contenido, :email_usuario, :media_id

  has_many :votos

  def email_usuario
    object.usuario.email
  end

end