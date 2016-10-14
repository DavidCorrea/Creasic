class RespuestaSerializer < ActiveModel::Serializer
  attributes :id, :contenido

  belongs_to :comentario
end