class AddAudioIdToComentarios < ActiveRecord::Migration[5.0]
  def change
    add_column :comentarios, :media_id, :string
  end
end
