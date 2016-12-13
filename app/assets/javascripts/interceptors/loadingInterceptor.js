creasic.factory('loadingInterceptor', function($q, $rootScope) {
    var requests = 0;
    var resolutions = 0;

    function estaCargando() {
        return resolutions < requests;
    }

    function actualizarEstado() {
        $rootScope.estaCargando = estaCargando();
    }

    return {
        'request': function (config) {
            requests++;
            actualizarEstado();
            return config;
        },
        'requestError': function (rejection) {
            resolutions++;
            actualizarEstado();
            return $q.reject(rejection);
        },
        'response': function (response) {
            resolutions++;
            actualizarEstado();
            return response;
        },
        'responseError': function (rejection) {
            resolutions++;
            actualizarEstado();
            return $q.reject(rejection);
        }
    };
});

creasic.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('loadingInterceptor');
}]);