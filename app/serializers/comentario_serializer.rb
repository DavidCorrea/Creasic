class ComentarioSerializer < ActiveModel::Serializer
  attributes :id, :contenido, :respuestas

  belongs_to :letra
end