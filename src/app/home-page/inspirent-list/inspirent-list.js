/**
 * Created by Dat Dang on 22/02/2017.
 */
angular.module("app.home-page.inspirent-list", []).config(function config($stateProvider) {
        $stateProvider.state('home-page.inspirent-list', {
            url: '/inspirent-list',
            views: {
                "home": {
                    controller: 'inspirentListCtrl',
                    templateUrl: 'home-page/inspirent-list/inspirent-list.tpl.html'
                }
            },
            data: {pageTitle: 'inspirent list'}
        });
    })
    .controller('inspirentListCtrl', ['$log', '$scope', '$stateParams', '$state', 'toastr', 'security','homeServices',
        function inspirentCtrl($log, $scope, $stateParams, $state, toastr, security,homeServices) {
            $log.info('inspirentCtrl');

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
            $scope.tmpListCart = [];
            $scope.addCart = function (item) {
                item['quantity'] = 1;
                item['color_id'] = item.colors[0].id;
                //get userLogin
                if (!security.getUserLogined()) {
                    $scope.tmpListCart.push(item);
                    $scope.tmpUSer['list_cart'] = $scope.tmpListCart;
                    $scope.tmpUSer['sum_cart'] = 1;
                    security.setUserLogined($scope.tmpUSer);
                } else {
                    $scope.tmpUSer = security.getUserLogined();
                    if (!$scope.tmpUSer.list_cart) {
                        $scope.tmpListCart.push(item);
                        $scope.tmpUSer['list_cart'] = $scope.tmpListCart;
                        $scope.tmpUSer['sum_cart'] = 1;
                        security.setUserLogined($scope.tmpUSer);
                    } else {
                        //check product exits in list cart (check by id and id color)
                        var is_exits = false;
                        var key_product = '';
                        for (var i = 0; i < $scope.tmpUSer.list_cart.length; i++) {
                            if (item.id == $scope.tmpUSer.list_cart[i].id && item.color_id == $scope.tmpUSer.list_cart[i].color_id) {
                                is_exits = true;
                                key_product = i;
                            }
                        }
                        if (is_exits) {
                            $scope.tmpUSer.list_cart[key_product].quantity = $scope.tmpUSer.list_cart[key_product].quantity + 1;
                        } else {
                            $scope.tmpUSer.list_cart.push(item);
                        }
                        $scope.tmpUSer['sum_cart'] = $scope.tmpUSer['sum_cart'] + 1;
                        security.setUserLogined($scope.tmpUSer);
                    }
                }

            };

            $scope.goCategoriesPage = function (id) {
                $state.go('home-page.sub-categories', {id: id});
            };

            $scope.goDetailsProduct = function (item) {
                $state.go('home-page.product-details', {id: item});
            };


        }
    ]);