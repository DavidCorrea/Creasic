function Comentario(comentable, idUsuario) {
    this.contenido = "";
    this.comentarios = [];
    this.comentable_id = comentable.id;
    this.usuario_id = idUsuario;
    this.votos = [];
    this.media_id = "";
}

/* Constructor */
Comentario.llenarDesde = function(datosDeComentario, comentable) {
    var comentario = new Comentario(comentable, datosDeComentario.usuario_id);
    comentario.id = datosDeComentario.id;
    comentario.contenido = datosDeComentario.contenido;
    comentario.nombreUsuario = datosDeComentario.nombre_usuario;
    comentario.media_id = datosDeComentario.media_id;

    datosDeComentario.comentarios.forEach(function(subcomentario) {
        var subcomentarioAAgregar = Comentario.llenarDesde(subcomentario, comentario);
        comentario.comentarios.push(subcomentarioAAgregar);
    });

    angular.forEach(datosDeComentario.votos, function(voto){
        var votoAAgregar = Voto.llenarDesde(voto, comentario);
        comentario.votos.push(votoAAgregar)
    });

    return comentario;
};

/* Métodos de Instancia. */
Comentario.prototype = {
    perteneceA: function(usuario_id) {
        return this.usuario_id === usuario_id;
    }
};