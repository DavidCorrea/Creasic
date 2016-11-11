class CreateVoto < ActiveRecord::Migration[5.0]
  def change
    create_table :votos do |t|
      t.integer    :valor,   null: false
      t.references :votable, polymorphic: true, index: true
      t.integer    :usuario_id, null: false
      t.timestamps null: false
    end
  end
end
