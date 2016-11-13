function Voto(post, idUsuario) {
    this.valor = 0;
    this.votable_id = post.id;
    this.usuario_id = idUsuario;
}

/* Constructor */
Voto.llenarDesde = function(datosDeVoto, post) {
    var voto = new Voto(post, datosDeVoto.usuario_id);

    voto.id = datosDeVoto.id;
    voto.valor = datosDeVoto.valor;
    return voto;
};