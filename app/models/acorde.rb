class Acorde < ApplicationRecord

  belongs_to :secuencia_de_acordes

  validates_presence_of :posicion

end