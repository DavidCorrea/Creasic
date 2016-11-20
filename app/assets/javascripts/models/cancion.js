function Cancion(idUsuario) {
    this.titulo = "";
    this.contenido = "";
    this.comentarios = [];
    this.usuario_id = idUsuario;
    this.votos = [];
}

/* Constructor */
Cancion.llenarDesde = function(datosDeCancion) {
    debugger;
    var cancion = new Cancion(datosDeCancion.usuario_id);
    cancion.id = datosDeCancion.id;
    cancion.titulo = datosDeCancion.titulo;
    cancion.contenido = datosDeCancion.contenido;
    cancion.emailUsuario = datosDeCancion.email_usuario;

    datosDeCancion.comentarios.forEach(function(comentario) {
        var comentarioAAgregar = Comentario.llenarDesde(comentario, cancion);
        cancion.agregarComentario(comentarioAAgregar);
    });
    angular.forEach(datosDeCancion.votos, function(voto){
        var votoAAgregar = Voto.llenarDesde(voto, cancion);
        cancion.agregarVoto(votoAAgregar);
    });
    return cancion;
};

/* Métodos de Instancia. */
Cancion.prototype = {
    agregarComentario: function(comentario){
        this.comentarios.push(comentario);
    },
    agregarVoto: function(voto){
        this.votos.push(voto);
    }
};