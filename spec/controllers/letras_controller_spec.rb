require 'rails_helper'

describe LetrasController, type: :controller do

  let(:titulo_de_letra) { 'A simple song' }
  let(:contenido_de_letra) { 'Hello' }
  let(:parametros_de_creacion) { { letra: { titulo: titulo_de_letra, contenido: contenido_de_letra } } }

  context 'POST to #crear' do
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

  context 'GET to #ver' do
    let(:ultima_letra_creada) { Letra.last }
    before :each do
      post :crear, params: parametros_de_creacion
    end

    it 'retorna 200' do
      get :ver, params: { id: ultima_letra_creada.id }

      expect(response).to have_http_status 200
    end

    it 'retorna la letra' do
      get :ver, params: { id: ultima_letra_creada.id }

      expect(respuesta_como_json['titulo']).to eq ultima_letra_creada.titulo
      expect(respuesta_como_json['contenido']).to eq ultima_letra_creada.contenido
    end
  end
end