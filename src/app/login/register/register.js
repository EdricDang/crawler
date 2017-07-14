angular.module('app.login.register', [])
    .config(function config($stateProvider) {
        $stateProvider.state('login.register', {
            url: '/register',
            views: {
                "login": {
                    controller: 'RegisterController',
                    templateUrl: 'login/register/register.tpl.html'
                }
            }
        });
    })
    .controller('RegisterController', ['$log', '$scope', '$state', 'toastr', 'services', '$filter',
        function RegisterController($log, $scope, $state, toastr, services, $filter) {
            $log.info('RegisterController');

            $scope.init = function () {
                $scope.register = {
                    email: "",
                    userName: "",
                    password: "",
                    firstName: "",
                    lastName: "",
                    birthday: "",
                    mobile: "",
                    gender: "",
                    role: "Admin"
                };
            };
            $scope.init();

            $scope.signup = function () {
                $scope.register.birthday = $filter('date')($scope.register.birthday, "yyyy-MM-ddTHH:mm:ss") + 'Z';
                services.signUp($scope.register).then(function (success) {
                    toastr.success('Created! Please check email');
                }, function (err) {
                    toastr.error(err.data.errorMessage);
                });
            };
        }])
    .directive('equals', function () {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function (scope, elem, attrs, ngModel) {
                if (!ngModel) {
                    return;
                }
                scope.$watch(attrs.ngModel, function () {
                    validate();
                });
                attrs.$observe('equals', function (val) {
                    validate();
                });
                var validate = function () {
                    var val1 = ngModel.$viewValue;
                    var val2 = attrs.equals;
                    ngModel.$setValidity('equals', !val1 || !val2 || val1 === val2);
                };
            }
        };
    })
    .directive('phone', function () {
        var phoneRegex = /^[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4,8}$/;
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attrs, ngModel) {
                if (!ngModel) {
                    return;
                }
                scope.$watch(attrs.ngModel, function () {
                    validate();
                });
                attrs.$observe('phone', function () {
                    validate();
                });
                var validate = function () {
                    var value = ngModel.$viewValue;
                    ngModel.$setValidity('phone', phoneRegex.test(value));
                };
            }
        };
    });