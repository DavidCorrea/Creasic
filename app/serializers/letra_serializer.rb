class LetraSerializer < CommonSerializer
  attributes :titulo, :contenido

  has_many :comentarios
end