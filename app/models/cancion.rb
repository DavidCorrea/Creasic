class Cancion < ApplicationRecord

  belongs_to :usuario
  has_many :comentarios, as: :comentable

end