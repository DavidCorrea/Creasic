class RenameCancionToLetra < ActiveRecord::Migration[5.0]
  def change
    rename_table :canciones, :letras
    rename_column :letras, :letra, :contenido
  end
end
