/**
 * Created by Dat Dang on 22/02/2017.
 */
angular.module("app.home-page.primary-page", []).config(function config($stateProvider) {
        $stateProvider.state('home-page.primary-page', {
            url: '/primary',
            views: {
                "home": {
                    controller: 'PrimaryPageCtrl',
                    templateUrl: 'home-page/primary-page/primary-page.tpl.html'
                }
            },
            data: {pageTitle: 'Home'}
        });
    })
    .filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) {return '';}

            max = parseInt(max, 10);
            if (!max) {return value;}
            if (value.length <= max) {return value;}

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace !== -1) {
                    //Also remove . and , so its gives a cleaner result.
                    if (value.charAt(lastspace-1) === '.' || value.charAt(lastspace-1) === ',') {
                        lastspace = lastspace - 1;
                    }
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    })
    .controller('PrimaryPageCtrl', ['$log', '$scope', '$stateParams', '$state', 'toastr', 'security', 'homeServices',
        function PrimaryPageCtrl($log, $scope, $stateParams, $state, toastr, security, homeServices) {
            $log.info('PrimaryPageCtrl');

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

            $scope.listHompage = ['Storing & Working', 'Sleeping', 'Dining', 'Living'];


            //get five product of favorite
            $scope.tmpHight = [];
            homeServices.getProduct().success(function (data) {
                $scope.list_product = data.data;
                for (var p = 0; p < $scope.list_product.length; p++) {
                    $scope.list_product[p]['select_color'] = [];
                    if ($scope.list_product[p].colors) {
                        $scope.list_product[p].select_color.push($scope.list_product[p].colors[0]);
                    }
                    if ($scope.list_product[p].highlight) {
                        $scope.tmpHight.push($scope.list_product[p]);
                    }
                }


                for (var i = 0; i < $scope.list_product.length; i++) {
                    if ($scope.list_product[i].new) {//get new
                        $scope.list_new.push($scope.list_product[i]);
                    }
                    //get storing
                    if ($scope.list_product[i].category.id == 27) {
                        $scope.list_storing.push($scope.list_product[i]);
                    }
                    //get sleeping
                    if ($scope.list_product[i].category.id == 30) {
                        $scope.list_sleeping.push($scope.list_product[i]);
                    }
                    //get working
                    if ($scope.list_product[i].category.id == 29) {
                        $scope.list_working.push($scope.list_product[i]);
                    }
                    //get dining
                    if ($scope.list_product[i].category.id == 24) {
                        $scope.list_dinning.push($scope.list_product[i]);
                    }
                    //get living
                    if ($scope.list_product[i].category.id == 20) {
                        $scope.list_living.push($scope.list_product[i]);
                    }
                }
                if ($scope.list_new.length > 0) {
                    $scope.list_new_active.push($scope.list_new[0]);
                    $scope.list_new.splice(0, 1);
                    $scope.title.is_new = true;
                }
                if ($scope.list_storing.length > 0) {
                    $scope.list_storing_active.push($scope.list_storing[0]);
                    $scope.list_storing.splice(0, 1);
                    $scope.title.is_storing = true;
                    $scope.title.storing_number = $scope.list_storing.length + 1;
                } else {

                }
                if ($scope.list_sleeping.length > 0) {
                    $scope.list_sleeping_active.push($scope.list_sleeping[0]);
                    $scope.list_sleeping.splice(0, 1);
                    $scope.title.is_sleeping = true;
                    $scope.title.sleeping_number = $scope.list_sleeping.length + 1;
                }
                if ($scope.list_working.length > 0) {
                    $scope.list_working_active.push($scope.list_working[0]);
                    $scope.list_working.splice(0, 1);
                    $scope.title.is_working = true;
                    $scope.title.working_number = $scope.list_working.length + 1;
                }
                if ($scope.list_dinning.length > 0) {
                    $scope.list_dinning_active.push($scope.list_dinning[0]);
                    $scope.list_dinning.splice(0, 1);
                    $scope.title.is_dinning = true;
                    $scope.title.dinning_number = $scope.list_dinning.length + 1;
                }
                if ($scope.list_living.length > 0) {
                    $scope.list_living_active.push($scope.list_living[0]);
                    $scope.list_living.splice(0, 1);
                    $scope.title.is_living = true;
                    $scope.title.living_number = $scope.list_living.length + 1;
                }

                //get storing

            }).error(function (err) {
            });

            $scope.tmpListCart = [];
            $scope.addCart = function (item) {
                item['quantity'] = 1;
                item['color_id'] = item.select_color[0].id;
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
            $scope.sum_slide = [];

            homeServices.getSlide().success(function (data) {
                $scope.slide = data.data;

                $scope.slide_first.push($scope.slide[0]);
                $scope.slide.splice(0, 1);
                for(var sl = 0;sl<$scope.slide.length;sl++){
                   $scope.slide[sl]["count"] = sl+1;
                }

            }).error(function (err) {
            });

            $scope.hgl = [];
            $scope.tmpHgl = [];
            homeServices.getIMGHightlight().success(function (data) {
                $scope.hgl = data.data;
                for (var h = 0; h < $scope.hgl.length; h++) {
                    if ($scope.hgl[h].key == 'home-page') {
                        $scope.tmpHgl.push($scope.hgl[h]);
                    }
                }
                $scope.favorite_one_product.push($scope.tmpHgl[0]);
                $scope.favorite_two_product.push($scope.tmpHgl[1]);
                $scope.favorite_three_product.push($scope.tmpHgl[2]);
                $scope.favorite_four_product.push($scope.tmpHgl[3]);
                $scope.favorite_five_product.push($scope.tmpHgl[4]);

            }).error(function (err) {
            });

            $scope.goHightlight = function (id) {
                $state.go('home-page.categories', {id: id});
            };
            $scope.design = [];
            $scope.design_first = [];
            //get design
            homeServices.getDesign().success(function (data) {
                $scope.design = data.data;
                $scope.design_first.push($scope.design[0]);
                $scope.design.splice(0, 1);
            }).error(function (err) {
            });

            /*
            * Get store
            */
            $scope.store = [];

            homeServices.getStore().success(function (data) {
                $scope.store = data.data;
            }).error(function (err) {
            });

            $scope.goStore = function(){
                $state.go('home-page.store');
            };
        }
    ]);