class Comentario < ApplicationRecord

  belongs_to :letra
  belongs_to :usuario
  has_many :respuestas
end