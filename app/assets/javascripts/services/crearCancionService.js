creasic.service('crearCancionService', ['$http', function($http) {

    this.crearCancion = function(cancion) {
        var url = "cancion/crear_cancion"
        $http({
            url: url,
            method: 'POST',
            data: cancion,
            headers: config
        }).
        success(function(data, status, headers, config) {
            debugger;
            console.log(data);
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };

    var config = {
        headers: {
            'X-HTTP-Method-Override': 'POST'
        }
    };

}]);