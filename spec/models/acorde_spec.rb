require 'rails_helper'

describe Acorde, type: :model do

  it { should validate_presence_of(:posicion) }

end
