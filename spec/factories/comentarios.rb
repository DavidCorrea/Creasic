FactoryGirl.define do
  factory :comentario do
    association :usuario, factory: :usuario
  end

  factory :comentario_con_contenido, class: Comentario do
    association :usuario, factory: :usuario
    contenido 'Me gusta mucho esto.'
  end
end