function Letra() {
    this.titulo = "";
    this.contenido = "";
    this.comentarios = [];
}

/* Constructor */
Letra.llenarDesde = function(datosDeLetra) {
    var letra = new Letra();

    letra.id = datosDeLetra.id;
    letra.titulo = datosDeLetra.titulo;
    letra.contenido = datosDeLetra.contenido;

    angular.forEach(datosDeLetra.comentarios, function(comentario) {
        var comentarioAAgregar = Comentario.llenarDesde(comentario, letra);
        letra.comentarios.push(comentarioAAgregar);
    });

    return letra;
};

/* Métodos de Instancia. */
Letra.prototype = {

};