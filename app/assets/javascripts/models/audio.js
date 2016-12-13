function Audio(post, idUsuario) {
    this.usuario_id = idUsuario;
    this.votos = [];
    this.cancion_id = post.id;
}

/* Constructor */
Audio.llenarDesde = function(datosDeAudio, post) {
    var audio = new Audio(post, datosDeAudio.usuario_id);
    audio.id = datosDeAudio.id;
    audio.media_id = datosDeAudio.media_id;

    angular.forEach(datosDeAudio.votos, function(voto){
        var votoAAgregar = Voto.llenarDesde(voto, audio);
        audio.agregarVoto(votoAAgregar);
    });
    return audio;
};

/* Métodos de Instancia. */
Audio.prototype = {

    agregarVoto: function(voto){
        this.votos.push(voto);
    }
};