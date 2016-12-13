class ComentarioSerializer < ActiveModel::Serializer
  attributes :id, :contenido, :nombre_usuario, :media_id

  has_many :votos
  has_many :comentarios

  def nombre_usuario
    object.usuario.nombre
  end

end