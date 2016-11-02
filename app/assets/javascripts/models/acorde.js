function Acorde(posicion) {
    this.notas = [];
    this.posicion = posicion;
}

/* Constructor */
Acorde.llenarDesde = function(datosDeAcorde) {
    var acorde = new Acorde(datosDeAcorde.posicion);

    acorde.id = datosDeAcorde.id;
    acorde.secuenciaDeAcordesId = datosDeAcorde.secuencia_de_acordes_id;
    acorde.notas = datosDeAcorde.notas;

    return acorde;
};

/* Métodos de Instancia. */
Acorde.prototype = {
    notasComoCifrado: function() {
        return this.notas.map(function(nota) {
            return nota.cifrado;
        });
    },
    agregarNota: function(notaAAgregar) {
        var noFueAgregada = true;

        this.notas.forEach(function(nota) {
           if(nota.id === notaAAgregar.id) {
               noFueAgregada = false;
           }
        });

        if(noFueAgregada) {
            this.notas.push(notaAAgregar);
        }
    },
    eliminarNota: function(notaAEliminiar) {
        this.notas = this.notas.filter(function(nota) {
            return notaAEliminiar.id !== nota.id;
        });
    },
    decrementarPosicion: function() {
        this.posicion -= 1;
    }
};