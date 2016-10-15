class Usuario < ApplicationRecord

  has_many :letras

  validates_presence_of :id_externo
  validates_presence_of :email

end
