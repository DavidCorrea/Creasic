FactoryGirl.define do
  factory :letra do
    titulo 'Heathens'
    contenido 'All my friends are heathens, take it slow...'
    association :usuario, factory: :usuario
  end
end