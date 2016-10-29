class CreateAcordes < ActiveRecord::Migration[5.0]
  def change
    create_table :acordes do |acorde|
      acorde.integer :posicion,  null: false, default: 0

      acorde.references :secuencia_de_acordes, null: false, default: ''
    end
  end
end
