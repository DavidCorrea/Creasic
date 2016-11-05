class ComentarioSerializer < ActiveModel::Serializer
  attributes :id, :contenido, :respuestas, :email_usuario, :media_id

  belongs_to :letra

  def email_usuario
    object.usuario.email
  end

  def respuestas
    object.respuestas.map do |respuesta|
      {
          id: respuesta.id,
          contenido: respuesta.contenido,
          email_usuario: respuesta.usuario.email
      }
    end
  end
end