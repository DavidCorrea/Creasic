require 'rails_helper'

describe SecuenciaDeAcordes, type: :model do

  it { should validate_presence_of(:titulo) }
  it { should validate_length_of(:titulo).is_at_least(3) }

  it { should validate_presence_of(:bpm) }
  it { should validate_numericality_of(:bpm).is_greater_than_or_equal_to(50) }
  it { should validate_numericality_of(:bpm).is_less_than_or_equal_to(250) }

end
