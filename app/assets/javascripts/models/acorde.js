function Acorde() {
    this.notas = [];
}

/* Constructor */
Acorde.llenarDesde = function(datosDeAcorde) {
    var acorde = new Acorde();

    acorde.id = datosDeAcorde.id;
    acorde.secuenciaDeAcordesId = datosDeAcorde.secuencia_de_acordes_id;
    acorde.posicion = datosDeAcorde.posicion;
    acorde.notas = datosDeAcorde.notas;

    return acorde;
};

/* Métodos de Instancia. */
Acorde.prototype = {

};