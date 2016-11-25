function Respuesta(comentario, idUsuario) {
    this.contenido = "";
    this.comentario_id = comentario.id;
    this.usuario_id = idUsuario;
    this.votos = [];
}

/* Constructor */
Respuesta.llenarDesde = function(datosDeRespuesta, comentario) {
    var comentarioAnidado = new Respuesta(comentario, datosDeRespuesta.usuario_id);

    comentarioAnidado.id = datosDeRespuesta.id;
    comentarioAnidado.contenido = datosDeRespuesta.contenido;
    comentarioAnidado.nombreUsuario = datosDeRespuesta.nombre_usuario;

    angular.forEach(datosDeRespuesta.votos, function(voto){
        var votoAAgregar = Voto.llenarDesde(voto, comentarioAnidado);
        comentarioAnidado.votos.push(votoAAgregar)
    });

    return comentarioAnidado;
};

/* Métodos de Instancia. */
Comentario.prototype = {
    perteneceA: function(usuario_id) {
        return this.usuario_id === usuario_id;
    }
};