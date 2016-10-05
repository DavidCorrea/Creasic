class CreateUsuarios < ActiveRecord::Migration[5.0]
  def change
    create_table :usuarios do |usuario|
      usuario.string :global_id, null: false

      usuario.timestamps null: false
    end
  end
end
