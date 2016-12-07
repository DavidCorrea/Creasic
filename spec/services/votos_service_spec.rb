require 'rails_helper'

describe VotosService, type: :model do

  let(:service) { VotosService.new(params) }
  let(:voto) { create(:voto_positivo) }
  let(:comentario) { create(:comentario_con_contenido) }
  let(:usuario) { create(:usuario) }
  let(:params) { ActionController::Parameters.new(parametros_especificos)}

  describe '#dar_voto' do
    let(:votable_id) { comentario.id }
    let(:parametros_especificos) {
      {
          usuario_id: usuario.id,
          votable_id: votable_id,
          tipo: 'comentario',
          valor: 1
      }
    }

    subject do
      service.dar_voto
    end

    context 'al querer darle un voto a un post existente' do
      it 'vota satisfactoriamente' do
        expect { subject }.to change { comentario.votos.count }.by(1)
      end
    end

    context 'al querer darle un voto a un post inexistente' do
      let(:votable_id) { 'PostInexistente' }

      it 'lanza un error' do
        expect { subject }.to raise_error(CreasicException)
      end
    end
  end

  describe '#eliminar_voto' do
    let(:id) { voto.id }
    let(:parametros_especificos) {
      {
        id: id
      }
    }

    subject do
      service.eliminar_voto
    end

    context 'al querer eliminar un voto existente' do
      it 'lo elimina satisfactoriamente' do
        comentario_del_voto = voto.votable

        expect { subject }.to change { comentario_del_voto.votos.count }.by(-1)
      end
    end

    context 'al querer eliminar un voto inexistente' do
      let(:id) { 'VotoInexistente' }

      it 'lanza un error' do
        expect { subject }.to raise_error(CreasicException)
      end
    end
  end

end
