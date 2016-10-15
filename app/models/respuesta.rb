class Respuesta < ApplicationRecord

  belongs_to :comentario
  belongs_to :usuario

end