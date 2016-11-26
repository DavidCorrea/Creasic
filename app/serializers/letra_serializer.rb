class LetraSerializer < ActiveModel::Serializer
  attributes :id, :usuario_id, :nombre_usuario, :titulo, :contenido

  has_many :comentarios

  def usuario_id
    object.usuario.id_externo
  end

  def nombre_usuario
    object.usuario.nombre
  end

end