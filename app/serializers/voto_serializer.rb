class VotoSerializer < ActiveModel::Serializer
  attributes :id, :valor, :usuario_id, :votable_id


  def usuario_id
    object.usuario.id_externo
  end
end