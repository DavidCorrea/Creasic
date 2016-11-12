class Respuesta < ApplicationRecord

  belongs_to :usuario
  belongs_to :comentario
  has_many :votos, as: :votable
end