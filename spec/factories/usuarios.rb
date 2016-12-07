FactoryGirl.define do
  factory :usuario do
    id_externo 'ID Externo'
    email 'usuario@test.com'
    sequence :nombre do |n|
      "UsuarioTest#{n}"
    end
  end
end