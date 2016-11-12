class ChangeRespuestasPuedenNoTenerContenido < ActiveRecord::Migration[5.0]
  def change
    change_column :comentarios, :contenido, :string, null: true
  end
end
