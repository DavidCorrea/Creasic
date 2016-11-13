class CreateComentario < ActiveRecord::Migration[5.0]
  def change
    create_table :comentarios do |t|
      t.string     :contenido,   null: false, default: ''
      t.references :letra, null: false, default: ''
      t.timestamps null: false
    end
  end
end
