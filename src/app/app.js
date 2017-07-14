(function (app) {
    app.constant('APP_CONFIG', {
        "HOST": "https://hnx.vn/ModuleReportBonds/Bond_IDX_Data/Bond_Board_IDX_DataPrice",
        "BASE_URL": "https://hnx.vn/ModuleReportBonds/Bond_IDX_Data/Bond_Board_IDX_DataPrice"
    });

    app.constant('DIALOG_TEXT', {
        "WARNING_SAVE_CHANGE": "Please save changes before leave the current page or click 'Cancel' to go to next page without saving."
    });

    app.config(function ($stateProvider, $urlRouterProvider, $httpProvider, laddaProvider) {
        $urlRouterProvider.otherwise('/home/primary');
        //$urlRouterProvider.otherwise('release');

        laddaProvider.setOption({
            style: 'zoom-out'
        });

        $httpProvider.interceptors.push('authHttpInterceptor');
    });

    app.run(function (editableOptions, editableThemes, $rootScope, $location, security, caseInfo,$http) {
        // Redirect to the given url (defaults to '/')
        function redirect(url) {
            url = url || '/home/primary';
            //url = url || 'release';
            $location.path(url);
        }

        var token = security.getToken();
        if (token) {
            security.storeToken(token);
        }
        //add header language
        // store the authentication token on local use for mobile device
        $http.defaults.headers.common.Language = 'en';

    });
    app.controller('AppController', function ($rootScope, $location) {


        // Redirect to the given url (defaults to '/')
        function redirect(url) {
            url = url || '/home/primary';
            //url = url || 'release';
            $location.path(url);
        }

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, formParams) {

        });


        // Authorization Required
        $scope.$on('response:authorized:error', function (event, rejection) {
            if (rejection.config.url.indexOf('login') === -1) {
               // redirect('/home/primary');
                redirect('release');
            }
        });

    });
}(angular.module("app", [
    'templates-app',
    'templates-common',
    //service
    'ui.router',
    'ui.bootstrap',
    'ngSanitize',
    'ngAnimate',
    'toastr',
    // 'ngCookies',
    // 'nsPopover',
    'ngTable',
    'monospaced.elastic',
    'xeditable',
    'ui.select',
    'ui.tree',
    'textAngular',
    'angular-ladda',
    'ngTagsInput',
    'ngBootbox',

    'factory.security',

    //factory
    'factory.custom',
    'factory.module-info',
    'factory.case-info',
    'factory.vital-exam',
    'factory.state-change',
    'factory.disposition',
    'factory.actions',
    'factory.interceptor',
    //end factory

    //directive
    'directive.custom',
    //end directive

    //filter
    'filter.custom',

    'app.home-page',
    'app.common'
])
));