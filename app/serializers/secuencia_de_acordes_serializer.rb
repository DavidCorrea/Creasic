class SecuenciaDeAcordesSerializer < CommonSerializer
  attributes :titulo

  has_many :acordes
  has_many :comentarios
end