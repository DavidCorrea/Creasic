require 'rails_helper'

describe Usuario, type: :model do

  it { should validate_presence_of(:id_externo) }

end
