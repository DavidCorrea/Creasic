class Usuario < ApplicationRecord

  has_many :letras
  has_many :canciones
  has_many :secuencias_de_acordes

  validates_presence_of :id_externo
  validates_presence_of :email
  validates_presence_of :nombre
  validates_uniqueness_of :nombre
  validates_length_of :nombre, minimum: 3

end
