/**
 * Created by Dat Dang on 22/02/2017.
 */
angular.module("app.home-page.sub-categories", []).config(function config($stateProvider) {
        $stateProvider.state('home-page.sub-categories', {
            url: '/sub-categories/:id',
            views: {
                "home": {
                    controller: 'SubCategoriesCtrl',
                    templateUrl: 'home-page/sub-categories/sub-categories.tpl.html'
                }
            },
            data: {pageTitle: 'Categories'}
        });
    })
    .controller('SubCategoriesCtrl', ['$log', '$scope', '$stateParams', '$state', 'toastr', 'security', 'homeServices',
        function SubCategoriesCtrl($log, $scope, $stateParams, $state, toastr, security, homeServices) {
            $log.info('SubCategoriesCtrl');
            $scope.goDetails = function (id) {
                $state.go('home-page.product-details', {id: id});
            };

            $scope.list_product = {};

            $scope.list_cate = [];
            $scope.categories_id = $stateParams.id;
            $scope.is_product = true;
            $scope.category_info = {};
            $scope.favorite_product = [];
            $scope.cate = {};

            homeServices.getCategoriesById($scope.categories_id).success(function (data) {
                $scope.cate = data.data;
                $scope.list_cate = data.data.sub_categories;
            }).error(function (err) {
            });
        }
    ]);