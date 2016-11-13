class CreateAcordesNotas < ActiveRecord::Migration[5.0]
  def change
    create_table :acordes_notas, id: false do |acorde_nota|
      acorde_nota.belongs_to :acorde
      acorde_nota.belongs_to :nota
    end
  end
end