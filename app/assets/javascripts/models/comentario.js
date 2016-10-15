function Comentario(post) {
    this.contenido = "";
    this.letra_id = post.id;
    this.respuestas = [];
}

/* Constructor */
Comentario.llenarDesde = function(datosDeComentario, post) {
    var comentario = new Comentario(post);

    comentario.id = datosDeComentario.id;
    comentario.contenido = datosDeComentario.contenido;

    angular.forEach(datosDeComentario.respuestas, function(respuesta) {
        var respuestaAAgregar = Respuesta.llenarDesde(respuesta, comentario);
        comentario.respuestas.push(respuestaAAgregar);
    });

    return comentario;
};

/* Métodos de Instancia. */
Comentario.prototype = {

};