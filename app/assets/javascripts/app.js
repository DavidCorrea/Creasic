var creasic = angular.module('creasic', ['ngMaterial', 'Devise', 'ui.router'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default').accentPalette('orange').dark();
    });
