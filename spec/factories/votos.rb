FactoryGirl.define do
  factory :voto_positivo, class: Voto do
    association :usuario, factory: :usuario
    association :votable, factory: :comentario_con_contenido
    valor +1
  end

  factory :voto_negativo, class: Voto do
    association :usuario, factory: :usuario
    association :votable, factory: :comentario_con_contenido
    valor -1
  end
end