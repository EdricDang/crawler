angular.module("app.login", [
    'app.login.register',
    'app.login.forget-password',
    'app.login.social',
    'app.login.services'
]).
    config(function config($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            views: {
                "root": {
                    controller: 'LoginControllerCtrl',
                    templateUrl: 'login/login.tpl.html'
                }
            },
            data: {pageTitle: 'Login'}
        });
    }).
    controller('LoginControllerCtrl', ['$log', '$scope', '$state', 'toastr', 'security',
        function LoginControllerCtrl ($log, $scope, $state, toastr, security) {
            $log.info('LoginControllerCtrl');
            // init first run
            $scope.init = function() {
                // init default user info
                $scope.user = {
                    userName: "",
                    password: "",
                    is_remember: false
                };
            };
            $scope.init();
            // init scope
            $scope.login = function() {
                security.login($scope.user).then(function(success) {
                    $scope.userData = success.data.user;
                    security.setUserLogined($scope.userData);
                    security.storeToken(success.data.token);
                }, function(err) {
                    toastr.error(err.data.errorMessage);
                });
            };
        }
    ]);
