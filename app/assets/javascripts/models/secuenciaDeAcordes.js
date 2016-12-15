function SecuenciaDeAcordes(idUsuario) {
    this.titulo = "";
    this.acordes = [];
    this.bpm = 80;
    this.usuario_id = idUsuario;
    this.posicionParaProximoAcorde = 1;
    this.comentarios = [];
}

/* Constructor */
SecuenciaDeAcordes.llenarDesde = function(datosDeSecuencia) {
    var secuenciaDeAcordes = new SecuenciaDeAcordes(datosDeSecuencia.usuario_id);

    secuenciaDeAcordes.id = datosDeSecuencia.id;
    secuenciaDeAcordes.titulo = datosDeSecuencia.titulo;
    secuenciaDeAcordes.nombreUsuario = datosDeSecuencia.nombre_usuario;
    secuenciaDeAcordes.bpm = datosDeSecuencia.bpm;

    datosDeSecuencia.acordes.forEach(function(acorde) {
        var acordeAAgregar = Acorde.llenarDesde(acorde, secuenciaDeAcordes);
        secuenciaDeAcordes.agregarAcordeGuardado(acordeAAgregar);
    });

    datosDeSecuencia.comentarios.forEach(function(comentario) {
        var comentarioAAgregar = Comentario.llenarDesde(comentario, secuenciaDeAcordes);
        secuenciaDeAcordes.agregarComentario(comentarioAAgregar);
    });

    return secuenciaDeAcordes;
};

/* Métodos de Instancia. */
SecuenciaDeAcordes.prototype = {
    agregarComentario: function(comentario){
        this.comentarios.push(comentario);
    },

    agregarAcorde: function() {
        this.acordes.push(new Acorde('_', this.posicionParaProximoAcorde));
        this.posicionParaProximoAcorde += 1;
    },

    agregarAcordePrearmado: function(acorde) {
        acorde.cambiarPosicion(this.posicionParaProximoAcorde);
        this.acordes.push(acorde);
        this.posicionParaProximoAcorde += 1;
    },

    agregarAcordeGuardado: function(acorde) {
        this.acordes.push(acorde);
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

        this.posicionParaProximoAcorde = this.acordes.length + 1;
    },

    perteneceA: function(usuario_id) {
        return this.usuario_id === usuario_id;
    }
};