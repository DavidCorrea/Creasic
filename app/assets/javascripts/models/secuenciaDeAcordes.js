function SecuenciaDeAcordes(idUsuario) {
    this.titulo = "";
    this.acordes = [];
    this.bpm = 80;
    this.usuario_id = idUsuario;
    this.posicionParaProximoAcorde = 0;
    this.comentarios = [];
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

    angular.forEach(datosDeSecuencia.comentarios, function(comentario) {
        var comentarioAAgregar = Comentario.llenarDesde(comentario, secuenciaDeAcordes);
        secuenciaDeAcordes.comentarios.push(comentarioAAgregar);
    });

    return secuenciaDeAcordes;
};

/* Métodos de Instancia. */
SecuenciaDeAcordes.prototype = {
    agregarAcorde: function() {
        this.acordes.push(new Acorde(this.posicionParaProximoAcorde));
        this.posicionParaProximoAcorde += 1;
    },
    eliminarAcorde: function(acordeAEliminar) {
        this.acordes = this.acordes.filter(function(acorde) {
            return acordeAEliminar.posicion !== acorde.posicion;
        });

        var acordesACorrer = this.acordes.filter(function(acorde) {
            return acorde.posicion > acordeAEliminar.posicion;
        });

        acordesACorrer.forEach(function(acorde) {
           acorde.decrementarPosicion();
        });
    }
};