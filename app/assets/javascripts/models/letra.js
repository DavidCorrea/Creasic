function Letra() {
    this.id = 0;
    this.titulo = "";
    this.contenido = "";
}

/* Constructor */
Letra.llenarDesde = function(datosDePropuesta) {
    var letra = new Letra();
    letra.id = datosDePropuesta.id;
    letra.titulo = datosDePropuesta.titulo;
    letra.contenido = datosDePropuesta.contenido;
    return letra;
};

/* Métodos de Instancia. */
Letra.prototype = {

};