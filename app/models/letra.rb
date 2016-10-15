class Letra < ApplicationRecord

  belongs_to :usuario
  has_many :comentarios

  validates_presence_of :titulo, :contenido
  validates_length_of :titulo, minimum: 3
  validates_length_of :contenido, minimum: 5

end