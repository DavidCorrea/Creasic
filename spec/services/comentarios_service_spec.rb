require 'rails_helper'

describe ComentariosService, type: :model do

  let(:params) { ActionController::Parameters.new(parametros_especificos)}
  let(:service) { ComentariosService.new params }
  let(:usuario) { create(:usuario) }
  let(:letra) { create(:letra) }

  describe '#agregar_comentario' do
    subject do
      service.agregar_comentario
    end

    context 'cuando los parametros son correctos' do
      let(:parametros_especificos) {
        {
            comentable_id: letra.id,
            usuario_id: usuario.id,
            contenido: 'Comentario super positivo.',
            media_id: '',
            tipo: 'letra'
        }
      }

      it 'agrega el comentario correctamente' do
        expect { subject }.to change { letra.comentarios.count }.by(1)
      end
    end

    context 'cuando los parametros no son correctos' do
      let(:parametros_especificos) {
        {
            comentable_id: letra.id,
            usuario_id: usuario.id,
            contenido: nil,
            media_id: nil,
            tipo: 'letra'
        }
      }

      it 'lanza un error' do
        expect { subject }.to raise_error(CreasicException)
      end
    end

  end

  describe '#agregar_respuesta' do
    subject do
      service = ComentariosService.new params
      service.agregar_respuesta
    end

    let(:comentario) { create(:comentario, contenido: 'Comentario super positivo.')}

    context 'cuando los parametros son correctos' do
      let(:parametros_especificos) {
        {
            comentario_id: comentario.id,
            usuario_id: usuario.id,
            contenido: 'Una respuesta eficaz.',
            media_id: '',
            tipo: 'letra'
        }
      }

      it 'agrega la respuesta correctamente' do
        expect { subject }.to change { comentario.comentarios.count }.by(1)
      end
    end

    context 'cuando los parametros no son correctos' do
      let(:parametros_especificos) {
        {
            comentario_id: comentario.id,
            usuario_id: usuario.id,
            contenido: '',
            media_id: nil,
            tipo: 'letra'
        }
      }

      it 'lanza un error custom' do
        expect { subject }.to raise_error(CreasicException)
      end
    end
  end

end
