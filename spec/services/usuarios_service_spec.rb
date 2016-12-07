require 'rails_helper'

describe UsuariosService, type: :model do

  let(:params) { ActionController::Parameters.new(parametros_especificos)}
  let(:service) { UsuariosService.new params }
  let(:usuario) { create(:usuario) }

  describe '#existe_usuario' do
    let(:parametros_especificos) {
      {
        id_externo: id_externo
      }
    }

    subject do
      service.existe_usuario
    end

    context 'cuando el usuario ya fue creado' do
      let(:id_externo) { usuario.id_externo }

      it 'retorna verdadero' do
        expect(subject).to be(true)
      end
    end

    context 'cuando el usuario no fue creado todavia' do
      let(:id_externo) { 'UsuarioInexistente' }

      it 'retorna falso' do
        expect(subject).to be(false)
      end
    end

  end

  describe '#nombre_esta_disponible' do
    let(:parametros_especificos) {
      {
          nombre: nombre
      }
    }

    subject do
      service.nombre_esta_disponible
    end

    context 'cuando hay un usuario con ese nombre' do
      let(:nombre) { usuario.nombre }

      it 'retorna falso' do
        expect(subject).to be(false)
      end
    end

    context 'cuando no hay un usuario con ese nombre' do
      let(:nombre) { 'NombreDisponible' }

      it 'retorna verdadero' do
        expect(subject).to be(true)
      end
    end
  end

  describe '#crear_usuario' do
    let(:id_externo) { 'id_externo' }
    let(:email) { 'usuario@test.com' }
    let(:nombre) { 'Test' }
    let(:parametros_especificos) {
      {
          id_externo: id_externo,
          email: email,
          nombre: nombre
      }
    }

    subject do
      service.crear_usuario
    end

    context 'cuando todos los valores son validos' do
      it 'crear el usuario' do
        expect { subject }.to change { Usuario.count }.by(1)
      end

      it 'crear el usuario con los datos pasados por parametro' do
        usuario_creado = subject

        expect(usuario_creado.id_externo).to eq(id_externo)
        expect(usuario_creado.email).to eq(email)
        expect(usuario_creado.nombre).to eq(nombre)
      end
    end

    context 'cuando alguno de los parametros no es valido' do
      let(:nombre) { '' }

      it 'lanza un error' do
        expect { subject }.to raise_error(CreasicException)
      end
    end

    context 'cuando el nombre ya fue tomado' do
      let(:nombre) { usuario.nombre }

      it 'lanza un error' do
        expect { subject }.to raise_error(CreasicException)
      end
    end
  end

  describe '#ver_usuario' do
    let(:id_externo) { usuario.id_externo }
    let(:parametros_especificos) {
      {
          id_externo: id_externo
      }
    }

    subject do
      service.ver_usuario
    end

    context 'cuando el usuario existe' do
      it 'retorna el usuario' do
        usuario_buscado = subject

        expect(usuario_buscado.id_externo).to eq(id_externo)
      end
    end

    context 'cuando el no usuario existe' do
      let(:id_externo) { 'usuarioInexistente' }

      it 'lanza un error' do
        expect { subject }.to raise_error(CreasicException)
      end
    end
  end

  describe '#todos' do
    let(:parametros_especificos) { {} }

    subject do
      service.todos
    end

    it 'trae todos los usuarios existentes hasta el momento' do
      create(:usuario)

      expect(subject.count).to eq(1)
    end
  end

  describe '#editar_usuario' do
    let(:id_externo) { usuario.id_externo }
    let(:instrumentos) { 'Quisiera poder aprender a tocar el piano.' }
    let(:parametros_especificos) {
      {
          id_externo: id_externo,
          descripcion: '',
          gustos: '',
          intereses: '',
          instrumentos: instrumentos
      }
    }

    subject do
      service.editar_usuario
    end

    context 'cuando el usuario a editar existe' do
      it 'edita el usuario correctamente' do
        usuario_editado = subject

        expect(usuario_editado.instrumentos).to eq(instrumentos)
      end
    end

    context 'cuando el usuario a editar no existe' do
      let(:id_externo) { 'UsuarioInexistente' }

      it 'lanza un error' do
        expect { subject }.to raise_error(CreasicException)
      end
    end
  end

end
