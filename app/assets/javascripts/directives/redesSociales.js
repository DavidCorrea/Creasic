creasic.directive("redesSociales", function(Socialshare, $state) {
    return {
        type: 'E',
        templateUrl: 'views/directives/redes_sociales',
        scope: {
          post: '=?'
        },
        link: function(scope) {
            var url_actual = $state.href($state.current.name, $state.params, {absolute: true});
            var texto_post = 'Unite a Creasic!';

            scope.compartirEnFacebook = function() {
                Socialshare.share({
                    'provider': 'facebook',
                    'attrs': {
                        'socialshareUrl': url_actual
                    }
                })
            };

            scope.compartirEnTwitter = function() {
                Socialshare.share({
                    'provider': 'twitter',
                    'attrs': {
                        'socialshareUrl': url_actual
                    }
                })
            };

            scope.compartirEnGooglePlus = function() {
                Socialshare.share({
                    'provider': 'google',
                    'attrs': {
                        'socialshareUrl': url_actual
                    }
                })
            };

            scope.compartirEnTumblr = function() {
                Socialshare.share({
                    'provider': 'tumblr',
                    'attrs': {
                        'socialshareUrl': url_actual
                    }
                })
            };
        }
    };
});