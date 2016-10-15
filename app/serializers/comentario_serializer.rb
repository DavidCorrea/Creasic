class ComentarioSerializer < ActiveModel::Serializer
  attributes :id, :contenido, :respuestas, :email_usuario

  belongs_to :letra

  def email_usuario
    object.usuario.email
  end
end