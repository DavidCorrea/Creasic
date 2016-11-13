class AddAudioIdToRespuestas < ActiveRecord::Migration[5.0]
  def change
    add_column :respuestas, :media_id, :string
  end
end