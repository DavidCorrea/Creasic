function SecuenciaDeAcordes(idUsuario) {
    this.titulo = "";
    this.acordes = [];
    this.bpm = 80;
    this.usuario_id = idUsuario;
}

/* Constructor */
SecuenciaDeAcordes.llenarDesde = function(datosDeSecuencia) {
    var secuenciaDeAcordes = new SecuenciaDeAcordes(datosDeSecuencia.usuario_id);

    secuenciaDeAcordes.id = datosDeSecuencia.id;
    secuenciaDeAcordes.titulo = datosDeSecuencia.titulo;
    secuenciaDeAcordes.emailUsuario = datosDeSecuencia.email_usuario;

    angular.forEach(datosDeSecuencia.acordes, function(acorde) {
        var acordeAAgregar = Acorde.llenarDesde(acorde, secuenciaDeAcordes);
        secuenciaDeAcordes.acordes.push(acordeAAgregar);
    });

    return secuenciaDeAcordes;
};

/* Métodos de Instancia. */
SecuenciaDeAcordes.prototype = {

};