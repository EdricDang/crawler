/**
 * Created by Dat Dang on 22/02/2017.
 */
angular.module("app.home-page.about", []).config(function config($stateProvider) {
        $stateProvider.state('home-page.about', {
            url: '/about/:slug',
            views: {
                "home": {
                    controller: 'aboutCtrl',
                    templateUrl: 'home-page/about/about.tpl.html'
                }
            },
            data: {pageTitle: 'about'}
        });
    })
    .controller('aboutCtrl', ['$log', '$scope', '$stateParams', '$state', 'toastr', 'security', 'homeServices',
        function aboutCtrl($log, $scope, $stateParams, $state, toastr, security, homeServices) {
            $log.info('aboutCtrl');
            $scope.slug = $stateParams.slug;
            $scope.page = {};
            $scope.info_page = {
                "description": "",
                "title": "",
                "is_about": false,
                "is_custome": false
            };
            $scope.design = [];

            if ($scope.slug == 'ABOUT-US') {
                $scope.info_page.is_about = true;
            }
            if ($scope.slug == 'CUSTOMER-SERVICE') {
                $scope.info_page.is_custome = true;
            }
            homeServices.getPage($scope.slug).success(function (data) {
                $scope.page = data.data;
                $scope.info_page.description = $scope.page.description;
                $scope.list_cate = data.data.sub_categories;
            }).error(function (err) {
            });

            //get design
            homeServices.getDesign().success(function (data) {
                $scope.design = data.data;
            }).error(function (err) {
            });
        }
    ]);