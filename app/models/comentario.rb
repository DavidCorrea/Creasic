class Comentario < ApplicationRecord

  belongs_to :letra
  has_many :comentarios_anidados
end