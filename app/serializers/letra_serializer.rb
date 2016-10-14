class LetraSerializer < ActiveModel::Serializer
  attributes :id, :titulo, :contenido

  has_many :comentarios
end