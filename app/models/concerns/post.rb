module Post
  extend ActiveSupport::Concern

  included do
    belongs_to :usuario
    has_many :comentarios, as: :comentable

    validates_presence_of :titulo
    validates_length_of :titulo, minimum: 1
  end

end