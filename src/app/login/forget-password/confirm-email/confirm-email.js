angular.module('app.login.forget-password.confirm-email', [])
    .config(function config($stateProvider) {
        $stateProvider.state('login.forget-password.confirm-email', {
            url: '/confirm-email',
            views: {
                "resetPassword": {
                    controller: 'ConfirmEmailController',
                    templateUrl: 'login/forget-password/confirm-email/confirmEmail.tpl.html'
                }
            },
            data: {pageTitle: 'Confirm Email'}
        });
    })
    .controller('ConfirmEmailController', function ($log, $scope, services, toastr) {
        $log.info('ConfirmEmailController');
        $scope.init = function(){
            $scope.forgot = {
                'email' : ''
            };
        };
        $scope.init();
        $scope.confirmEmail = function(){
            services.forgot($scope.forgot).then(function(success){
               toastr.success('Successfully! Reset password email has been sent.');
            }, function(error){
                toastr.error('No user matched.');
            });
        };
    });