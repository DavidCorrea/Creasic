class AcordesPrecargados < ActiveRecord::Migration[5.0]
  def change
    add_column :acordes, :notas, :text
  end
end
