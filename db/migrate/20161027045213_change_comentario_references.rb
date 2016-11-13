class ChangeComentarioReferences < ActiveRecord::Migration[5.0]
  def change
    remove_column :comentarios, :letra_id
    add_reference :comentarios, :comentable, polymorphic: true, index: true
  end
end
