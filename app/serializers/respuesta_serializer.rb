class RespuestaSerializer < ActiveModel::Serializer
  attributes :id, :contenido, :email_usuario, :votos, :media_id

  belongs_to :comentario

  def votos
    object.votos.map do |voto|
      {
          id: voto.id,
          valor: voto.valor,
          usuario_id: Usuario.find(voto.usuario_id).id_externo
      }
    end
  end

  def email_usuario
    object.usuario.email
  end
end