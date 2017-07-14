angular.module("app.home-page", [
    "app.home-page.primary-page",
    "app.home-page.furniture",
    "app.home-page.accessories",
    "app.home-page.categories",
    "app.home-page.product-details",
    "app.home-page.catalogues",
    "app.home-page.inspiration",
    "app.home-page.register",
    "app.home-page.home-services",
    "app.home-page.thanks",
    "app.home-page.sub-categories",
    "app.home-page.inspirent-list",
    "app.home-page.cart",
    "app.home-page.checkout",
    "app.home-page.about",
    "app.home-page.store"
]).config(function config($stateProvider) {
    $stateProvider.state('home-page', {
        url: '/home',
        views: {
            "root": {
                controller: 'HomePageCtrl',
                templateUrl: 'home-page/home-page.tpl.html'
            }
        },
        data: {pageTitle: 'HomePage'}
    });
}).controller('HomePageCtrl', ['$log', '$scope', '$state', 'toastr', 'security', '$modal', 'homeServices',
        function HomePageCtrl($log, $scope, $state, toastr, security, $modal, homeServices) {
            $log.info('HomePageCtrl');
            //get cart
            $scope.cartNumber = 0;

            // init first run
            $scope.init = function () {
                // init default user info
                $scope.user = {
                    userName: "",
                    password: ""
                };
            };
            $scope.init();
            // init scope
            //go page
            $scope.goPage = function (item) {
                var page = 'home-page.' + item;
                $state.go(page);
            };

            //show modal login
            $scope.goLogin = function () {
                $modal.open({
                    templateUrl: 'home-page/login/login.tpl.html',
                    controller: 'loginController',
                    backdrop: 'static',
                    resolve: {
                        scope: function () {
                            return $scope;
                        }
                    }
                });
            };

            //show modal search
            $scope.goSearch = function () {
                $modal.open({
                    templateUrl: 'home-page/common/search-modal.tpl.html',
                    controller: 'searchController',
                    resolve: {
                        scope: function () {
                            return $scope;
                        }
                    }
                });
            };


            // show modal cart
            $scope.viewCart = function () {
                $modal.open({
                    templateUrl: 'home-page/common/cart-modal.tpl.html',
                    controller: 'viewCartController',
                    backdrop: 'static',
                    windowClass: "cart-modal-class-wrapper",
                    resolve: {
                        scope: function () {
                            return $scope;
                        }
                    }
                });
            };

            //get menu
            $scope.list_cate_funiture = [];
            $scope.list_cate_accesstories = [];
            $scope.list_cate_insprirent = [];
            $scope.list_cate_catalogue = [];
            homeServices.getNameCategories().success(function (data) {

                if (data.data[0].sub_categories) {
                    $scope.list_cate_funiture = data.data[0].sub_categories;
                }
                if (data.data[1].sub_categories) {
                    $scope.list_cate_accesstories = data.data[1].sub_categories;
                }
                if (data.data[2].sub_categories) {
                    $scope.list_cate_insprirent = data.data[2].sub_categories;
                }
                if (data.data[3].sub_categories) {
                    $scope.list_cate_catalogue = data.data[3].sub_categories;
                }
            }).error(function (err) {
            });

            $scope.goPageCateSubSub = function (id) {
                $state.go('home-page.categories', {id: id});
            };
            $scope.goPageCateSub = function (id) {
                $state.go('home-page.sub-categories', {id: id});
            };
            $scope.goPageInspirent = function () {
                $state.go('home-page.inspirent-list');
            };
            // get cart
            $scope.tmpUSer = {};
            $scope.cart = [];
            $scope.reloadCart = function () {
                $scope.subtotal = 0;
                if (security.getUserLogined().list_cart) {
                    $scope.cart = security.getUserLogined().list_cart;
                    if ($scope.cart.length > 0) {
                        for (var ca = 0; ca < $scope.cart.length; ca++) {
                            $scope.subtotal = $scope.subtotal + $scope.cart[ca].select_color[0].discount_price * $scope.cart[ca].quantity;
                        }
                    }
                }
            };

            //remove cart
            $scope.remove_to_cart = function (item) {
                $scope.tmpUSer = security.getUserLogined();
                var index = $scope.cart.indexOf(item);
                $scope.cart.splice(index, 1);
                if ($scope.cart.length > 0) {
                    $scope.subtotal = 0;
                    for (var ca = 0; ca < $scope.cart.length; ca++) {
                        $scope.subtotal = $scope.subtotal + $scope.cart[ca].select_color[0].discount_price * $scope.cart[ca].quantity;
                    }
                } else {
                    $scope.subtotal = 0;
                }
                $scope.tmpUSer.list_cart = $scope.cart;
                $scope.tmpUSer.sum_cart = $scope.tmpUSer.sum_cart - item.quantity;
                security.setUserLogined($scope.tmpUSer);
            };

            //go cart
            $scope.goCart = function () {
                $('#myModal2').modal('hide');
                $state.go('home-page.cart');
            };
            $scope.goPages = function (slug) {
                $state.go('home-page.about', {slug: slug});
            };
            $scope.goStore = function () {
                $state.go('home-page.store');
            };
            $scope.goCatalog = function () {
                $state.go('home-page.catalogues');
            };
        }
    ])
    .controller('loginController', ['$log', '$scope', '$stateParams', '$state', 'toastr', 'security', '$modal', '$modalInstance', 'homeServices',
        function loginController($log, $scope, $stateParams, $state, toastr, security, $modal, $modalInstance, homeServices) {
            $log.info('loginController');
            $scope.tmpUser = {};
            $scope.listMenu = {};

            $scope.cancel = function () {
                $modalInstance.close('close');
            };
            $scope.goSignUp = function () {
                $modalInstance.close('close');
                $state.go('home-page.register');
            };


            // init first run
            $scope.init = function () {
                // init default user info
                $scope.user = {
                    phone: "",
                    password: "",
                    is_remember: false
                };
            };
            $scope.init();
            // init scope
            $scope.login = function () {
                security.login($scope.user).then(function (success) {
                    $scope.userData = success.data.data.user;
                    if (!security.getUserLogined()) {
                        security.setUserLogined($scope.userData);
                    } else {
                        $scope.tmpUSer = $scope.userData;
                        $scope.tmpUSer['list_cart'] = security.getUserLogined().list_cart;
                        $scope.tmpUSer['sum_cart'] = security.getUserLogined().sum_cart;
                        security.setUserLogined($scope.tmpUSer);
                    }
                    security.storeToken(success.data.data.token);
                }, function (err) {
                    toastr.error(err.data.errorMessage);
                });
            };


        }
    ])
    .controller('viewCartController', ['$log', '$scope', '$stateParams', '$state', 'toastr', 'security', '$modal', '$modalInstance', 'homeServices',
        function viewCartController($log, $scope, $stateParams, $state, toastr, security, $modal, $modalInstance, homeServices) {
            $log.info('viewCartController');

        }
    ])

    .controller('searchController', ['$log', '$scope', '$stateParams', '$state', 'toastr', 'security', '$modal', '$modalInstance', 'homeServices',
        function searchController($log, $scope, $stateParams, $state, toastr, security, $modal, $modalInstance, homeServices) {
            $log.info('searchController');
            $scope.cancel = function () {
                $modalInstance.close('close');
            };
        }
    ])
;
