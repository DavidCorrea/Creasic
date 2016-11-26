class AudiosController < ApiController

  before_action :crear_service

  def agregar_audio
    @post = @service.agregar_audio
    render json: @post, status: :created
  end

  private

  def crear_service
    @service = AudiosService.new(params)
  end

end