class AddEmailToUsuario < ActiveRecord::Migration[5.0]
  def change
    add_column :usuarios, :email, :string, null: false
  end
end
