require 'rails_helper'

describe LetrasService, type: :model do

  let(:params) { ActionController::Parameters.new(parametros_especificos)}
  let(:service) { LetrasService.new(params)}
  let(:usuario) { create(:usuario) }
  let(:letra) { create(:letra) }

  describe '#crear_letra' do
    let(:titulo) { 'Shelter' }
    let(:contenido) { 'When I am older, I will be silent beside you...' }
    let(:parametros_especificos) {
      {
        usuario_id: usuario.id,
        titulo: titulo,
        contenido: contenido
      }
    }

    subject do
      service.crear_letra
    end

    it 'crea una nueva letra' do
      expect { subject }.to change { Letra.count }.by(1)
    end

    it 'crea una nueva letra con los mismos valores a los que vienen por parametro' do
      letra_creada = subject

      expect(letra_creada.titulo).to eq(titulo)
      expect(letra_creada.contenido).to eq(contenido)
      expect(letra_creada.usuario).to eq(usuario)
    end

    context 'cuando los valores no son validos' do
      let(:titulo) { '' }

      it 'lanza un error' do
        expect { subject }.to raise_error(CreasicException)
      end
    end
  end

  describe '#todas_las_letras' do
    let(:parametros_especificos) { {} }

    subject do
      service.todas_las_letras
    end

    it 'devuelve todas las letras' do
      create(:letra)

      expect(subject.count).to eq(1)
    end
  end

  describe '#ver_letra' do
    let(:parametros_especificos) {
      {
        id: id
      }
    }

    subject do
      service.ver_letra
    end

    context 'cuando el parametro pasado pertenece a una letra' do
      let(:id) { letra.id }

      it 'retorna la letra cuyo ID viene como parametro' do
        letra_retornada = subject

        expect(letra_retornada.id).to eq(letra.id)
      end
    end

    context 'cuando el parametro pasado no pertenece a ninguna letra' do
      let(:id) { 'EstoNoExiste' }

      it 'lanza un error' do
        expect { subject }.to raise_error(CreasicException)
      end
    end
  end

  describe '#editar' do
    let(:id) { letra.id }
    let(:titulo) { 'Shelter' }
    let(:contenido) { 'When I am older, I will be silent beside you...' }
    let(:parametros_especificos) {
      {
          id: id,
          titulo: titulo,
          contenido: contenido
      }
    }

    subject do
      service.editar
    end

    context 'cuando la letra existe y los valores son validos' do
      it 'edita la letra que pertenece al ID pasado por parametro' do
        letra_editada = subject

        expect(letra_editada.titulo).to eq(titulo)
        expect(letra_editada.contenido).to eq(contenido)
      end
    end

    context 'cuando la letra existe pero los valores no son validos' do
      let(:contenido) { '' }

      it 'lanza un error' do
        expect { subject }.to raise_error(CreasicException)
      end
    end

    context 'cuando la letra no existe' do
      let(:id) { 'letraInexistente' }

      it 'lanza un error' do
        expect { subject }.to raise_error(CreasicException)
      end
    end
  end

end
