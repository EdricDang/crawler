angular.module("app.home-page.register", []).config(function config($stateProvider) {
    $stateProvider.state('home-page.register', {
        url: '/register',
        views: {
            "home": {
                controller: 'registerCtrl',
                templateUrl: 'home-page/register/register.tpl.html'
            }
        },
        data: {pageTitle: 'register'}
    });
}).controller('registerCtrl', ['$log', '$scope', '$state', 'toastr', 'security', 'homeServices',
    function registerCtrl($log, $scope, $state, toastr, security, homeServices) {
        $log.info('registerCtrl');
        $scope.user = {
            "name": "",
            "phone": "",
            "email": "",
            "address": "",
            "password": "",
            "confirm_password": ""
        };

        $scope.register = function () {
            homeServices.signUp($scope.user).success(function (data) {
                toastr.success("Create Account Successfully!");
                $state.go('home-page.thanks');

            }).error(function (err) {
                $scope.mess = "Create Errors! " + err.errors[0].errorMessage;
                toastr.error($scope.mess);
            });
        };
    }
]);
