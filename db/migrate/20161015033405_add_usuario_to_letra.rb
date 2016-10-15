class AddUsuarioToLetra < ActiveRecord::Migration[5.0]
  def change
    add_column :letras, :usuario_id, :integer, null: false
  end
end
