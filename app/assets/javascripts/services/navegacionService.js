creasic.service('navegacionService', ['$state', function($state) {

    this.llevarAAcordes = function() {
        $state.transitionTo('acordes');
    };

    this.llevarACanciones = function() {
        $state.transitionTo('canciones');
    };

    this.llevarAHome = function() {
        $state.transitionTo('home');
    };

    this.llevarALetras = function() {
        $state.transitionTo('letras.todas');
    };


}]);