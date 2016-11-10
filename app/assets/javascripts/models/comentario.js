function Comentario(post, idUsuario) {
    this.contenido = "";
    this.respuestas = [];
    this.comentable_id = post.id;
    this.usuario_id = idUsuario;
    this.votos = [];
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

    angular.forEach(datosDeComentario.votos, function(voto){
        var votoAAgregar = Voto.llenarDesde(voto, comentario);
        comentario.votos.push(votoAAgregar)
    });

    return comentario;
};

/* Métodos de Instancia. */
Comentario.prototype = {

};