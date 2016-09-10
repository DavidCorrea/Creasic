var creasic = angular.module('creasic', ['ngMaterial', 'Devise'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default').accentPalette('orange').dark();
    });
