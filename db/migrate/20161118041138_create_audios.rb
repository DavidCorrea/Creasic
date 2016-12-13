class CreateAudios < ActiveRecord::Migration[5.0]
  def change
    create_table :audios do |t|
      t.string :media_id, null: false
      t.integer :usuario_id, null: false
      t.references :cancion, null: false, index: true

      t.timestamps
    end
  end
end
