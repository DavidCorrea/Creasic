class ComentarioSerializer < ActiveModel::Serializer
  attributes :id, :contenido, :respuestas, :email_usuario, :votos

  belongs_to :letra

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