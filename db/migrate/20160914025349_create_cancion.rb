class CreateCancion < ActiveRecord::Migration[5.0]
  def change
    create_table :canciones do |t|
      t.string :titulo,  null: false, default: ''
      t.string :letra,   null: false, default: ''
      t.timestamps null: false
    end

  end
end
