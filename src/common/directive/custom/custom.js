angular.module('directive.custom', [])

    .directive('fullHeight', function ($window) {
        return {
            restrick: 'A',
            link: function (scope, element) {
                var headerAndFooter = 50;
                scope.initializeWindowSize = function () {
                    $(element).css('min-height', $window.innerHeight - headerAndFooter);
                };
                scope.initializeWindowSize();
                angular.element($window).bind('resize', function () {
                    scope.initializeWindowSize();
                });
            }
        };
    })

    .directive('loadingContainer', function () {
        return {
            restrict: 'A',
            scope: false,
            link: function (scope, element, attrs) {
                var loadingLayer = angular.element('<div class="loading"></div>');
                element.append(loadingLayer);
                element.addClass('loading-container');
                scope.$watch(attrs.loadingContainer, function (value) {
                    loadingLayer.toggleClass('ng-hide', !value);
                });
            }
        };
    })
    .directive('backButton', function ($window) {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                elem.bind('click', function () {
                    $window.history.back();
                });
            }
        };
    })
    .directive('backToTop', function(){

        return {
            restrict: 'E',
             replace: true,
             template: '<div class="back-to-top"><i class="fa fa-chevron-up"></i></div>',
             link: function($scope, element, attrs) {

                $(window).scroll(function(){

                    if ($(window).scrollTop() <= 0) {
                        $(element).fadeOut();
                    }
                    else {
                        $(element).fadeIn();
                    }

                });

                $(element).on('click', function(){
                    $('html, body').animate({ scrollTop: 0 }, 'fast');
                });

            }
        };

    })
;