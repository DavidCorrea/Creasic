class SecuenciaDeAcordesSerializer < ActiveModel::Serializer
  attributes :id, :usuario_id, :nombre_usuario, :titulo, :bpm

  has_many :acordes
  has_many :comentarios

  def usuario_id
    object.usuario.id_externo
  end

  def nombre_usuario
    object.usuario.nombre
  end

end