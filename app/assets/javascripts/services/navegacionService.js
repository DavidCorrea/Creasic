creasic.service('navegacionService', ['$state', function($state) {

    this.llevarAIngresar = function() {
        $state.transitionTo('ingresar');
    };

    this.llevarAAcordes = function() {
        $state.transitionTo('acordes');
    };

    this.llevarACanciones = function() {
        $state.transitionTo('canciones');
    };

    this.llevarAHome = function() {
        $state.transitionTo('home');
    };

    this.llevarARegistrar = function() {
        $state.transitionTo('registrar');
    };

    this.llevarALetras = function() {
        $state.transitionTo('letras');
    };


}]);