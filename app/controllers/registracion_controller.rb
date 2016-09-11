class RegistracionController < Devise::RegistrationsController

  private

  def sign_up_params
    params.require(:usuario).permit(:nombre_de_usuario, :email, :password)
  end
end