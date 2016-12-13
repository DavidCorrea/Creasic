FactoryGirl.define do
  factory :secuencia_de_acordes do
    association :usuario, factory: :usuario
    titulo 'Improvising'
    bpm 128

    after(:create) do |secuencia|
      create_list(:acorde, 1, secuencia_de_acordes: secuencia)
    end
  end
end