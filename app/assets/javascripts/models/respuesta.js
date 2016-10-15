function Respuesta(comentario, idUsuario) {
    this.contenido = "";
    this.comentario_id = comentario.id;
    this.usuario_id = idUsuario;
}

/* Constructor */
Respuesta.llenarDesde = function(datosDeRespuesta, comentario) {
    var comentarioAnidado = new Respuesta(comentario, datosDeRespuesta.usuario_id);

    comentarioAnidado.id = datosDeRespuesta.id;
    comentarioAnidado.contenido = datosDeRespuesta.contenido;
    comentarioAnidado.emailUsuario = datosDeRespuesta.email_usuario;

    return comentarioAnidado;
};

/* Métodos de Instancia. */
Comentario.prototype = {

};