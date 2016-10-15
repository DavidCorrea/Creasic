function Respuesta(comentario) {
    this.contenido = "";
    this.comentario_id = comentario.id;
}

/* Constructor */
Respuesta.llenarDesde = function(datosDeRespuesta, comentario) {
    var comentarioAnidado = new Respuesta(comentario);

    comentarioAnidado.id = datosDeRespuesta.id;
    comentarioAnidado.contenido = datosDeRespuesta.contenido;

    return comentarioAnidado;
};

/* Métodos de Instancia. */
Comentario.prototype = {

};