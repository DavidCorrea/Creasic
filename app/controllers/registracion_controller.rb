class RegistracionController < Devise::RegistrationsController
  skip_before_filter :verify_authenticity_token, :only => :create

  private

  def sign_up_params
    params.require(:usuario).permit(:nombre_de_usuario, :email, :password)
  end
end