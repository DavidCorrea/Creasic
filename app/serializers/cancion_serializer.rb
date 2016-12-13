class CancionSerializer < ActiveModel::Serializer
  attributes :id, :usuario_id, :nombre_usuario, :titulo, :contenido, :audios

  has_many :comentarios
  has_many :votos
  has_many :audios

  def nombre_usuario
    object.usuario.nombre
  end

  def usuario_id
    object.usuario.id_externo
  end

end