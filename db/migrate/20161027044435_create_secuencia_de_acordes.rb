class CreateSecuenciaDeAcordes < ActiveRecord::Migration[5.0]
  def change
    create_table :secuencias_de_acordes do |secuencia|
      secuencia.string :titulo, null: false, default: ''
      secuencia.integer :bpm, null: false

      secuencia.references :usuario, null: false, default: ''
    end
  end
end
