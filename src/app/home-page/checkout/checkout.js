/**
 * Created by Dat Dang on 22/02/2017.
 */
angular.module("app.home-page.checkout", []).config(function config($stateProvider) {
        $stateProvider.state('home-page.checkout', {
            url: '/checkout',
            views: {
                "home": {
                    controller: 'checkoutCtrl',
                    templateUrl: 'home-page/checkout/checkout.tpl.html'
                }
            },
            data: {pageTitle: 'checkout'}
        });
    })
    .controller('checkoutCtrl', ['$log', '$scope', '$stateParams', '$state', 'toastr', 'security',
        function checkoutCtrl($log, $scope, $stateParams, $state, toastr, security) {
            $log.info('checkoutCtrl');

        }
    ]);