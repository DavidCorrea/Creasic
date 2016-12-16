class RemoveUsuarioFromAudios < ActiveRecord::Migration[5.0]
  def change
    remove_column :audios, :usuario_id
  end
end