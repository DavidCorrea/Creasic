class CreateCanciones < ActiveRecord::Migration[5.0]
  def change
    create_table :canciones do |cancion|
      cancion.references :usuario, null: false, default: ''
    end
  end
end
