/**
 * Created by Dat Dang on 22/02/2017.
 */
angular.module("app.home-page.store", []).config(function config($stateProvider) {
        $stateProvider.state('home-page.store', {
            url: '/store',
            views: {
                "home": {
                    controller: 'storeCtrl',
                    templateUrl: 'home-page/store/store.tpl.html'
                }
            },
            data: {pageTitle: 'store'}
        });
    })
    .controller('storeCtrl', ['$log', '$scope', '$stateParams', '$state', 'toastr', 'security', 'homeServices',
        function storeCtrl($log, $scope, $stateParams, $state, toastr, security, homeServices) {
            $log.info('storeCtrl');
            $scope.store = [];

            homeServices.getStore().success(function (data) {
                $scope.store = data.data;
            }).error(function (err) {
            });

        }
    ]);