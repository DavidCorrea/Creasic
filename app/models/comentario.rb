class Comentario < ApplicationRecord

  belongs_to :comentable, polymorphic: true
  belongs_to :usuario
  has_many :respuestas

end