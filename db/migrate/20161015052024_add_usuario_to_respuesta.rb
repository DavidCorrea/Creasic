class AddUsuarioToRespuesta < ActiveRecord::Migration[5.0]
  def change
    add_column :respuestas, :usuario_id, :integer, null: false
  end
end
