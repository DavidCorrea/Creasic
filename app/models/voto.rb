class Voto < ApplicationRecord

  belongs_to :votable, polymorphic: true
  belongs_to :usuario

end