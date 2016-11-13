require 'rails_helper'

describe UsuariosController, type: :controller do

  context 'POST to #crear' do

    it 'retorna 201' do
      post :crear, params: { id_externo: 'id123' }

      expect(response).to have_http_status 201
    end
  end
end