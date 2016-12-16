function Cancion(idUsuario) {
    this.titulo = "";
    this.contenido = "";
    this.comentarios = [];
    this.usuario_id = idUsuario;
    this.votos = [];
    this.audios = [];
}

/* Constructor */
Cancion.llenarDesde = function(datosDeCancion) {
    var cancion = new Cancion(datosDeCancion.usuario_id);

    cancion.id = datosDeCancion.id;
    cancion.titulo = datosDeCancion.titulo;
    cancion.contenido = datosDeCancion.contenido;
    cancion.nombreUsuario = datosDeCancion.nombre_usuario;

    datosDeCancion.comentarios.forEach(function(comentario) {
        var comentarioAAgregar = Comentario.llenarDesde(comentario, cancion);
        cancion.agregarComentario(comentarioAAgregar);
    });

    angular.forEach(datosDeCancion.votos, function(voto){
        var votoAAgregar = Voto.llenarDesde(voto, cancion);
        cancion.agregarVoto(votoAAgregar);
    });

    angular.forEach(datosDeCancion.audios, function(audio){
        var audioAAgregar = Audio.llenarDesde(audio, cancion);
        cancion.agregarAudio(audioAAgregar);
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
    },

    agregarAudio: function(audio){
        this.audios.push(audio);
    }
};