class ApiController < ApplicationController

  around_action :verificar_errores

  def verificar_errores
    yield
  rescue ActiveRecord::RecordInvalid => error
    puts error
    render json: { errores: error.record.errors.full_messages }, status: :unprocessable_entity
  end

end