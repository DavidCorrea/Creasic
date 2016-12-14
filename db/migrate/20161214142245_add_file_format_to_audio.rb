class AddFileFormatToAudio < ActiveRecord::Migration[5.0]
  def change
    add_column :audios, :file_format, :string, null: false
  end
end
