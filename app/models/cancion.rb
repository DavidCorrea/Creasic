class Cancion < ApplicationRecord

  belongs_to :usuario
  has_many :comentarios, as: :comentable
  has_many :audios
  has_many :votos, as: :votable
  include Post

  validates_presence_of :contenido
  validates_length_of :contenido, minimum: 1

end