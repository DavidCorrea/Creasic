require 'rails_helper'

describe Usuario, type: :model do

  it { should validate_presence_of(:id_externo) }

  it { should validate_presence_of(:nombre) }
  it { should validate_length_of(:nombre).is_at_least(3) }

end
