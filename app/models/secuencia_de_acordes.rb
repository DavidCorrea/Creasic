class SecuenciaDeAcordes < ApplicationRecord

  belongs_to :usuario
  has_many :acordes
  has_many :comentarios, as: :comentable

  accepts_nested_attributes_for :acordes

end