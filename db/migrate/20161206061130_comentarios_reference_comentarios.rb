class ComentariosReferenceComentarios < ActiveRecord::Migration[5.0]
  def change
    add_reference :comentarios, :comentario, index: true, null: true
  end
end