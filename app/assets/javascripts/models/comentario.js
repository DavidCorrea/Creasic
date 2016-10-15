function Comentario(post, idUsuario) {
    this.contenido = "";
    this.respuestas = [];
    this.letra_id = post.id;
    this.usuario_id = idUsuario;
}

/* Constructor */
Comentario.llenarDesde = function(datosDeComentario, post) {
    var comentario = new Comentario(post, datosDeComentario.usuario_id);

    comentario.id = datosDeComentario.id;
    comentario.contenido = datosDeComentario.contenido;
    comentario.emailUsuario = datosDeComentario.email_usuario;

    angular.forEach(datosDeComentario.respuestas, function(respuesta) {
        var respuestaAAgregar = Respuesta.llenarDesde(respuesta, comentario);
        comentario.respuestas.push(respuestaAAgregar);
    });

    return comentario;
};

/* Métodos de Instancia. */
Comentario.prototype = {

};