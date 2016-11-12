class ComentarioSerializer < CommonSerializer
  attributes :contenido, :media_id

  has_many :respuestas
end