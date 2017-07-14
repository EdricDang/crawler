angular.module('app.login.forget-password', [
    'app.login.forget-password.confirm-email',
    'app.login.forget-password.reset-password',
    'app.login.forget-password.complete'
])
    .config(function config($stateProvider) {
        $stateProvider.state('login.forget-password', {
            url: '/forget-password',
            views: {
                "login": {
                    controller: 'ForgetPasswordController',
                    templateUrl: 'login/forget-password/forgetPassword.tpl.html'
                }
            },
            data: {pageTitle: 'Forget Password'}
        });
    })
    .controller('ForgetPasswordController', function($scope, $log, $state, toastr, security){
        $log.info('ForgetPasswordController');
    });