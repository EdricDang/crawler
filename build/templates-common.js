angular.module('templates-common', ['directive/footer/footer.tpl.html', 'directive/header/header.tpl.html']);

angular.module("directive/footer/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directive/footer/footer.tpl.html",
    "<div class=\"navbar-bottom\">\n" +
    "    <footer class=\"footer mp-box main-footer\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"box-row\">\n" +
    "                <div class=\"footer-top cf\">\n" +
    "                    <div class=\"footer-social\">\n" +
    "                        <a data-ng-click=\"toExternalLink('')\" class=\"social social-fb js-gtm-event\"></a>\n" +
    "                        <a data-ng-click=\"toExternalLink('')\" class=\"social social-tw js-gtm-event\"></a>\n" +
    "                        <a data-ng-click=\"toExternalLink('')\" class=\"social social-gp js-gtm-event\"></a>\n" +
    "                        <a data-ng-click=\"toExternalLink('')\" class=\"social social-li js-gtm-event\"></a>\n" +
    "                    </div>\n" +
    "                    <ul>\n" +
    "                        <li><a href=\"#about\">About</a></li>\n" +
    "                        <li><a href=\"#privacy-and-terms\" style=\"white-space: nowrap;\">Privacy & Terms</a></li>\n" +
    "                        <li><a href=\"#advertise\">Advertise</a></li>\n" +
    "                        <li><a data-ng-click=\"toExternalLink('')\">Help</a></li>\n" +
    "                        <li><a href=\"#contact-us\">Contact Us</a></li>\n" +
    "\n" +
    "\n" +
    "                        <!--<li><a href=\"#checkout\" style=\"white-space: nowrap;\">Checkout</a></li>-->\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <div class=\"footer-bot cf\">\n" +
    "                    <span class=\"rf\">Lazy Perks© 2014</span>\n" +
    "                    <div class=\"fake-dropdown dropdown langs-dropdown\" style=\"visibility: visible;\"\n" +
    "                         ns-popover\n" +
    "                         ns-popover-template=\"languageList\"\n" +
    "                         ns-popover-trigger=\"click\"\n" +
    "                         ns-popover-theme=\"ns-popover-tooltip-theme\"\n" +
    "                         ns-popover-placement=\"top\">\n" +
    "                        <a class=\"dropdown-toggle grey\">English</a>\n" +
    "                    </div>\n" +
    "                    <script type=\"text/ng-template\" id=\"languageList\">\n" +
    "                        <div class=\"triangle\"></div>\n" +
    "                        <div class=\"ns-popover-tooltip\">\n" +
    "                            <ul>\n" +
    "                                <li><a>English</a></li>\n" +
    "                                <li><a>Vietnamese</a></li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </script>\n" +
    "                    <a class=\"btn-standard btn-mobile-store app-store\" data-ng-click=\"toExternalLink('')\">AppStore</a>\n" +
    "                    <a class=\"btn-standard btn-mobile-store play-store\" data-ng-click=\"toExternalLink('')\">Google Play</a>\n" +
    "                    <a class=\"btn-standard btn-mobile-store play-store\" data-ng-click=\"toExternalLink('')\">Window Store</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </footer>\n" +
    "</div>");
}]);

angular.module("directive/header/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directive/header/header.tpl.html",
    "<div class=\"header\">\n" +
    "\n" +
    "</div>");
}]);
