class Cancion < ApplicationRecord

  belongs_to :usuario
  has_many :comentarios, as: :comentable
  has_many :audios
  has_many :votos, as: :votable

end