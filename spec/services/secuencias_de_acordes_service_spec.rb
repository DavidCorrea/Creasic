require 'rails_helper'

describe SecuenciasDeAcordesService, type: :model do

  let(:service) { SecuenciasDeAcordesService.new(params) }
  let(:params) { ActionController::Parameters.new(parametros_especificos)}

  describe '#crear' do
    let(:usuario_id) { create(:usuario).id }
    let(:titulo) { 'Improvising' }
    let(:parametros_especificos) {
      {
        usuario_id: usuario_id,
        titulo: titulo,
        bpm: 128,
        acordes_attributes: [
            {
              posicion: 1,
              notas: [
                  {
                      cifrado: 'C#'
                  }
              ]
            }
        ]
      }
    }

    subject do
      service.crear
    end

    context 'cuando todos los parametros son validos' do
      it 'crea una nueva secuencia' do
        expect { subject }.to change { SecuenciaDeAcordes.count }.by(1)
      end
    end

    context 'cuando algun parametro es invalido' do
      let(:titulo) { '' }

      it 'lanza un error' do
        expect { subject }.to raise_error(CreasicException)
      end
    end
  end

  describe '#todas' do
    let(:parametros_especificos) { {} }

    subject do
      service.todas
    end

    it 'retorna todas las creadas hasta el momento' do
      create(:secuencia_de_acordes)

      expect(subject.count).to eq(1)
    end
  end

  describe '#ver' do
    let(:secuencia_de_acordes_id) { create(:secuencia_de_acordes).id }
    let(:parametros_especificos) {
      {
        id: secuencia_de_acordes_id
      }
    }

    subject do
      service.ver
    end

    context 'cuando la secuencia existe' do
      it 'la retorna efectivamente' do
        secuencia_a_mostrar = subject

        expect(secuencia_a_mostrar.id).to eq(secuencia_de_acordes_id)
      end
    end

    context 'cuando la secuencia no existe' do
      let(:secuencia_de_acordes_id) { 'SecuenciaInexistente' }

      it 'lanza un error' do
        expect { subject }.to raise_error(CreasicException)
      end
    end
  end

  describe '#editar' do
    let(:id) { create(:secuencia_de_acordes).id }
    let(:usuario_id) { create(:usuario).id }
    let(:titulo) { 'Improvising... again...' }
    let(:parametros_especificos) {
      {
          id: id,
          usuario_id: usuario_id,
          titulo: titulo,
          bpm: 128,
          acordes_attributes: [
              {
                  posicion: 1,
                  notas: [
                      {
                          cifrado: 'C#'
                      }
                  ]
              }
          ]
      }
    }

    subject do
      service.editar
    end

    context 'cuando todos los parametros son validos' do
      it 'la secuencia es editada correctamente' do
        secuencia_editada = subject

        expect(secuencia_editada.titulo).to eq(titulo)
      end
    end

    context 'cuando la secuencia no existe' do
      let(:id) { 'SecuenciaInexistente' }

      it 'lanza un error' do
        expect { subject }.to raise_error(CreasicException)
      end
    end

    context 'cuando algun parametro es invalido' do
      let(:titulo) { '' }

      it 'lanza un error' do
        expect { subject }.to raise_error(CreasicException)
      end
    end

  end
end
