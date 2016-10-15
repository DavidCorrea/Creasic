class ChangeContenidoFromStringToText < ActiveRecord::Migration[5.0]
  def change
    change_column :letras, :contenido, :text
  end
end
