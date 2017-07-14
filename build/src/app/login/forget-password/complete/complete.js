angular.module('app.login.forget-password.complete', [])
    .config(function config($stateProvider) {
        $stateProvider.state('login.forget-password.complete', {
            url: '/complete',
            views:{
                'resetPassword':{
                    templateUrl: 'login/forget-password/complete/complete.tpl.html',
                    controller: 'CompleteController'
                }
            },
            date: {pageTitle: 'Complete'}
        });
    })
.controller('CompleteController', function($log){
        $log.info('CompleteCOntroller');
    });