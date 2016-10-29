class CreateNotas < ActiveRecord::Migration[5.0]
  def change
    create_table :notas do |nota|
      nota.string :cifrado, null: false
      nota.string :nombre, null: false
    end
  end
end
