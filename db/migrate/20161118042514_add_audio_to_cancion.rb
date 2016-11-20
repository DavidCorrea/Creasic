class AddAudioToCancion < ActiveRecord::Migration[5.0]
  def change
    add_column    :canciones, :titulo, :string, null: true
    add_column    :canciones, :contenido, :text, null: true
  end
end
