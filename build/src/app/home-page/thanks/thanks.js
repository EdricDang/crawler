angular.module("app.home-page.thanks", []).config(function config($stateProvider) {
    $stateProvider.state('home-page.thanks', {
        url: '/thanks',
        views: {
            "home": {
                controller: 'thanksCtrl',
                templateUrl: 'home-page/thanks/thanks.tpl.html'
            }
        },
        data: {pageTitle: 'thanks'}
    });
}).controller('thanksCtrl', ['$log', '$scope', '$state', 'toastr', 'security', 'homeServices',
    function thanksCtrl($log, $scope, $state, toastr, security, homeServices) {
        $log.info('thanksCtrl');
    }
]);
