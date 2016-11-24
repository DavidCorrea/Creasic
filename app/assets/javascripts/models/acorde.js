function Acorde(cifrado, posicion) {
    this.cifrado = cifrado;
    this.notas = [];
    this.posicion = posicion;
}

/* Constructor */
Acorde.llenarDesde = function(datosDeAcorde) {
    var acorde = new Acorde(datosDeAcorde.posicion);

    acorde.id = datosDeAcorde.id;
    acorde.secuenciaDeAcordesId = datosDeAcorde.secuencia_de_acordes_id;
    acorde.notas = JSON.parse(datosDeAcorde.notas);
    acorde.cifrado = datosDeAcorde.cifrado;

    return acorde;
};

/* Métodos de Instancia. */
Acorde.prototype = {
    cambiarPosicion: function(nuevaPosicion) {
        this.posicion = nuevaPosicion;
    },

    notasComoCifrado: function() {
        return this.notas.map(function(nota) {
            return nota.cifrado;
        });
    },

    tieneNota: function(notaAVerificar) {
        var tiene = false;

        this.notas.forEach(function(nota) {
            if(notaAVerificar.cifrado === nota.cifrado) {
                tiene = true;
            }
        });

        return tiene;
    },

    agregarNota: function(notaAAgregar) {
        if(!this.tieneNota(notaAAgregar)) {
            this.notas.push(notaAAgregar);
        }
    },

    eliminarNota: function(notaAEliminar) {
        this.notas = this.notas.filter(function(nota) {
            return notaAEliminar.cifrado !== nota.cifrado;
        });
    },

    decrementarPosicion: function() {
        this.posicion -= 1;
    }
};

Acorde.C = function() {
    var acorde = new Acorde('C', 0);
    acorde.notas = [Nota.c4, Nota.e4, Nota.g4];
    return acorde;
};

Acorde.D = function() {
    var acorde = new Acorde('D', 0);
    acorde.notas = [Nota.d4, Nota.f4Sharp, Nota.a4];
    return acorde;
};

Acorde.E = function() {
    var acorde = new Acorde('E', 0);
    acorde.notas = [Nota.e4, Nota.g4Sharp, Nota.b4];
    return acorde;
};

Acorde.F = function() {
    var acorde = new Acorde('F', 0);
    acorde.notas = [Nota.f4, Nota.a4, Nota.c5];
    return acorde;
};

Acorde.G = function() {
    var acorde = new Acorde('G', 0);
    acorde.notas = [Nota.g4, Nota.b4, Nota.d5];
    return acorde;
};

Acorde.A = function() {
    var acorde = new Acorde('A', 0);
    acorde.notas = [Nota.a4, Nota.c5Sharp, Nota.e5];
    return acorde;
};

Acorde.B = function() {
    var acorde = new Acorde('B', 0);
    acorde.notas = [Nota.b4, Nota.d5Sharp, Nota.f5Sharp];
    return acorde;
};