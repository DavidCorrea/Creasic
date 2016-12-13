require 'rails_helper'

describe Comentario, type: :model do

  subject do
    build(:comentario, media_id: media_id, contenido: contenido)
  end

  context 'cuando media_id y contenido estan presentes' do
    let(:media_id) { '$up3rM3d14ID' }
    let(:contenido) { 'Este es un comentario positivo' }

    it 'no puede ser guardado' do
      expect(subject.invalid?).to eq(true)
    end
  end

  context 'cuando ninguno de media_id y contenido estan presentes' do
    let(:media_id) { nil }
    let(:contenido) { nil }

    it 'no puede ser guardado' do
      expect(subject.invalid?).to eq(true)
    end
  end

  context 'cuando alguno de media_id y contenido estan presentes' do
    let(:media_id) { '$up3rM3d14ID' }
    let(:contenido) { nil }

    it 'puede ser guardado' do
      expect(subject.valid?).to eq(true)
    end
  end

  context 'cuando alguno de media_id y contenido estan presentes' do
    let(:media_id) { nil }
    let(:contenido) { 'Este es un comentario positivo' }

    it 'puede ser guardado' do
      expect(subject.valid?).to eq(true)
    end
  end

end
