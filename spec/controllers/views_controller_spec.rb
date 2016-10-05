require 'rails_helper'

describe ViewsController, type: :controller do

  context 'GET to #application_template' do

    it 'retorna 200' do
      get :application_template

      expect(response).to have_http_status 200
    end

    it 'renderiza el template de la aplicacion' do
      get :application_template

      expect(response).to render_template 'application_template'
    end
  end

  context 'GET to #partial_template' do
    let(:partial_a_usar) { 'app' }

    it 'retorna 200' do
      get :partial_template, params: { path: partial_a_usar }

      expect(response).to have_http_status 200
    end

    it 'renderiza el partial indicado por parametro' do
      get :partial_template, params: { path: partial_a_usar }

      expect(response).to render_template 'partials/app'
    end
  end
end