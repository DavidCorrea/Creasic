class ComentarioSerializer < ActiveModel::Serializer
  attributes :id, :contenido, :email_usuario, :media_id

  has_many :votos
  has_many :respuestas

  def email_usuario
    object.usuario.email
  end

end