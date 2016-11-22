class AgregarNombreAUsuarios < ActiveRecord::Migration[5.0]
  def change
    add_column :usuarios, :nombre,       :string, null: false
    add_column :usuarios, :descripcion,  :text,   null: false, default: ''
    add_column :usuarios, :gustos,       :text,   null: false, default: ''
    add_column :usuarios, :intereses,    :text,   null: false, default: ''
    add_column :usuarios, :instrumentos, :text,   null: false, default: ''
  end
end
