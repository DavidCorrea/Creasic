require 'rails_helper'

describe SecuenciaDeAcordes, type: :model do

  it { should validate_presence_of(:titulo) }
  it { should validate_length_of(:titulo).is_at_least(1) }

  it { should validate_presence_of(:bpm) }

  describe '#actualizar_desde' do
    # TODO.
  end

end
