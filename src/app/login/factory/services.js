angular.module('app.login.services', [])
    .factory('services', function ($http, APP_CONFIG) {

        var urlSignUp = '/auth/register';
        var urlForget = '/auth/forget';
        var urlConfirm = '/auth/forget/confirm?resetKey=';
        var urlSocial = '/auth/socialLoginOrRegister';

        return {
            //Server Sign Up
            signUp: function (params) {
                return $http.post(APP_CONFIG.BASE_URL + urlSignUp, params);
            },
            //Server forget password
            forgot: function (param) {
                return $http.post(APP_CONFIG.BASE_URL + urlForget, param);
            },
            //Server reset password
            resetPassword: function (key, password) {
                return $http.post(APP_CONFIG.BASE_URL + urlConfirm + key, password);
            },
            //Server login via face
            loginSocial: function(params){
                return $http.post(APP_CONFIG.BASE_URL + urlSocial, params);
            }
        };
    });