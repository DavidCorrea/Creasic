class Letra < ApplicationRecord
  include Post

  validates_presence_of :contenido
  validates_length_of :contenido, minimum: 1

end