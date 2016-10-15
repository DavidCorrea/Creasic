class RespuestaSerializer < ActiveModel::Serializer
  attributes :id, :contenido, :email_usuario

  belongs_to :comentario

  def email_usuario
    object.usuario.email
  end
end