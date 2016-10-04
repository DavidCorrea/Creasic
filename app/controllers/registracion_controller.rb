class RegistracionController < ApplicationController

  def crear
    unless Usuario.exists?(params[:global_id])
      Usuario.create!(global_id: params[:global_id])
    end
  end

end