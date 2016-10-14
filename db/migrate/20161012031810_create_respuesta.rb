class CreateRespuesta < ActiveRecord::Migration[5.0]
  def change
    create_table :respuestas do |t|
      t.string     :contenido,   null: false, default: ''
      t.references :comentario, null: false, default: ''
      t.timestamps null: false
    end
  end
end
