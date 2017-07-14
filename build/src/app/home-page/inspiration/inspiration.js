/**
 * Created by Dat Dang on 22/02/2017.
 */
angular.module("app.home-page.inspiration", []).config(function config($stateProvider) {
        $stateProvider.state('home-page.inspiration', {
            url: '/inspiration',
            views: {
                "home": {
                    controller: 'InspirationCtrl',
                    templateUrl: 'home-page/inspiration/inspiration.tpl.html'
                }
            },
            data: {pageTitle: 'inspiration'}
        });
    })
    .controller('InspirationCtrl', ['$log', '$scope', '$stateParams', '$state', 'toastr', 'security', 'homeServices',
        function InspirationCtrl($log, $scope, $stateParams, $state, toastr, security, homeServices) {
            $log.info('InspirationCtrl');

            $scope.list_inspirent = [];
            //get five product of favorite
            homeServices.getInspirent().success(function (data) {
                $scope.list_inspirent = data.data;
                if ($scope.list_inspirent.length > 0) {
                    for (var i = 0; i < $scope.list_inspirent.length; i++) {
                        $scope.list_inspirent[i]['img_first']=[];
                        $scope.list_inspirent[i]['product_first']=[];
                        $scope.list_inspirent[i].img_first.push($scope.list_inspirent[i].images[0]);
                        $scope.list_inspirent[i].product_first.push($scope.list_inspirent[i].products[0]);
                        if($scope.list_inspirent[i].products[1]){
                            $scope.list_inspirent[i].product_first.push($scope.list_inspirent[i].products[1]);
                        }
                        if($scope.list_inspirent[i].products[2]){
                            $scope.list_inspirent[i].product_first.push($scope.list_inspirent[i].products[2]);
                        }
                        if($scope.list_inspirent[i].products[3]){
                            $scope.list_inspirent[i].product_first.push($scope.list_inspirent[i].products[3]);
                        }

                        $scope.list_inspirent[i].products.splice(0,4 );
                        $scope.list_inspirent[i].images.splice(0, 1);
                    }
                }
                //get storing

            }).error(function (err) {
            });
        }
    ]);