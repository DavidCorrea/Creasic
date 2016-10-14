class Comentario < ApplicationRecord

  belongs_to :letra
  has_many :respuestas
end