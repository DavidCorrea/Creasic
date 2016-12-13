class LetrasService < Service

  def initialize params
    @parametros = params
  end

  def crear_letra
    on_transaction do
      Letra.create! parametros_de_creacion
    end
  end

  def todas_las_letras
    Letra.all
  end

  def ver_letra
    on_transaction do
      Letra.find parametros_de_busqueda[:id]
    end
  end

  def editar
    on_transaction do
      letra_a_editar = ver_letra
      letra_a_editar.update! parametros_de_edicion
      letra_a_editar
    end
  end

  private

  def parametros_de_creacion
    @parametros.permit(:usuario_id, :titulo, :contenido)
  end

  def parametros_de_busqueda
    @parametros.permit(:id)
  end

  def parametros_de_edicion
    @parametros.permit(:letra_id, :titulo, :contenido)
  end

end