class RespuestaSerializer < ActiveModel::Serializer
  attributes :id, :contenido, :nombre_usuario, :media_id

  has_many :votos

  def nombre_usuario
    object.usuario.nombre
  end

end