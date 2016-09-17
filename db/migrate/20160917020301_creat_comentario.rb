class CreatComentario < ActiveRecord::Migration[5.0]
  def change
    create_table :comentarios do |t|
      ## Database authenticatable
      t.string     :contenido,   null: false, default: ''
      t.references :cancion,   null: false, default: ''



      t.timestamps null: false
    end
  end
end
