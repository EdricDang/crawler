/**
 * Created by Dat Dang on 22/02/2017.
 */
angular.module("app.home-page.product-details", []).config(function config($stateProvider) {
        $stateProvider.state('home-page.product-details', {
            url: '/product-details/:id',
            views: {
                "home": {
                    controller: 'ProductDetailsCtrl',
                    templateUrl: 'home-page/product-details/product-details.tpl.html'
                }
            },
            data: {pageTitle: 'ProductDetails'}
        });
    })
    .controller('ProductDetailsCtrl', ['$log', '$scope', '$stateParams', '$state', 'toastr', 'security', 'homeServices',
        function ProductDetailsCtrl($log, $scope, $stateParams, $state, toastr, security, homeServices) {
            $log.info('ProductDetailsCtrl');
            $scope.product_id = $stateParams.id;
            $scope.image = [];
            $scope.imgPrimary = '';
            $scope.product = {};
            homeServices.getProductById($scope.product_id).success(function (data) {
                $scope.product = data.data;
                $scope.product['color_name'] = '';
                $scope.product['select_color'] = [];
                if ($scope.product.colors) {
                    if ($scope.product.colors.length > 0) {
                        $scope.product.description = $scope.product.colors[0].description;
                        $scope.product.color_name = $scope.product.colors[0].name;
                        $scope.product.select_color.push($scope.product.colors[0]);
                        $scope.image = $scope.product.colors[0].images;
                        $scope.image.splice(0, 1);
                        $scope.imgPrimary = $scope.product.colors[0].images[0].src;
                        $scope.product.discount_price = $scope.product.colors[0].discount_price;
                    }
                }
            }).error(function (err) {
            });


            /*
             * change image primary
             * */
            $scope.changeImagePrimary = function (src) {
                $scope.imgPrimary = src;
            };

            /*
             * change color
             * */

            $scope.changeColor = function (color) {
                $scope.image = color.images;
                if (color.description) {
                    $scope.product.description = color.description;
                }
                if (color.name) {
                    $scope.product.color_name = color.name;
                }
                if (color.discount_price) {
                    $scope.product.discount_price = color.discount_price;
                }
                $scope.imgPrimary = color.images[0].src;
                $scope.product.select_color.splice(0, 1);
                $scope.product.select_color.push(color);
            };

            /*
             * add cart
             * */
            $scope.tmpListCart = [];
            $scope.tmpUSer = {};
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

            /*
             * popular iemt
             *
             * */
            $scope.list_popular = [];
            homeServices.getPopular().success(function (data) {
                $scope.list_popular = data.data.data;
                $scope.list_popular.splice(4);
            }).error(function (err) {
            });
        }
    ]);