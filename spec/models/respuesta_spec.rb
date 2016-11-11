require 'rails_helper'

describe Letra, type: :model do

  it { should validate_presence_of(:titulo) }
  it { should validate_presence_of(:contenido) }

  it { should validate_length_of(:titulo).is_at_least(3) }
  it { should validate_length_of(:contenido).is_at_least(5) }

end
