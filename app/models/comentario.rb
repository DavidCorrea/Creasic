class Comentario < ApplicationRecord

  belongs_to :comentable, polymorphic: true
  belongs_to :comentario
  belongs_to :usuario

  has_many :comentarios, foreign_key: 'comentario_id'
  has_many :votos, as: :votable

  validate :tiene_contenido_o_media_id

  private

  def tiene_contenido_o_media_id
    mensaje_de_error = 'El comentario debe tener o contenido o algun archivo de audio.'

    if contenido.blank? && media_id.blank?
      errors[:base] << mensaje_de_error
    end

    if !contenido.blank? && !media_id.blank?
      errors[:base] << mensaje_de_error
    end
  end
end