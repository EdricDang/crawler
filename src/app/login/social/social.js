angular.module('app.login.social', [])
    .controller('socialLogInController', ['$log', '$scope', 'security', 'services', 'toastr', '$state',
        function socialLogInController ($log, $scope, security, services, toastr, $state) {
            $scope.init = function () {
                $scope.facebook = {
                    token: '',
                    loginType: 'facebook'
                };
                $scope.google = {
                    token: '',
                    loginType: 'google'
                };
            };
            $scope.init();

            $scope.FBLogIn = function () {
                FB.login(function (response) {
                    if (response.authResponse) {
                        $scope.facebook.token = response.authResponse.accessToken;
                        if($scope.facebook.token.length){
                            services.loginSocial($scope.facebook).then(function(success){
                                $scope.userData = success.data.data.user;
                                security.setUserLogined($scope.userData);
                                security.storeToken(success.data.data.access_token);
                                security.setUserIsStudent();
                                $state.go("home.home-case.my-case", {}, {reload: true});
                            }, function(errors){
                                toastr.error(errors.data.errorMessage);
                            });
                        }
                    } else {
                    }
                }, {
                    scope: 'publish_actions,email,user_birthday',
                    return_scopes: true
                });
            };

            $scope.GGLogIn = function () {
                $scope.signedIn = false;
                $scope.processAuth = function (authResult) {
                    // Do a check if authentication has been successful.
                    if (authResult['access_token']) {
                        // Successful sign in.
                        $scope.signedIn = true;
                        $scope.google.token = authResult['access_token'];
                        services.loginSocial($scope.google).then(function(success){
                            $scope.userData = success.data.data.user;
                            security.setUserLogined($scope.userData);
                            security.storeToken(success.data.data.access_token);
                            security.setUserIsStudent();
                            $state.go("home.home-case.my-case", {}, {reload: true});
                        }, function(errors){
                            toastr.error(errors.data.errorMessage);
                        });
                    } else if (authResult['error']) {
                        // Error while signing in.
                        $scope.signedIn = false;
                        // Report error.
                    }
                };
                $scope.signInCallback = function (authResult) {
                    $scope.$apply(function () {
                        $scope.processAuth(authResult);
                    });
                };
                $scope.renderSignInButton = function () {
                    gapi.auth.signIn({
                        'callback': $scope.signInCallback, // Function handling the callback.
                        'clientid': '537997792644-fmtpunvag3gp7t16nejg4jotul52h8ff.apps.googleusercontent.com',
                        'requestvisibleactions': 'http://schemas.google.com/AddActivity',
                        'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email',
                        'cookiepolicy': 'single_host_origin'
                    });
                };
                // Start function in this example only renders the sign in button.
                $scope.start = function () {
                    $scope.renderSignInButton();
                };
                // Call start function on load.
                $scope.start();
            };
        }]);