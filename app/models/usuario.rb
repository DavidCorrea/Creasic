class Usuario < ApplicationRecord

  has_many :letras
  has_many :canciones
  has_many :secuencias_de_acordes

  validates_presence_of :id_externo, :email, :nombre
  validates_uniqueness_of :nombre
  validates_length_of :nombre, minimum: 3

end
