/**
 * Created by Dat Dang on 22/02/2017.
 */
angular.module("app.home-page.categories", []).config(function config($stateProvider) {
        $stateProvider.state('home-page.categories', {
            url: '/categories/:id',
            views: {
                "home": {
                    controller: 'CategoriesCtrl',
                    templateUrl: 'home-page/categories/categories.tpl.html'
                }
            },
            data: {pageTitle: 'Categories'}
        });
    })
    .controller('CategoriesCtrl', ['$log', '$scope', '$stateParams', '$state', 'toastr', 'security', 'homeServices',
        function CategoriesCtrl($log, $scope, $stateParams, $state, toastr, security, homeServices) {
            $log.info('CategoriesCtrl');
            $scope.goDetails = function (id) {
                $state.go('home-page.product-details', {id: id});
            };

            $scope.list_product = {};
            $scope.list_product_cate = [];
            $scope.categories_id = $stateParams.id;
            $scope.is_product = true;
            $scope.category_info = {};
            $scope.favorite_product = [];


            homeServices.getByCategories($scope.categories_id).success(function (data) {
                $scope.category_info = data.data;

            }).error(function (err) {
            });

            homeServices.getProduct().success(function (data) {
                $scope.list_product = data.data;
                if ($scope.list_product.length > 0) {
                    for (var i = 0; i < $scope.list_product.length; i++) {
                        if ($scope.list_product[i].category.id == $scope.categories_id) {
                            $scope.list_product_cate.push($scope.list_product[i]);
                        }
                    }
                    if ($scope.list_product_cate.length > 0) {
                        $scope.is_product = true;
                        for (var y = 0; y < $scope.list_product_cate.length; y++) {
                            if ($scope.list_product_cate[y].highlight) {
                                $scope.favorite_product.push($scope.list_product_cate[y]);
                            }
                        }
                    } else {
                        $scope.is_product = false;
                    }
                }
            }).error(function (err) {
            });

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