/**
 * Created by Dat Dang on 22/02/2017.
 */
angular.module("app.home-page.accessories", []).config(function config($stateProvider) {
        $stateProvider.state('home-page.accessories', {
            url: '/accessories',
            views: {
                "home": {
                    controller: 'AccessoriesCtrl',
                    templateUrl: 'home-page/accessories/accessories.tpl.html'
                }
            },
            data: {pageTitle: 'Accessories'}
        });
    })
    .controller('AccessoriesCtrl', ['$log', '$scope', '$stateParams', '$state', 'toastr', 'security','homeServices',
        function AccessoriesCtrl($log, $scope, $stateParams, $state, toastr, security,homeServices) {
            $log.info('AccessoriesCtrl');
            //get list product
            $scope.list_product = {};
            $scope.favorite_one_product = [];
            $scope.favorite_two_product = [];
            $scope.favorite_three_product = [];
            $scope.favorite_four_product = [];
            $scope.favorite_five_product = [];
            $scope.tmpUSer = {};
            $scope.list_categories = {};
            $scope.list_new = [];
            $scope.list_new_active = [];
            $scope.list_storing = [];
            $scope.list_storing_active = [];
            $scope.list_sleeping = [];
            $scope.list_sleeping_active = [];
            $scope.list_working = [];
            $scope.list_working_active = [];
            $scope.list_dinning = [];
            $scope.list_dinning_active = [];
            $scope.list_living = [];
            $scope.list_living_active = [];
            $scope.title = {
                "is_new": false,
                "storing": 'Storing',
                "storing_number": '0',
                "is_storing": false,
                "sleeping": 'Sleeping',
                "sleeping_number": '0',
                "is_sleeping": false,
                "dinning": 'Dinning',
                "dinning_number": '0',
                "is_dinning": false,
                "working": 'Working',
                "working_number": '0',
                "is_working": false,
                "living": 'Living',
                "living_number": '0',
                "is_living": false,
            };
            $scope.list_popular = [];
            $scope.listHompage = ['Storing & Working', 'Sleeping', 'Dining', 'Living'];


            //get five product of favorite
            homeServices.getProduct().success(function (data) {
                $scope.list_product = data.data;
                $scope.favorite_one_product.push($scope.list_product[0]);
                $scope.favorite_two_product.push($scope.list_product[1]);
                $scope.favorite_three_product.push($scope.list_product[2]);
                $scope.favorite_four_product.push($scope.list_product[3]);
                $scope.favorite_five_product.push($scope.list_product[4]);




                //get storing

            }).error(function (err) {
            });

            $scope.hgl = [];
            $scope.tmpHgl = [];
            $scope.list_one = [];
            $scope.list_two = [];
            $scope.list_three = [];
            homeServices.getIMGHightlight().success(function (data) {
                $scope.hgl = data.data;
                for (var h = 0; h < $scope.hgl.length; h++) {
                    if ($scope.hgl[h].key == 'accessories-page') {
                        $scope.tmpHgl.push($scope.hgl[h]);
                    }
                }
                $scope.list_new.push($scope.tmpHgl[0]);
                $scope.list_storing.push($scope.tmpHgl[1]);
                $scope.list_sleeping.push($scope.tmpHgl[2]);
                $scope.list_working.push($scope.tmpHgl[3]);
                $scope.list_living.push($scope.tmpHgl[4]);
                $scope.list_dinning.push($scope.tmpHgl[5]);
                $scope.list_one.push($scope.tmpHgl[6]);
                $scope.list_two.push($scope.tmpHgl[7]);
                $scope.list_three.push($scope.tmpHgl[8]);
            }).error(function (err) {
            });

            homeServices.getPopular().success(function (data) {
                $scope.list_popular = data.data.data;
                $scope.list_popular.splice(4);
            }).error(function (err) {
            });

            $scope.goHightlight = function (id) {
                $state.go('home-page.categories', {id: id});
            };
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
            //get slide
            $scope.slide = [];
            $scope.slide_first = [];

            homeServices.getSlide().success(function (data) {
                $scope.slide = data.data;
                $scope.slide_first.push($scope.slide[0]);
                $scope.slide.splice(0, 1);

            }).error(function (err) {
            });
        }
    ]);