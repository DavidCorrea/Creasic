class SecuenciaDeAcordes < ApplicationRecord

  belongs_to :usuario
  has_many :acordes
  has_many :comentarios, as: :comentable

  accepts_nested_attributes_for :acordes

  validates_presence_of :titulo, :bpm
  validates_length_of :titulo, minimum: 3
  validates_numericality_of :bpm, less_than_or_equal_to: 200, greater_than_or_equal_to: 50

end