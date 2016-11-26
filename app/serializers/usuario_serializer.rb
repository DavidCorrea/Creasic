class UsuarioSerializer < ActiveModel::Serializer
  attributes :id_externo, :email, :nombre, :descripcion, :gustos, :intereses, :instrumentos

end