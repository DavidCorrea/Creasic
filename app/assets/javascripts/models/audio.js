function Audio(media_id) {
    this.media_id = media_id;
    this.votos = [];
}

/* Constructor */
Audio.llenarDesde = function(datosDeAudio) {
    var audio = new Audio(datosDeAudio.media_id);

    audio.id = datosDeAudio.id;

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