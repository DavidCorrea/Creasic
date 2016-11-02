creasic.factory('erroresInterceptor', function($q, $rootScope) {
    return {
        'responseError': function(rejection) {
            var errores = rejection.data.errores;

            // Para evitar problemas de dependencia circular del Toast, lanzamos un evento.
            $rootScope.$broadcast('httpError', errores);

            return $q.reject(rejection);
        }
    };
});

creasic.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('erroresInterceptor');
}]);