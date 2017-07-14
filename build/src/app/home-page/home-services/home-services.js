angular.module("app.home-page.home-services", [])
    .factory('homeServices', function ($http, APP_CONFIG) {
            var urlSignUp = 'api/auth/register';
            var urlListProduct = 'api/products';
            var urlListCategories = 'api/categories';
            var urlGetCategoriesById = 'api/categories';
            var urlGetProductById = 'api/products';
            var urlGetNameCate = 'api/categories';
            var urlGetCateById = 'api/categories/';
            var urlGetPopular = 'api/products?is_popular=true';
            var urlGetInspirent = 'api/inspirations';
            var urlGetSlide = 'api/sliders';
            var urlGetPage = 'api/pages/';
            var urlGetDesign = 'api/designers';
            var urlGetStore = 'api/stores';
            var urlPostCatalogues = 'api/catalogues/send-email';
            var urlGetCatalogues = '/api/catalogue-products';
            var urlGetIMGHightlight = 'api/category-images';
            return {
                signUp: function (params) {
                    //Language=vi,en
                    return $http.post(APP_CONFIG.BASE_URL + urlSignUp, params);
                },
                senCatalogues: function (params) {
                    //Language=vi,en
                    return $http.post(APP_CONFIG.BASE_URL + urlPostCatalogues, params);
                },
                getProduct: function () {
                    return $http.get(APP_CONFIG.BASE_URL + urlListProduct + '?full=true');
                },
                getCategories: function () {
                    return $http.get(APP_CONFIG.BASE_URL + urlListCategories);
                },
                getByCategories: function (id) {
                    return $http.get(APP_CONFIG.BASE_URL + urlGetCategoriesById + '/' + id);
                },
                getProductById: function (id) {
                    return $http.get(APP_CONFIG.BASE_URL + urlGetProductById + '/' + id);
                },
                getNameCategories: function () {
                    return $http.get(APP_CONFIG.BASE_URL + urlGetNameCate);
                },
                getCategoriesById: function (id) {
                    return $http.get(APP_CONFIG.BASE_URL + urlGetCateById + id);
                },
                getPopular: function () {
                    return $http.get(APP_CONFIG.BASE_URL + urlGetPopular);
                },
                getInspirent: function () {
                    return $http.get(APP_CONFIG.BASE_URL + urlGetInspirent);
                },
                getSlide: function () {
                    return $http.get(APP_CONFIG.BASE_URL + urlGetSlide);
                },
                getPage: function (slug) {
                    return $http.get(APP_CONFIG.BASE_URL + urlGetPage + slug);
                },
                getDesign: function (slug) {
                    return $http.get(APP_CONFIG.BASE_URL + urlGetDesign);
                },
                getStore: function (slug) {
                    return $http.get(APP_CONFIG.BASE_URL + urlGetStore);
                },
                getCataloguesProduct: function () {
                    return $http.get(APP_CONFIG.BASE_URL + urlGetCatalogues);
                },
                getIMGHightlight: function () {
                    return $http.get(APP_CONFIG.BASE_URL + urlGetIMGHightlight);
                }
            };
        }
    );