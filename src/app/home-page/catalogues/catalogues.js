/**
 * Created by Dat Dang on 22/02/2017.
 */
angular.module("app.home-page.catalogues", []).config(function config($stateProvider) {
        $stateProvider.state('home-page.catalogues', {
            url: '/catalogues',
            views: {
                "home": {
                    controller: 'CataloguesCtrl',
                    templateUrl: 'home-page/catalogues/catalogues.tpl.html'
                }
            },
            data: {pageTitle: 'catalogues'}
        });
    })
    .controller('CataloguesCtrl', ['$log', '$scope', '$stateParams', '$state', 'toastr', 'security', 'homeServices',
        function CataloguesCtrl($log, $scope, $stateParams, $state, toastr, security, homeServices) {
            $log.info('CataloguesCtrl');
            $scope.catalogues = {
                "name": "",
                "email": "",
                "phone": "",
                "location": ""
            };

            $scope.title = {
                "thanks": ""
            };
            $scope.send_now = function () {
                homeServices.senCatalogues($scope.catalogues).then(function (success) {
                    $scope.title.thanks = "Thank for send info";
                }, function (err) {
                    toastr.error(err.data.errorMessage);
                });
            };

            $scope.img_3d = "";
            $scope.threeD = [];

            $scope.cata = [];
            homeServices.getCataloguesProduct().then(function (data) {
                $scope.threeD = data.data.data[2];
                $scope.cata = data.data.data;
                $scope.img_3d = $scope.cata[1].images[0].src;
                $scope.cata.splice(2, 1);
            }, function (err) {
                toastr.error(err.data.errorMessage);
            });

            $scope.goLink = function(link){
                window.open(link);
            };
        }
    ]);