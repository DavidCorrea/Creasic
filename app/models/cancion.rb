class Cancion < ApplicationRecord
  include Post

  has_many :audios
  accepts_nested_attributes_for :audios

  validates_presence_of :contenido
  validates_length_of :contenido, minimum: 1

end