class Acorde < ApplicationRecord

  belongs_to :secuencia_de_acordes
  has_and_belongs_to_many :notas

end