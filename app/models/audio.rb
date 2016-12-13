class Audio < ApplicationRecord

  belongs_to :usuario
  belongs_to :cancion
  has_many :votos, as: :votable
end
