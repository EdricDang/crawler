angular.module('app.login.forget-password.reset-password', [])
    .config(function config($stateProvider) {
        $stateProvider.state('login.forget-password.reset-password', {
            url: '/reset-password',
            views: {
                "resetPassword": {
                    controller: 'ResetPasswordController',
                    templateUrl: 'login/forget-password/reset-password/resetPassword.tpl.html'
                }
            },
            data: {pageTitle: 'Reset Password'}
        });
    })
    .controller('ResetPasswordController', function ($log, $scope, $location, services, toastr) {
        $log.info('ResetPasswordController');
        var resetKey = $location.search().resetKey;
        $scope.init = function(){
            $scope.pass = {
                password: ''
            };
        };
        $scope.init();

        $scope.resetPass = function () {
            services.resetPassword(resetKey, $scope.pass).then(function(success){
                toastr.success('Your password had been reset');
                $location.path('/login/forget-password/complete');
            }, function(errors){
                toastr.error(errors.data.errorMessage);
            });
        };
    })
    .directive('equals', function () {
        return{
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elem, attrs, ngModel){
                if(!ngModel){
                    return;
                }
                scope.$watch(attrs.ngModel, function(){
                    validate();
                });
                attrs.$observe('equals', function(){
                    validate();
                });
                var validate = function(){
                    var val1 = ngModel.$viewValue;
                    var val2 = attrs.equals;
                    ngModel.$setValidity('euqals', !val1 || !val2 || val1===val2);
                };
            }
        };
    });