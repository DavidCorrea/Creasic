require 'rails_helper'

describe LetrasController, type: :controller do

  context 'POST to #crear' do
    let(:titulo_de_letra) { 'A simple song' }
    let(:contenido_de_letra) { 'Hello' }
    let(:parametros_de_creacion) { { letra: { titulo: titulo_de_letra, contenido: contenido_de_letra } } }

    it 'retorna 201' do
      post :crear, params: parametros_de_creacion

      expect(response).to have_http_status 201
    end

    it 'retorna la cancion recien creada' do
      post :crear, params: parametros_de_creacion

      expect(respuesta_como_json['titulo']).to eq titulo_de_letra
      expect(respuesta_como_json['contenido']).to eq contenido_de_letra
    end
  end

  context 'GET to #todas' do

    it 'retorna 200' do
      get :todas

      expect(response).to have_http_status 200
    end
  end
end