class SecuenciaDeAcordes < ApplicationRecord
  include Post

  has_many :acordes
  accepts_nested_attributes_for :acordes

  validates_presence_of :bpm

  def actualizar_desde parametros
    eliminar_acordes_no_presentes parametros
    self.update! parametros
  end

  private

  def eliminar_acordes_no_presentes parametros
    ids_presentes = parametros[:acordes_attributes].map { |acorde| acorde[:id] }
    acordes_a_eliminar = self.acordes.where.not(id: ids_presentes)
    acordes_a_eliminar.destroy_all
  end

end