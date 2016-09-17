class Cancion < ActiveRecord::Migration[5.0]
  def change
    create_table :canciones do |t|
      ## Database authenticatable
      t.string :titulo,  null: false, default: ''
      t.string :letra,   null: false, default: ''



      t.timestamps null: false
    end

  end
end
