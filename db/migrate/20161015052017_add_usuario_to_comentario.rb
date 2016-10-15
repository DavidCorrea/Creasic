class AddUsuarioToComentario < ActiveRecord::Migration[5.0]
  def change
    add_column :comentarios, :usuario_id, :integer, null: false
  end
end
