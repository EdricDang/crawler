/**
 * Created by Dat Dang on 22/02/2017.
 */
angular.module("app.home-page.cart", []).config(function config($stateProvider) {
        $stateProvider.state('home-page.cart', {
            url: '/cart',
            views: {
                "home": {
                    controller: 'CartCtrl',
                    templateUrl: 'home-page/cart/cart.tpl.html'
                }
            },
            data: {pageTitle: 'Cart'}
        });
    })
    .controller('CartCtrl', ['$log', '$scope', '$stateParams', '$state', 'toastr', 'security',
        function CartCtrl($log, $scope, $stateParams, $state, toastr, security) {
            $log.info('CartCtrl');
            // get cart
            $scope.tmpUSer = {};
            $scope.cart = [];
            $scope.subtotal = 0;
            $scope.reloadCart = function () {
                if (security.getUserLogined().list_cart) {
                    $scope.cart = security.getUserLogined().list_cart;
                    if ($scope.cart.length > 0) {
                        for (var ca = 0; ca < $scope.cart.length; ca++) {
                            $scope.subtotal = $scope.subtotal + $scope.cart[ca].discount_price * $scope.cart[ca].quantity;
                        }
                    }
                }
            };
            $scope.reloadCart();

            //remove cart
            $scope.remove_to_cart = function (item) {
                $scope.tmpUSer = security.getUserLogined();
                var index = $scope.cart.indexOf(item);
                $scope.cart.splice(index, 1);
                if ($scope.cart.length > 0) {
                    for (var ca = 0; ca < $scope.cart.length; ca++) {
                        $scope.subtotal = $scope.subtotal + $scope.cart[ca].discount_price * $scope.cart[ca].quantity;
                    }
                }
                $scope.tmpUSer.list_cart = $scope.cart;
                $scope.tmpUSer.sum_cart = $scope.tmpUSer.sum_cart - item.quantity;
                security.setUserLogined($scope.tmpUSer);
            };

            //go checkout
            $scope.goCheckout = function () {
                $state.go('home-page.checkout');
            };

        }
    ]);