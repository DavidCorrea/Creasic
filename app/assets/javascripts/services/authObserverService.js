creasic.service('authObserverService', [function() {

    var observerCallbacks = [];

    this.registerObserverCallback = function(callback) {
        observerCallbacks.push(callback);
    };

    this.notifyObservers = function(usuario) {
        angular.forEach(observerCallbacks, function(callback) {
            callback(usuario);
        })
    };
}]);