class SecuenciaDeAcordesSerializer < ActiveModel::Serializer
  attributes :id, :titulo, :usuario_id, :email_usuario

  has_many :acordes
  has_many :comentarios

  def email_usuario
    object.usuario.email
  end

  def usuario_id
    object.usuario.id_externo
  end
end