class AcordeSerializer < ActiveModel::Serializer
  attributes :id, :posicion, :notas, :secuencia_de_acordes_id
end