angular.module('templates-app', ['common/delete-comment/delete-comment.tpl.html', 'common/views/confirm-change-template.tpl.html', 'common/views/confirm-remove.tpl.html', 'home-page/about/about.tpl.html', 'home-page/accessories/accessories.tpl.html', 'home-page/cart/cart.tpl.html', 'home-page/catalogues/catalogues.tpl.html', 'home-page/catalogues/form-catalogues.tpl.html', 'home-page/categories/categories.tpl.html', 'home-page/checkout/checkout.tpl.html', 'home-page/common/cart-modal.tpl.html', 'home-page/common/footer.tpl.html', 'home-page/common/header.tpl.html', 'home-page/common/our-design.tpl.html', 'home-page/common/popular-item.tpl.html', 'home-page/common/search-modal.tpl.html', 'home-page/common/slide.tpl.html', 'home-page/furniture/furniture.tpl.html', 'home-page/home-page.tpl.html', 'home-page/inspiration/inspiration.tpl.html', 'home-page/inspiration/list-product-inspiration.tpl.html', 'home-page/inspiration/slide-inspiration.tpl.html', 'home-page/inspirent-list/inspirent-list.tpl.html', 'home-page/login/login.tpl.html', 'home-page/primary-page/primary-page.tpl.html', 'home-page/primary-page/slide/slide-dinning.tpl.html', 'home-page/primary-page/slide/slide-living.tpl.html', 'home-page/primary-page/slide/slide-new.tpl.html', 'home-page/primary-page/slide/slide-sle.tpl.html', 'home-page/primary-page/slide/slide-sleeping.tpl.html', 'home-page/primary-page/slide/slide-sto.tpl.html', 'home-page/primary-page/slide/slide-storing.tpl.html', 'home-page/primary-page/slide/slide-working.tpl.html', 'home-page/product-details/modal-image.tpl.html', 'home-page/product-details/product-details.tpl.html', 'home-page/register/register.tpl.html', 'home-page/store/store.tpl.html', 'home-page/sub-categories/sub-categories.tpl.html', 'home-page/thanks/thanks.tpl.html', 'login/forget-password/complete/complete.tpl.html', 'login/forget-password/confirm-email/confirmEmail.tpl.html', 'login/forget-password/forgetPassword.tpl.html', 'login/forget-password/reset-password/resetPassword.tpl.html', 'login/login.tpl.html', 'login/register/register.tpl.html', 'release/release.tpl.html', 'users/users.tpl.html']);

angular.module("common/delete-comment/delete-comment.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/delete-comment/delete-comment.tpl.html",
    "<div class=\"modal-change-pass modal-delete\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <div class=\"icon-change\"><i class=\"icons-remove-mess\"></i></div>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "        <div class=\"main\">\n" +
    "            <div class=\"content \">\n" +
    "                <h3>DELETE COMMENT</h3>\n" +
    "                <div class=\"text\">Are you sure you want to <b>DELETE</b> this comment ?</div>\n" +
    "                <div class=\"group\">\n" +
    "                    <button type=\"button\" class=\"btn btn-sm btn-primary\" ng-click=\"remove()\">Delete</button>\n" +
    "                    <button type=\"button\" class=\"btn btn-sm btn-default btn-cancel\" ng-click=\"cancel()\">Cancel</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("common/views/confirm-change-template.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/views/confirm-change-template.tpl.html",
    "<div class=\"modal-header\">\n" +
    "	<button type=\"button\" class=\"close\" ng-click=\"cancel()\">×</button>\n" +
    "	<h4 class=\"text-center\"><i class=\"fa fa-exclamation-triangle text-danger\"></i> You made changes on this template !</h4>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "	<h5 class=\"text-center\">Do you want to load another template and erase all changes that have been made ?</h5>\n" +
    "	<div class=\"text-center\">\n" +
    "        <a class=\"btn btn-default\" data-ng-click=\"confirm()\">Yes</a>\n" +
    "        <a class=\"btn btn-default\" data-ng-click=\"cancel()\">No</a>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("common/views/confirm-remove.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/views/confirm-remove.tpl.html",
    "<a class=\"btn-close\" data-ng-click=\"cancel()\"><span></span></a>\n" +
    "<div class=\"modal-body\">\n" +
    "    <div class=\"db-header\">\n" +
    "        <h4 class=\"text-center\">Are you sure you want to remove <b>{{ itemToProcess.displayName }}</b> ?</h4>\n" +
    "    </div>\n" +
    "    <div class=\"row text-center\">\n" +
    "        <a class=\"btn btn-default\" data-ng-click=\"remove()\">Yes</a>\n" +
    "        <a class=\"btn btn-default\" data-ng-click=\"cancel()\">No</a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home-page/about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/about/about.tpl.html",
    "<div class=\"about-us\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"img-about\">\n" +
    "            <img src=\"assets/images/about.png\">\n" +
    "        </div>\n" +
    "        <div class=\"about-page\">\n" +
    "            <div class=\"link-web\">\n" +
    "                <a href=\"#\" class=\"link-home\">Home &nbsp;/&nbsp; </a>\n" +
    "                <a href=\"\" class=\"link-cate\" ng-if=\"info_page.is_about\">About us</a>\n" +
    "                <a href=\"\" class=\"link-cate\" ng-if=\"info_page.is_custome\"> Customer Service / Why AConCept</a>\n" +
    "            </div>\n" +
    "            <div class=\"title-about\">\n" +
    "                {{page.title}}\n" +
    "            </div>\n" +
    "            <p ng-bind-html=\"info_page.description\"></p>\n" +
    "            <div ng-if=\"info_page.is_about\">\n" +
    "                <div class=\"title-about out-ds\">\n" +
    "                    Our Designer\n" +
    "                </div>\n" +
    "                <div class=\"our-design\" >\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-sm-6 our-dss\" ng-repeat=\"designs in design\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <div class=\"img-design\">\n" +
    "                                        <svg viewBox=\"0 0 120 120\">\n" +
    "                                            <circle cx=\"55\" cy=\"55\" r=\"50\" class=\"dashed\"/>\n" +
    "                                            <foreignObject x=\"5\" y=\"5\" height=\"150px\" width=\"150px\">\n" +
    "                                                <div class=\"img-top\">\n" +
    "                                                    <img src=\"{{designs.src}}\" alt=\"...\">\n" +
    "                                                </div>\n" +
    "                                            </foreignObject>\n" +
    "                                        </svg>\n" +
    "\n" +
    "                                        <div class=\"name-design\">\n" +
    "                                            {{designs.name}}\n" +
    "                                        </div>\n" +
    "                                        <div class=\"old-design\">\n" +
    "                                            {{designs.year}}\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    {{designs.description}}\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home-page/accessories/accessories.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/accessories/accessories.tpl.html",
    "<div data-ng-include=\" 'home-page/common/slide.tpl.html' \"></div>\n" +
    "<!--funiture-->\n" +
    "<div class=\"product-home-content container funiture-home funiture-padding\">\n" +
    "    <div class=\"row\">\n" +
    "\n" +
    "        <div class=\"col-md-4 funi-top\">\n" +
    "            <div class=\"funi-left-bottom\">\n" +
    "                <div class=\"category-dinning product-home-category funiture-dinning\"\n" +
    "                     ng-repeat=\"one in list_one\">\n" +
    "                    <div class=\"dinng-img-sld\">\n" +
    "                        <img src=\"{{one.image.src}}\" ng-click=\"goHightlight(one.category_id)\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4 funi-top\">\n" +
    "            <div class=\"funi-left-bottom\">\n" +
    "                <div class=\"category-dinning product-home-category funiture-dinning\"\n" +
    "                     ng-repeat=\"two in list_two\">\n" +
    "                    <div class=\"dinng-img-sld\">\n" +
    "                        <img src=\"{{two.image.src}}\" ng-click=\"goHightlight(two.category_id)\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4 funi-top\">\n" +
    "            <div class=\"funi-left-bottom\">\n" +
    "                <div class=\"category-dinning product-home-category funiture-dinning\"\n" +
    "                     ng-repeat=\"three in list_three\">\n" +
    "                    <div class=\"dinng-img-sld\">\n" +
    "                        <img src=\"{{three.image.src}}\" ng-click=\"goHightlight(three.category_id)\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <br><br>\n" +
    "        <div class=\"col-md-3\">\n" +
    "            <div class=\"funi-left-top\">\n" +
    "                <div class=\"product-home-category funiture-storing\" ng-repeat=\"storing in list_storing\">\n" +
    "\n" +
    "                    <div class=\"funi-img-storing\">\n" +
    "                        <img src=\"{{storing.image.src}}\" ng-click=\"goHightlight(storing.category_id)\">\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"funi-left-bottom\">\n" +
    "                <div class=\"category-dinning product-home-category funiture-dinning\"\n" +
    "                     ng-repeat=\"dinning in list_dinning\">\n" +
    "                    <div class=\"dinning-sld\">\n" +
    "                        <img src=\"{{dinning.image.src}}\" ng-click=\"goHightlight(dinning.category_id)\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"col-md-6\">\n" +
    "            <div class=\"funi-center-top\">\n" +
    "                <div class=\"product-home-category product-new\" ng-repeat=\"new in list_new\">\n" +
    "                    <div class=\"slide-new\">\n" +
    "                        <img src=\"{{new.image.src}}\" ng-click=\"goHightlight(new.category_id)\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"funi-center-bottom\">\n" +
    "                <div class=\"funiture-home-sleeping product-home-category funiture-sleep\" ng-repeat=\"sleep in list_sleeping\">\n" +
    "                    <img src=\"{{sleep.image.src}}\" ng-click=\"goHightlight(sleep.category_id)\" >\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"col-md-3\">\n" +
    "            <div class=\"funi-right-top\">\n" +
    "                <div class=\"category-living product-home-category funiture-living\" ng-repeat=\"living in list_living\">\n" +
    "                    <img src=\"{{living.image.src}}\" ng-click=\"goHightlight(living.category_id)\">\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"funi-right-botom\">\n" +
    "                <div class=\"category-working product-home-category funiture-working\"  ng-repeat=\"work in list_working\">\n" +
    "                    <img src=\"{{work.image.src}}\" ng-click=\"goHightlight(work.category_id)\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!--Popular item-->\n" +
    "<div class=\"container favorite-product\">\n" +
    "    <div class=\"container favorite-product furniture-page\">\n" +
    "        <div class=\"top-product-title\">\n" +
    "            <div class=\"line left-line\">\n" +
    "            </div>\n" +
    "            <div class=\"title-line\">\n" +
    "                POPULAR ITEM\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-3 product-popular\" ng-repeat=\"popular in list_popular\">\n" +
    "                <img src=\"{{popular.colors[0].images[0].src}}\">\n" +
    "                <div class=\"info-product\">\n" +
    "                    <div class=\"name-product\">\n" +
    "                        {{popular.title}}\n" +
    "                    </div>\n" +
    "                    <div class=\"price-product\">\n" +
    "                        {{popular.discount_price | currency:\"\":0}} VND\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home-page/cart/cart.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/cart/cart.tpl.html",
    "<div class=\"cart-page\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"break-dump\">\n" +
    "            <a href=\"#\" class=\"link-home\">Home &nbsp;/&nbsp; </a>\n" +
    "            <a href=\"#/home/cart\" class=\"link-cate\">Cart</a>\n" +
    "        </div>\n" +
    "        <div class=\"cart-title\">\n" +
    "            Shopping Cart\n" +
    "        </div>\n" +
    "        <table style=\"width: 100%\">\n" +
    "            <tr ng-repeat=\"carts in cart\">\n" +
    "                <td>\n" +
    "                    <div class=\"icon-cart-delete\" ng-click=\"remove_to_cart(carts)\">\n" +
    "                        x\n" +
    "                    </div>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                    <div class=\"img-small-cart\">\n" +
    "                        <img src=\"{{carts.colors[0].images[0].src}}\">\n" +
    "                    </div>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                    <div class=\"info-small-cart\">\n" +
    "                        <div class=\"title\">\n" +
    "                            {{carts.title}}\n" +
    "                        </div>\n" +
    "                        <div class=\"price-pro\">\n" +
    "                            {{carts.quantity}} x {{carts.discount_price | currency:\"\":0}} VND\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>\n" +
    "\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                    <div class=\"info-small-cart\">\n" +
    "                        <div class=\"subtotal\">\n" +
    "                            subtotal:\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                    <div class=\"info-small-cart\">\n" +
    "                        <div class=\"total\">\n" +
    "                            {{subtotal}} VND\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </table>\n" +
    "        <div class=\"btn-cart-small\">\n" +
    "            <button class=\"btn btn-default btn-small-cart btn-view-cart\" ng-click=\"goCart()\">View Cart\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div class=\"btn-cart-small\">\n" +
    "            <button class=\"btn btn-default btn-small-cart btn-checkout\" ng-click=\"goCheckout()\">Checkout\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home-page/catalogues/catalogues.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/catalogues/catalogues.tpl.html",
    "<div class=\"catalogues-page\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"break-dump\">\n" +
    "            <a href=\"#\" class=\"link-home\">Home &nbsp;/&nbsp; </a>\n" +
    "            <a href=\"\" class=\"link-cate\">Catalogues</a>\n" +
    "        </div>\n" +
    "        <div class=\"title-catalogues\">\n" +
    "            Catalogues\n" +
    "        </div>\n" +
    "        <div data-configid=\"28739871/47169813\" style=\"width:100%; height:640px;\" class=\"issuuembed\"></div>\n" +
    "        <script type=\"text/javascript\" src=\"//e.issuu.com/embed.js\" async=\"true\"></script>\n" +
    "\n" +
    "        <div class=\"catalogues-info\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"catalogue-padding\">\n" +
    "                        <div class=\"catalogue-title\">\n" +
    "                            The design catalogue\n" +
    "                        </div>\n" +
    "                        <div class=\"catalogue-details\">\n" +
    "                            Lots and lots of interior inspiration, tips and trends. Send in your order now and have the\n" +
    "                            design catalogue in just a few days.\n" +
    "                        </div>\n" +
    "                        <div data-ng-include=\" 'home-page/catalogues/form-catalogues.tpl.html' \"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"catalogue-left\">\n" +
    "                        <img src=\"{{img_3d}}\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"catalogues-product\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"catalogues-list-product\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-4 catalogue-item\" ng-repeat=\"img in threeD.images\">\n" +
    "                                <img src=\"{{img.src}}\">\n" +
    "                                <div class=\"link3D\">\n" +
    "                                    <img src=\"assets/images/catalogue/3d-icon.png\">\n" +
    "                                </div>\n" +
    "\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"catalogue-3d-padding\">\n" +
    "                        <div class=\"catalogue-title-3d\">\n" +
    "                            {{threeD.name}}\n" +
    "                        </div>\n" +
    "                        <div class=\"catalogue-content-3d\">\n" +
    "                            {{threeD.description}}\n" +
    "                        </div>\n" +
    "                        <div class=\"btn-primary-pro\">\n" +
    "                            <a type=\"button\" class=\"btn btn-pro-add btn-pro-add-cart\" href=\"{{threeD.url}}\">See more</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container catalogue-popular favorite-product furniture-page\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-3\" ng-repeat=\"catalog in cata\">\n" +
    "            <div class=\"catalogue-img-popular\" ng-click=\"goLink(catalog.url)\">\n" +
    "                <img src=\"{{catalog.images[0].src}}\">\n" +
    "                <div class=\"info-product\">\n" +
    "                    <div class=\"name-product\">\n" +
    "                       <a href=\"{{catalog.url}}\"> {{catalog.name}}</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home-page/catalogues/form-catalogues.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/catalogues/form-catalogues.tpl.html",
    "<form role=\"form\" class=\"frm-catalogues\">\n" +
    "    <div class=\"categories-input-form\">\n" +
    "        <div class=\"form-group input-catalogues\">\n" +
    "            <input tabindex=\"1\" class=\"form-control\" name=\"phone-number\" type=\"text\" placeholder=\"Phone Number\"\n" +
    "                   ng-model=\"catalogues.phone\" required>\n" +
    "            <div class=\"span-catalogue\">\n" +
    "                <i class=\"fa fa-mobile\" aria-hidden=\"true\"></i>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group input-catalogues\">\n" +
    "            <input tabindex=\"2\" class=\"form-control\" name=\"email\" type=\"text\" placeholder=\"Email\"\n" +
    "                   ng-model=\"catalogues.email\" required>\n" +
    "            <div class=\"span-catalogue\">\n" +
    "                <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group input-catalogues\">\n" +
    "            <input tabindex=\"3\" class=\"form-control\" name=\"location\" type=\"text\" placeholder=\"Location\"\n" +
    "                   ng-model=\"catalogues.location\" required>\n" +
    "            <div class=\"span-catalogue\">\n" +
    "                <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group input-catalogues\">\n" +
    "            <input tabindex=\"4\" class=\"form-control\" name=\"name\" type=\"text\" placeholder=\"Name\"\n" +
    "                   ng-model=\"catalogues.name\" required>\n" +
    "            <div class=\"span-catalogue\">\n" +
    "                <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"btn-primary-pro pull-right\">\n" +
    "            <button type=\"button\" class=\"btn btn-pro-add btn-pro-add-cart\" ng-click=\"send_now()\">Send now</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <p>{{title.thanks}}</p>\n" +
    "    </div>\n" +
    "</form>");
}]);

angular.module("home-page/categories/categories.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/categories/categories.tpl.html",
    "<div class=\"top-cate\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"banner-top\">\n" +
    "            <img src=\"assets/images/bn-list-product.png\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"categories-background\">\n" +
    "    <div class=\"categories-page container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"link-web\">\n" +
    "                <a href=\"#\" class=\"link-home\">Home &nbsp;/&nbsp; </a>\n" +
    "                <a ng-click=\"goCategories()\" class=\"link-cate\">{{category_info.name}}</a>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3\" ng-repeat=\"product in list_product_cate\">\n" +
    "                <div class=\"product-item\">\n" +
    "                    <div class=\"product-img-cate\">\n" +
    "                        <img src=\"{{product.colors[0].images[0].src}}\" ng-click=\"goDetails(product.id)\">\n" +
    "                    </div>\n" +
    "                    <div class=\"product-name\">\n" +
    "                        {{product.title}}\n" +
    "                    </div>\n" +
    "                    <div class=\"product-price\">\n" +
    "                         {{product.colors[0].discount_price | currency:\"\":0}} VND\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"container favorite-product furniture-page\">\n" +
    "        <div class=\"top-product-title cate-popula\">\n" +
    "            <div class=\"line left-line\">\n" +
    "            </div>\n" +
    "            <div class=\"title-line\">\n" +
    "                POPULAR ITEM\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-3 product-popular\" ng-repeat=\"favorite in list_popular\">\n" +
    "                <div class=\"produc-popular-padding\">\n" +
    "                    <div class=\"product-img popolar-img-width\">\n" +
    "                        <img src=\"{{favorite.colors[0].images[0].src}}\">\n" +
    "                    </div>\n" +
    "                    <div class=\"info-product\">\n" +
    "                        <div class=\"name-product\">\n" +
    "                            {{favorite.title}}\n" +
    "                        </div>\n" +
    "                        <div class=\"price-product\">\n" +
    "                            {{favorite.colors[0].discount_price | currency:\"\":0}} VND\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home-page/checkout/checkout.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/checkout/checkout.tpl.html",
    "<div class=\"register-page\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"link-web\">\n" +
    "            <a href=\"#\" class=\"link-home\">Home &nbsp;/&nbsp; </a>\n" +
    "            <a href=\"\" class=\"link-cate\">Check Out</a>\n" +
    "        </div>\n" +
    "        <div class=\"top-product-title\">\n" +
    "            <div class=\"line left-line\">\n" +
    "            </div>\n" +
    "            <div class=\"title-line\">\n" +
    "                Check Out\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-checkout\">\n" +
    "            <div class=\"title-bling\">\n" +
    "                Billing Address\n" +
    "            </div>\n" +
    "            <div class=\"frm-register\">\n" +
    "                <form role=\"form\" class=\"frm-catalogues\" ng-submit=\"register()\">\n" +
    "                    <div class=\"categories-input-form\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-2\">\n" +
    "                                <div class=\"form-group input-catalogues\">\n" +
    "                                  <label>Country</label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <div class=\"form-group input-catalogues\">\n" +
    "                                    <input tabindex=\"1\" class=\"form-control\" name=\"country\" type=\"text\"\n" +
    "                                           ng-model=\"order.country\" required>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-2\">\n" +
    "                                <div class=\"form-group input-catalogues\">\n" +
    "                                    <label>Country</label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-4\">\n" +
    "                                <div class=\"form-group input-catalogues\">\n" +
    "                                    <input tabindex=\"1\" class=\"form-control\" name=\"country\" type=\"text\"\n" +
    "                                           ng-model=\"order.country\" required>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-2\">\n" +
    "                                <div class=\"form-group input-catalogues\">\n" +
    "                                    <label>Country</label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-4\">\n" +
    "                                <div class=\"form-group input-catalogues\">\n" +
    "                                    <input tabindex=\"1\" class=\"form-control\" name=\"country\" type=\"text\"\n" +
    "                                           ng-model=\"order.country\" required>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-2\">\n" +
    "                                <div class=\"form-group input-catalogues\">\n" +
    "                                    <label>Country</label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <div class=\"form-group input-catalogues\">\n" +
    "                                    <input tabindex=\"1\" class=\"form-control\" name=\"country\" type=\"text\"\n" +
    "                                           ng-model=\"order.country\" required>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-2\">\n" +
    "                                <div class=\"form-group input-catalogues\">\n" +
    "                                    <label>Country</label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <div class=\"form-group input-catalogues\">\n" +
    "                                    <input tabindex=\"1\" class=\"form-control\" name=\"country\" type=\"text\"\n" +
    "                                           ng-model=\"order.country\" required>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-2\">\n" +
    "                                <div class=\"form-group input-catalogues\">\n" +
    "                                    <label>Country</label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <div class=\"form-group input-catalogues\">\n" +
    "                                    <input tabindex=\"1\" class=\"form-control\" name=\"country\" type=\"text\"\n" +
    "                                           ng-model=\"order.country\" required>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-2\">\n" +
    "                                <div class=\"form-group input-catalogues\">\n" +
    "                                    <label>Country</label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-4\">\n" +
    "                                <div class=\"form-group input-catalogues\">\n" +
    "                                    <input tabindex=\"1\" class=\"form-control\" name=\"country\" type=\"text\"\n" +
    "                                           ng-model=\"order.country\" required>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-2\">\n" +
    "                                <div class=\"form-group input-catalogues\">\n" +
    "                                    <label>Country</label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-4\">\n" +
    "                                <div class=\"form-group input-catalogues\">\n" +
    "                                    <input tabindex=\"1\" class=\"form-control\" name=\"country\" type=\"text\"\n" +
    "                                           ng-model=\"order.country\" required>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-2\">\n" +
    "                                <div class=\"form-group input-catalogues\">\n" +
    "                                    <label>Country</label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-4\">\n" +
    "                                <div class=\"form-group input-catalogues\">\n" +
    "                                    <input tabindex=\"1\" class=\"form-control\" name=\"country\" type=\"text\"\n" +
    "                                           ng-model=\"order.country\" required>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-2\">\n" +
    "                                <div class=\"form-group input-catalogues\">\n" +
    "                                    <label>Country</label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-4\">\n" +
    "                                <div class=\"form-group input-catalogues\">\n" +
    "                                    <input tabindex=\"1\" class=\"form-control\" name=\"country\" type=\"text\"\n" +
    "                                           ng-model=\"order.country\" required>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"btn-primary-pro\">\n" +
    "                            <button type=\"submit\" class=\"btn btn-pro-add btn-pro-add-cart\">continue</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"text-footer-signup\">\n" +
    "                            Creating an account means you’re okay with AConcept's Terms of Service, Privacy Policy\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home-page/common/cart-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/common/cart-modal.tpl.html",
    "<div class=\"cart-modal\">\n" +
    "    <!-- Modal -->\n" +
    "    <div class=\"modal right fade\" id=\"myModal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel2\">\n" +
    "        <div class=\"modal-dialog\" role=\"document\">\n" +
    "            <div class=\"modal-content\">\n" +
    "\n" +
    "                <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n" +
    "                            aria-hidden=\"true\">&times;</span></button>\n" +
    "                    <h4 class=\"modal-title\" id=\"myModalLabel2\">Shopping cart</h4>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"modal-body cart-list\">\n" +
    "                    <table>\n" +
    "                        <tr ng-repeat=\"carts in cart\">\n" +
    "                            <td>\n" +
    "                                <div class=\"icon-cart-delete\" ng-click=\"remove_to_cart(carts)\">\n" +
    "                                    x\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <div class=\"img-small-cart\">\n" +
    "                                    <img src=\"{{carts.colors[0].images[0].src}}\">\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <div class=\"info-small-cart\">\n" +
    "                                    <div class=\"title\">\n" +
    "                                        {{carts.title}}\n" +
    "                                    </div>\n" +
    "                                    <div class=\"price-pro\">\n" +
    "                                        {{carts.quantity}} x {{carts.discount_price | currency:\"\":0}} VND\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>\n" +
    "\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <div class=\"info-small-cart\">\n" +
    "                                    <div class=\"subtotal\">\n" +
    "                                        subtotal:\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <div class=\"info-small-cart\">\n" +
    "                                    <div class=\"total\">\n" +
    "                                        {{subtotal}} VND\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                    <div class=\"btn-cart-small\">\n" +
    "                        <button class=\"btn btn-default btn-small-cart btn-view-cart\" ng-click=\"goCart()\">View Cart\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                    <div class=\"btn-cart-small\">\n" +
    "                        <button class=\"btn btn-default btn-small-cart btn-checkout\" ng-click=\"goCheckout()\">Checkout\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div><!-- modal-content -->\n" +
    "        </div><!-- modal-dialog -->\n" +
    "    </div><!-- modal -->\n" +
    "</div>");
}]);

angular.module("home-page/common/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/common/footer.tpl.html",
    "");
}]);

angular.module("home-page/common/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/common/header.tpl.html",
    "");
}]);

angular.module("home-page/common/our-design.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/common/our-design.tpl.html",
    "<div class=\"home-out-design container\">\n" +
    "    <div class=\"col-sm-6 home-design-primary home-design\">\n" +
    "        <div class=\"title-our-design\">\n" +
    "            Our designer\n" +
    "        </div>\n" +
    "        <div id=\"carousel-example-generic-our\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "            <!-- Indicators -->\n" +
    "            <ol class=\"carousel-indicators\">\n" +
    "                <li data-target=\"#carousel-example-generic-our\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "                <li data-target=\"#carousel-example-generic-our\" data-slide-to=\"1\"></li>\n" +
    "                <li data-target=\"#carousel-example-generic-our\" data-slide-to=\"2\"></li>\n" +
    "            </ol>\n" +
    "\n" +
    "            <!-- Wrapper for slides -->\n" +
    "            <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "                <div class=\"item active\" ng-repeat=\"fts in design_first\">\n" +
    "                    <div class=\"img-design-avatar\">\n" +
    "                        <svg viewBox=\"0 0 120 120\">\n" +
    "                            <circle cx=\"55\" cy=\"55\" r=\"50\" class=\"dashed\"/>\n" +
    "                            <foreignObject x=\"5\" y=\"5\" height=\"50px\" width=\"50px\">\n" +
    "                                <div class=\"img-top\">\n" +
    "                                    <img src=\"{{fts.src}}\" alt=\"...\">\n" +
    "                                </div>\n" +
    "                            </foreignObject>\n" +
    "                        </svg>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"carousel-caption\">\n" +
    "                        <div class=\"name-design\">\n" +
    "                            {{fts.name}}\n" +
    "                        </div>\n" +
    "                        <div class=\"year-of-design\">\n" +
    "                            {{fts.year}}\n" +
    "                        </div>\n" +
    "                        <div class=\"design-info\">\n" +
    "                            {{fts.description | cut:true:150:' ...'}}\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"item\"  ng-repeat=\"fts_ds in design\">\n" +
    "                    <div class=\"img-design-avatar\">\n" +
    "                        <svg viewBox=\"0 0 120 120\">\n" +
    "                            <circle cx=\"55\" cy=\"55\" r=\"50\" class=\"dashed\"/>\n" +
    "                            <foreignObject x=\"5\" y=\"5\" height=\"50px\" width=\"50px\">\n" +
    "                                <div class=\"img-top\">\n" +
    "                                    <img src=\"{{fts_ds.src}}\" alt=\"...\">\n" +
    "                                </div>\n" +
    "                            </foreignObject>\n" +
    "                        </svg>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"carousel-caption\">\n" +
    "                        <div class=\"name-design\">\n" +
    "                            {{fts_ds.name}}\n" +
    "\n" +
    "                        </div>\n" +
    "                        <div class=\"year-of-design\">\n" +
    "                            {{fts_ds.year}}\n" +
    "                        </div>\n" +
    "                        <div class=\"design-info\">\n" +
    "                            {{fts_ds.description | cut:true:150:' ...'}}\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <!-- Controls -->\n" +
    "            <a class=\"left carousel-control\" href=\"#carousel-example-generic-our\" role=\"button\" data-slide=\"prev\">\n" +
    "                <!-- <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>-->\n" +
    "                <img src=\"assets/images/slide/left.png\" class=\"btn-slide-control btn-dsg-home\">\n" +
    "                <span class=\"sr-only\">Previous</span>\n" +
    "            </a>\n" +
    "            <a class=\"right carousel-control\" href=\"#carousel-example-generic-our\" role=\"button\" data-slide=\"next\">\n" +
    "                <!-- <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>-->\n" +
    "                <img src=\"assets/images/slide/right.png\" class=\"btn-slide-control btn-dsg-home\">\n" +
    "                <span class=\"sr-only\">Next</span>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6 home-design-primary home-office\" ng-click=\"goStore()\">\n" +
    "        <img src=\"assets/images/charlietown_002.jpg\">\n" +
    "        <div class=\"home-office-info\">\n" +
    "            <div class=\"padding-office\">\n" +
    "                <div class=\"title-our-design\">\n" +
    "                    Store\n" +
    "                </div>\n" +
    "                <div class=\"address-office\">\n" +
    "                    <table style=\"width:100%\">\n" +
    "                        <tr>\n" +
    "                            <td ng-repeat = \"stores in store\">\n" +
    "                                <div class=\"office-details\">\n" +
    "                                    <div class=\"icon-office\">\n" +
    "                                        <img src=\"assets/images/ic-7.png\">\n" +
    "                                    </div>\n" +
    "                                    <div class=\"text-office\">\n" +
    "                                        <div class=\"name-office\">\n" +
    "                                            {{stores.name}}\n" +
    "                                        </div>\n" +
    "                                        <div class=\"addr-office\">\n" +
    "                                           {{stores.address}}\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home-page/common/popular-item.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/common/popular-item.tpl.html",
    "<div class=\"container favorite-product popular-item\">\n" +
    "    <div class=\"container favorite-product furniture-page\">\n" +
    "        <div class=\"top-product-title\">\n" +
    "            <div class=\"line left-line\">\n" +
    "            </div>\n" +
    "            <div class=\"title-line\">\n" +
    "                POPULAR ITEM\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-3 product-popular\" ng-repeat=\"popular in list_popular\">\n" +
    "                <img src=\"{{popular.colors[0].images[0].src}}\">\n" +
    "                <div class=\"info-product\">\n" +
    "                    <div class=\"name-product\">\n" +
    "                        {{popular.title}}\n" +
    "                    </div>\n" +
    "                    <div class=\"price-product\">\n" +
    "                        {{popular.colors[0].discount_price | currency:\"\":0}} VND\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home-page/common/search-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/common/search-modal.tpl.html",
    "<div class=\"login-page\">\n" +
    "    <button type=\"button\" class=\"close pull-right\" ng-click=\"cancel()\">×</button>\n" +
    "    <img src=\"assets/images/logo.png\">\n" +
    "    <div class=\"title-sign-in\">\n" +
    "\n" +
    "    </div>\n" +
    "    <form role=\"form\" class=\"frm-catalogues\">\n" +
    "        <div class=\"categories-input-form\">\n" +
    "            <div class=\"form-group input-catalogues\">\n" +
    "                <input tabindex=\"1\" class=\"form-control\" name=\"search-text\" type=\"text\"\n" +
    "                       ng-model=\"text.search\" placeholder=\"Please enter text search\">\n" +
    "            </div>\n" +
    "            <div class=\"btn-primary-pro\">\n" +
    "                <button type=\"button\" class=\"btn btn-pro-add btn-pro-add-cart\" ng-click=\"search()\">Search</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("home-page/common/slide.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/common/slide.tpl.html",
    "<div class=\"home-top-slide\">\n" +
    "    <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "        <!-- Indicators -->\n" +
    "        <ol class=\"carousel-indicators\">\n" +
    "            <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "            <li ng-repeat=\"sl_item in slide\" data-target=\"#carousel-example-generic\" data-slide-to=\"{{sl_item.count}}\" ></li>\n" +
    "\n" +
    "        </ol>\n" +
    "\n" +
    "        <!-- Wrapper for slides -->\n" +
    "        <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "            <div class=\"item active\" ng-repeat=\"sld_first in slide_first\">\n" +
    "                <img src=\"{{sld_first.src}}\" alt=\"...\">\n" +
    "            </div>\n" +
    "            <div class=\"item\"  ng-repeat=\"sld in slide\">\n" +
    "                <img src=\"{{sld.src}}\" alt=\"...\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Controls -->\n" +
    "        <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/left.png\" class=\"btn-slide-control\">\n" +
    "            <span class=\"sr-only\">Previous</span>\n" +
    "        </a>\n" +
    "        <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/right.png\" class=\"btn-slide-control\">\n" +
    "            <span class=\"sr-only\">Next</span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home-page/furniture/furniture.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/furniture/furniture.tpl.html",
    "<div data-ng-include=\" 'home-page/common/slide.tpl.html' \"></div>\n" +
    "<!--funiture-->\n" +
    "<div class=\"product-home-content container funiture-home funiture-padding\">\n" +
    "    <div class=\"row\">\n" +
    "\n" +
    "        <div class=\"col-md-4 funi-top\">\n" +
    "            <div class=\"funi-left-bottom\">\n" +
    "                <div class=\"category-dinning product-home-category funiture-dinning\"\n" +
    "                     ng-repeat=\"one in list_one\">\n" +
    "                    <div class=\"dinng-img-sld\">\n" +
    "                        <img src=\"{{one.image.src}}\" ng-click=\"goHightlight(one.category_id)\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4 funi-top\">\n" +
    "            <div class=\"funi-left-bottom\">\n" +
    "                <div class=\"category-dinning product-home-category funiture-dinning\"\n" +
    "                     ng-repeat=\"two in list_two\">\n" +
    "                    <div class=\"dinng-img-sld\">\n" +
    "                        <img src=\"{{two.image.src}}\" ng-click=\"goHightlight(two.category_id)\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4 funi-top\">\n" +
    "            <div class=\"funi-left-bottom\">\n" +
    "                <div class=\"category-dinning product-home-category funiture-dinning\"\n" +
    "                     ng-repeat=\"three in list_three\">\n" +
    "                    <div class=\"dinng-img-sld\">\n" +
    "                        <img src=\"{{three.image.src}}\" ng-click=\"goHightlight(three.category_id)\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <br><br>\n" +
    "        <div class=\"col-md-3\">\n" +
    "            <div class=\"funi-left-top\">\n" +
    "                <div class=\"product-home-category funiture-storing\" ng-repeat=\"storing in list_storing\">\n" +
    "\n" +
    "                    <div class=\"funi-img-storing\">\n" +
    "                        <img src=\"{{storing.image.src}}\" ng-click=\"goHightlight(storing.category_id)\">\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"funi-left-bottom\">\n" +
    "                <div class=\"category-dinning product-home-category funiture-dinning\"\n" +
    "                     ng-repeat=\"dinning in list_dinning\">\n" +
    "                    <div class=\"dinning-sld\">\n" +
    "                        <img src=\"{{dinning.image.src}}\" ng-click=\"goHightlight(dinning.category_id)\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"col-md-6\">\n" +
    "            <div class=\"funi-center-top\">\n" +
    "                <div class=\"product-home-category product-new\" ng-repeat=\"new in list_new\">\n" +
    "                    <div class=\"slide-new\">\n" +
    "                        <img src=\"{{new.image.src}}\" ng-click=\"goHightlight(new.category_id)\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"funi-center-bottom\">\n" +
    "                <div class=\"funiture-home-sleeping product-home-category funiture-sleep\" ng-repeat=\"sleep in list_sleeping\">\n" +
    "                    <img src=\"{{sleep.image.src}}\" ng-click=\"goHightlight(sleep.category_id)\" >\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"col-md-3\">\n" +
    "            <div class=\"funi-right-top\">\n" +
    "                <div class=\"category-living product-home-category funiture-living\" ng-repeat=\"living in list_living\">\n" +
    "                    <img src=\"{{living.image.src}}\" ng-click=\"goHightlight(living.category_id)\">\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"funi-right-botom\">\n" +
    "                <div class=\"category-working product-home-category funiture-working\"  ng-repeat=\"work in list_working\">\n" +
    "                    <img src=\"{{work.image.src}}\" ng-click=\"goHightlight(work.category_id)\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!--Popular item-->\n" +
    "<div class=\"container favorite-product\">\n" +
    "    <div class=\"container favorite-product furniture-page\">\n" +
    "        <div class=\"top-product-title\">\n" +
    "            <div class=\"line left-line\">\n" +
    "            </div>\n" +
    "            <div class=\"title-line\">\n" +
    "                POPULAR ITEM\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-3 product-popular\" ng-repeat=\"popular in list_popular\">\n" +
    "                <img src=\"{{popular.colors[0].images[0].src}}\">\n" +
    "                <div class=\"info-product\">\n" +
    "                    <div class=\"name-product\">\n" +
    "                        {{popular.title}}\n" +
    "                    </div>\n" +
    "                    <div class=\"price-product\">\n" +
    "                        {{popular.discount_price | currency:\"\":0}} VND\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home-page/home-page.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/home-page.tpl.html",
    "<div data-ng-include=\" 'home-page/common/header.tpl.html' \"></div>\n" +
    "<div ui-view=\"home\" class=\"home-main\">\n" +
    "</div>\n" +
    "\n" +
    "<div data-ng-include=\" 'home-page/common/cart-modal.tpl.html' \"></div>\n" +
    "<div data-ng-include=\" 'home-page/common/footer.tpl.html' \"></div>");
}]);

angular.module("home-page/inspiration/inspiration.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/inspiration/inspiration.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"inspiration-page \">\n" +
    "        <div class=\"list-insprient\" ng-repeat=\"inspirent in list_inspirent\">\n" +
    "            <div data-ng-include=\" 'home-page/inspiration/slide-inspiration.tpl.html' \"></div>\n" +
    "            <div data-ng-include=\" 'home-page/inspiration/list-product-inspiration.tpl.html' \"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home-page/inspiration/list-product-inspiration.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/inspiration/list-product-inspiration.tpl.html",
    "<div class=\"home-top-slide product-insprirent\">\n" +
    "    <div id=\"ins-produc-{{inspirent.id}}\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "        <!-- Wrapper for slides -->\n" +
    "        <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "            <div class=\"item active\">\n" +
    "                <div class=\"container favorite-product furniture-page\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-sm-3 product-popular\"\n" +
    "                             ng-repeat=\"prd_inspirent_first in inspirent.product_first\">\n" +
    "                            <div class=\"produc-popular-padding\">\n" +
    "                                <div class=\"product-img\">\n" +
    "                                    <div class=\"insprirent-img-list\">\n" +
    "                                        <img src=\"{{prd_inspirent_first.colors[0].images[0].src}}\">\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"info-product\">\n" +
    "                                    <div class=\"name-product\">\n" +
    "                                        {{prd_inspirent_first.title}}\n" +
    "                                    </div>\n" +
    "                                    <div class=\"price-product\">\n" +
    "                                        {{prd_inspirent_first.colors[0].discount_price | currency:\"\":0}} VND\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Controls -->\n" +
    "        <a class=\"left carousel-control\" href=\"#ins-produc-{{inspirent.id}}\" role=\"button\" data-slide=\"prev\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/left.png\" class=\"btn-slide-control btn-inspirent-left btn-slide-left\">\n" +
    "            <span class=\"sr-only\">Previous</span>\n" +
    "        </a>\n" +
    "        <a class=\"right carousel-control\" href=\"#ins-produc-{{inspirent.id}}\" role=\"button\" data-slide=\"next\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/right.png\" class=\"btn-slide-control btn-inspirent-right btn-slide-right\">\n" +
    "            <span class=\"sr-only\">Next</span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home-page/inspiration/slide-inspiration.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/inspiration/slide-inspiration.tpl.html",
    "<div class=\"home-top-slide inspiration-slide\">\n" +
    "    <div class=\"inspirent-title\">\n" +
    "        {{inspirent.name}}\n" +
    "    </div>\n" +
    "    <div class=\"inspirent-description\">\n" +
    "        {{inspirent.description}}\n" +
    "    </div>\n" +
    "    <div class=\"spirent-img\" ng-repeat=\"img_inspirent_first in inspirent.img_first\">\n" +
    "        <img src=\"{{img_inspirent_first.src}}\" alt=\"...\">\n" +
    "    </div>\n" +
    " </div>");
}]);

angular.module("home-page/inspirent-list/inspirent-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/inspirent-list/inspirent-list.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"inspiration-page \">\n" +
    "        <div class=\"list-insprient\" ng-repeat=\"inspirent in list_inspirent\">\n" +
    "            <div data-ng-include=\" 'home-page/inspiration/slide-inspiration.tpl.html' \"></div>\n" +
    "            <div data-ng-include=\" 'home-page/inspiration/list-product-inspiration.tpl.html' \"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home-page/login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/login/login.tpl.html",
    "<div class=\"login-page\">\n" +
    "    <button type=\"button\" class=\"close pull-right\" ng-click=\"cancel()\">×</button>\n" +
    "    <img src=\"assets/images/logo.png\">\n" +
    "    <div class=\"title-sign-in\">\n" +
    "        Sign in to experience our collection\n" +
    "    </div>\n" +
    "    <form role=\"form\" class=\"frm-catalogues\">\n" +
    "        <div class=\"categories-input-form\">\n" +
    "            <div class=\"form-group input-catalogues\">\n" +
    "                <label>Phone Number</label>\n" +
    "                <input tabindex=\"1\" class=\"form-control\" name=\"phone-number\" type=\"text\"\n" +
    "                       ng-model=\"user.phone\" required>\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"form-group input-catalogues\">\n" +
    "                <label>Password</label>\n" +
    "                <input tabindex=\"2\" class=\"form-control\" name=\"email\" type=\"password\"\n" +
    "                       ng-model=\"user.password\" required>\n" +
    "            </div>\n" +
    "            <div class=\"form-group input-catalogues\">\n" +
    "                <div class=\"forgot-pass pull-right\">\n" +
    "                    <a tabindex=\"4\" ng-click=\"forgotPass()\">\n" +
    "                        Forgot Password?\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"btn-primary-pro\">\n" +
    "                <button type=\"button\" class=\"btn btn-pro-add btn-pro-add-cart\" ng-click=\"login()\">Continue</button>\n" +
    "            </div>\n" +
    "            <div class=\"dont-account\">\n" +
    "                Don't have an account?\n" +
    "                <a ng-click=\"goSignUp()\">SIGN UP</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("home-page/primary-page/primary-page.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/primary-page/primary-page.tpl.html",
    "asdad");
}]);

angular.module("home-page/primary-page/slide/slide-dinning.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/primary-page/slide/slide-dinning.tpl.html",
    "<div class=\"home-top-slide\">\n" +
    "    <div id=\"carousel-example-generic-dinning\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\n" +
    "        <!-- Wrapper for slides -->\n" +
    "        <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "            <div class=\"item active\" ng-repeat=\"dinning_lst_active in list_dinning_active\"\n" +
    "                 ng-click=\"goCategoriesPage(34)\">\n" +
    "                <div class=\"living-iteam-img\">\n" +
    "                    <img src=\"{{dinning_lst_active.colors[0].images[1].src}}\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"item\" ng-repeat=\"dinning_lst in list_dinning\" ng-click=\"goCategoriesPage(34)\">\n" +
    "                <div class=\"living-iteam-img\">\n" +
    "                    <img src=\"{{dinning_lst.colors[0].images[1].src}}\" ng-if=\"dinning_lst.colors[0].images[0].src\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Controls -->\n" +
    "        <a class=\"left carousel-control\" href=\"#carousel-example-generic-dinning\" role=\"button\" data-slide=\"prev\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/left.png\" class=\"btn-slide-control\">\n" +
    "            <span class=\"sr-only\">Previous</span>\n" +
    "        </a>\n" +
    "        <a class=\"right carousel-control\" href=\"#carousel-example-generic-dinning\" role=\"button\" data-slide=\"next\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/right.png\" class=\"btn-slide-control btn-sto-right\">\n" +
    "            <span class=\"sr-only\">Next</span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home-page/primary-page/slide/slide-living.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/primary-page/slide/slide-living.tpl.html",
    "<div class=\"home-top-slide\">\n" +
    "    <div id=\"carousel-example-generic-living\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\n" +
    "        <!-- Wrapper for slides -->\n" +
    "        <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "            <div class=\"item active\" ng-repeat=\"living_lst_active in list_living_active\">\n" +
    "                <div class=\"living-iteam-img\">\n" +
    "                    <img src=\"{{living_lst_active.colors[0].images[1].src}}\" ng-click=\"goCategoriesPage(33)\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"item\" ng-repeat=\"living_lst in list_living\">\n" +
    "                <div class=\"living-iteam-img\">\n" +
    "                    <img src=\"{{living_lst.colors[0].images[1].src}}\" ng-click=\"goCategoriesPage(33)\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Controls -->\n" +
    "        <a class=\"left carousel-control\" href=\"#carousel-example-generic-living\" role=\"button\" data-slide=\"prev\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/left.png\" class=\"btn-slide-control\">\n" +
    "            <span class=\"sr-only\">Previous</span>\n" +
    "        </a>\n" +
    "        <a class=\"right carousel-control\" href=\"#carousel-example-generic-living\" role=\"button\" data-slide=\"next\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/right.png\" class=\"btn-slide-control btn-sto-right\">\n" +
    "            <span class=\"sr-only\">Next</span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home-page/primary-page/slide/slide-new.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/primary-page/slide/slide-new.tpl.html",
    "<div class=\"home-top-slide\">\n" +
    "    <div id=\"carousel-example-generic-new\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\n" +
    "        <!-- Wrapper for slides -->\n" +
    "        <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "            <div class=\"item active\" ng-repeat=\"new_lst_active in list_new_active\">\n" +
    "                <img src=\"{{new_lst_active.colors[0].images[1].src}}\" ng-click=\"goDetailsProduct('new_lst_active.id')\">\n" +
    "            </div>\n" +
    "            <div class=\"item\" ng-repeat=\"new_lst in list_new\">\n" +
    "                <img src=\"{{new_lst.colors[0].images[1].src}}\" ng-if=\"new_lst.colors[0].images[0].src\" ng-click=\"goDetailsProduct('new_lst.id')\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Controls -->\n" +
    "        <a class=\"left carousel-control\" href=\"#carousel-example-generic-new\" role=\"button\" data-slide=\"prev\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/left.png\" class=\"btn-slide-control btn-new-left\">\n" +
    "            <span class=\"sr-only\">Previous</span>\n" +
    "        </a>\n" +
    "        <a class=\"right carousel-control\" href=\"#carousel-example-generic-new\" role=\"button\" data-slide=\"next\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/right.png\" class=\"btn-slide-control btn-new-right\">\n" +
    "            <span class=\"sr-only\">Next</span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home-page/primary-page/slide/slide-sle.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/primary-page/slide/slide-sle.tpl.html",
    "<div class=\"home-top-slide\">\n" +
    "    <div id=\"carousel-example-generic-sleep\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "        <!-- Wrapper for slides -->\n" +
    "        <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "            <div class=\"item active\" ng-repeat=\"sleep_lst_active in list_sleeping_active\" ng-click=\"goCategoriesPage(35)\">\n" +
    "                <img src=\"{{sleep_lst_active.colors[0].images[1].src}}\">\n" +
    "            </div>\n" +
    "            <div class=\"item\" ng-repeat=\"sleep_lst in list_sleeping\" ng-click=\"goCategoriesPage(35)\">\n" +
    "                <img src=\"{{sleep_lst.colors[0].images[1].src}}\" ng-if=\"sleep_lst.colors[0].images[0].src\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Controls -->\n" +
    "        <a class=\"left carousel-control\" href=\"#carousel-example-generic-sleep\" role=\"button\" data-slide=\"prev\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/left.png\" class=\"btn-slide-control btn-new-left\">\n" +
    "            <span class=\"sr-only\">Previous</span>\n" +
    "        </a>\n" +
    "        <a class=\"right carousel-control\" href=\"#carousel-example-generic-sleep\" role=\"button\" data-slide=\"next\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/right.png\" class=\"btn-slide-control btn-new-right\">\n" +
    "            <span class=\"sr-only\">Next</span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home-page/primary-page/slide/slide-sleeping.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/primary-page/slide/slide-sleeping.tpl.html",
    "<div class=\"home-top-slide\">\n" +
    "    <div id=\"carousel-example-generic-sleep\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\n" +
    "        <!-- Wrapper for slides -->\n" +
    "        <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "            <div class=\"item active\" ng-repeat=\"sleep_lst_active in list_sleeping_active\" ng-click=\"goCategoriesPage(35)\">\n" +
    "                <img src=\"{{sleep_lst_active.colors[0].images[1].src}}\">\n" +
    "            </div>\n" +
    "            <div class=\"item\" ng-repeat=\"sleep_lst in list_sleeping\" ng-click=\"goCategoriesPage(35)\">\n" +
    "                <img src=\"{{sleep_lst.colors[0].images[1].src}}\" ng-if=\"sleep_lst.colors[0].images[0].src\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Controls -->\n" +
    "        <a class=\"left carousel-control\" href=\"#carousel-example-generic-sleep\" role=\"button\" data-slide=\"prev\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/left.png\" class=\"btn-slide-control btn-new-left\">\n" +
    "            <span class=\"sr-only\">Previous</span>\n" +
    "        </a>\n" +
    "        <a class=\"right carousel-control\" href=\"#carousel-example-generic-sleep\" role=\"button\" data-slide=\"next\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/right.png\" class=\"btn-slide-control btn-new-right\">\n" +
    "            <span class=\"sr-only\">Next</span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home-page/primary-page/slide/slide-sto.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/primary-page/slide/slide-sto.tpl.html",
    "<div class=\"home-top-slide\">\n" +
    "    <div id=\"carousel-example-generic-storing\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "        <!-- Wrapper for slides -->\n" +
    "        <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "            <div class=\"item active\"  ng-click=\"goCategoriesPage(36)\">\n" +
    "               <img src=\"{{storing_lst_active.colors[0].images[1].src}}\">\n" +
    "            </div>\n" +
    "            <div class=\"item\" ng-click=\"goCategoriesPage(36)\">\n" +
    "                <img src=\"{{storing_lst.colors[0].images[1].src}}\" ng-if=\"storing_lst.colors[0].images[0].src\">\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Controls -->\n" +
    "        <a class=\"left carousel-control\" href=\"#carousel-example-generic-storing\" role=\"button\" data-slide=\"prev\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/left.png\" class=\"btn-slide-control btn-sto-left\">\n" +
    "            <span class=\"sr-only\">Previous</span>\n" +
    "        </a>\n" +
    "        <a class=\"right carousel-control\" href=\"#carousel-example-generic-storing\" role=\"button\" data-slide=\"next\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/right.png\" class=\"btn-slide-control btn-sto-right\">\n" +
    "            <span class=\"sr-only\">Next</span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home-page/primary-page/slide/slide-storing.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/primary-page/slide/slide-storing.tpl.html",
    "<div class=\"home-top-slide\">\n" +
    "    <div id=\"carousel-example-generic-storing\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\n" +
    "        <!-- Wrapper for slides -->\n" +
    "        <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "            <div class=\"item active\" ng-repeat=\"storing_lst_active in list_storing_active\" ng-click=\"goCategoriesPage(36)\">\n" +
    "                <img src=\"{{storing_lst_active.colors[0].images[1].src}}\">\n" +
    "            </div>\n" +
    "            <div class=\"item\" ng-repeat=\"storing_lst_active in list_storing\" ng-click=\"goCategoriesPage(36)\">\n" +
    "                <img src=\"{{working_lst.colors[0].images[1].src}}\" ng-if=\"new_lst.colors[0].images[0].src\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Controls -->\n" +
    "        <a class=\"left carousel-control\" href=\"#carousel-example-generic-storing\" role=\"button\" data-slide=\"prev\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/left.png\" class=\"btn-slide-control\">\n" +
    "            <span class=\"sr-only\">Previous</span>\n" +
    "        </a>\n" +
    "        <a class=\"right carousel-control\" href=\"#carousel-example-generic-storing\" role=\"button\" data-slide=\"next\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/right.png\" class=\"btn-slide-control btn-sto-right\">\n" +
    "            <span class=\"sr-only\">Next</span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home-page/primary-page/slide/slide-working.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/primary-page/slide/slide-working.tpl.html",
    "<div class=\"home-top-slide\">\n" +
    "    <div id=\"carousel-example-generic-working\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\n" +
    "        <!-- Wrapper for slides -->\n" +
    "        <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "            <div class=\"item active\" ng-repeat=\"working_lst_active in list_working_active\" ng-click=\"goCategoriesPage(36)\">\n" +
    "                <img src=\"{{working_lst_active.colors[0].images[1].src}}\">\n" +
    "            </div>\n" +
    "            <div class=\"item\" ng-repeat=\"working_lst in list_working\" ng-click=\"goCategoriesPage(36)\">\n" +
    "                <img src=\"{{working_lst.colors[0].images[1].src}}\" ng-if=\"new_lst.colors[0].images[0].src\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Controls -->\n" +
    "        <a class=\"left carousel-control\" href=\"#carousel-example-generic-working\" role=\"button\" data-slide=\"prev\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/left.png\" class=\"btn-slide-control\">\n" +
    "            <span class=\"sr-only\">Previous</span>\n" +
    "        </a>\n" +
    "        <a class=\"right carousel-control\" href=\"#carousel-example-generic-working\" role=\"button\" data-slide=\"next\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/right.png\" class=\"btn-slide-control btn-sto-right\">\n" +
    "            <span class=\"sr-only\">Next</span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home-page/product-details/modal-image.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/product-details/modal-image.tpl.html",
    "<div class=\"modal-image-product-page\">\n" +
    "    <div id=\"carousel-example-generic1\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "        <!-- Wrapper for slides -->\n" +
    "        <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "            <div class=\"item active\">\n" +
    "                <img src=\"{{imgPrimary}}\">\n" +
    "            </div>\n" +
    "            <div class=\"item\" ng-repeat=\"imgs in image\">\n" +
    "                <img src=\"{{imgs.src}}\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Controls -->\n" +
    "        <a class=\"left carousel-control\" href=\"#carousel-example-generic1\" role=\"button\" data-slide=\"prev\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/left.png\" class=\"btn-slide-control\">\n" +
    "            <span class=\"sr-only\">Previous</span>\n" +
    "        </a>\n" +
    "        <a class=\"right carousel-control\" href=\"#carousel-example-generic1\" role=\"button\" data-slide=\"next\">\n" +
    "            <!-- <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>-->\n" +
    "            <img src=\"assets/images/slide/right.png\" class=\"btn-slide-control\">\n" +
    "            <span class=\"sr-only\">Next</span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home-page/product-details/product-details.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/product-details/product-details.tpl.html",
    "<div class=\"product-container-page\">\n" +
    "    <div class=\"product-details-page container\">\n" +
    "        <div class=\"link-web\">\n" +
    "            <a href=\"#\" class=\"link-home\">Home &nbsp;/&nbsp; </a>\n" +
    "            <a class=\"link-cate\">{{product.title}}</a>\n" +
    "        </div>\n" +
    "        <div class=\"product-details-info row\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"product-image\">\n" +
    "                    <div class=\"image-primary\">\n" +
    "                        <img src=\"{{imgPrimary}}\">\n" +
    "                        <div class=\"icon-zoom\" data-toggle=\"modal\" data-target=\"#myModal\" type=\"button\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"image-sub\">\n" +
    "                        <ul>\n" +
    "                            <li ng-repeat=\"img in image\">\n" +
    "                                <img src=\"{{img.src}}\" ng-click=\"changeImagePrimary(img.src)\">\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-6 product-detail-background\">\n" +
    "                <div class=\"product-detail-padding\">\n" +
    "                    <div class=\"name-product\">\n" +
    "                        {{product.title}}\n" +
    "                    </div>\n" +
    "                    <div class=\"description-product\">\n" +
    "                        {{product.description}}\n" +
    "                    </div>\n" +
    "                    <div class=\"price-product\">\n" +
    "                        {{product.discount_price | currency:\"\":0}} VND\n" +
    "                    </div>\n" +
    "                    <div class=\"description-product\">\n" +
    "                        <b>Color:</b><br>\n" +
    "                        {{product.color_name}}\n" +
    "                    </div>\n" +
    "                    <div class=\"btn-color-cover\">\n" +
    "                        <div ng-repeat=\"color in product.colors\">\n" +
    "                            <div class=\"btn-padding\">\n" +
    "                                <button type=\"button\" class=\"btn btn-default btn-color\"\n" +
    "                                        ng-style=\"{background: url({{color.color_src}})\" ng-click=\"changeColor(color)\"></button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <!--<div class=\"btn-primary-pro\">\n" +
    "                        <button type=\"button\" class=\"btn btn-pro-add btn-pro-add-cart\" ng-click=\"addCart(product)\">Add to cart</button>\n" +
    "                        <button type=\"button\" class=\"btn btn-pro-add btn-pro-add-wish-list\">Add to wish list</button>\n" +
    "                    </div>-->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Modal -->\n" +
    "<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n" +
    "    <div class=\"modal-dialog\" role=\"document\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div data-ng-include=\" 'home-page/product-details/modal-image.tpl.html' \"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div data-ng-include=\" 'home-page/common/popular-item.tpl.html' \"></div>\n" +
    "");
}]);

angular.module("home-page/register/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/register/register.tpl.html",
    "<div class=\"register-page\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"link-web\">\n" +
    "            <a href=\"#\" class=\"link-home\">Home &nbsp;/&nbsp; </a>\n" +
    "            <a href=\"\" class=\"link-cate\">Sign Up</a>\n" +
    "        </div>\n" +
    "        <div class=\"top-product-title\">\n" +
    "            <div class=\"line left-line\">\n" +
    "            </div>\n" +
    "            <div class=\"title-line\">\n" +
    "                Sign Up\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-sign-up\">\n" +
    "            <div class=\"frm-register\">\n" +
    "                <div class=\"title-sign-up\">\n" +
    "                    <img src=\"assets/images/background/welcome.png\">\n" +
    "                </div>\n" +
    "                <form role=\"form\" class=\"frm-catalogues\" ng-submit=\"register()\">\n" +
    "                    <div class=\"categories-input-form\">\n" +
    "                        <div class=\"form-group input-catalogues\">\n" +
    "                            <input tabindex=\"1\" class=\"form-control\" name=\"name\" type=\"text\" placeholder=\"Name\"\n" +
    "                                   ng-model=\"user.name\" required>\n" +
    "                            <div class=\"span-catalogue\">\n" +
    "                                <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group input-catalogues\">\n" +
    "                            <input tabindex=\"2\" class=\"form-control\" name=\"phone-number\" type=\"text\"\n" +
    "                                   placeholder=\"Phone Number\"\n" +
    "                                   ng-model=\"user.phone\" required>\n" +
    "                            <div class=\"span-catalogue\">\n" +
    "                                <i class=\"fa fa-mobile\" aria-hidden=\"true\"></i>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group input-catalogues\">\n" +
    "                            <input tabindex=\"3\" class=\"form-control\" name=\"email\" type=\"text\" placeholder=\"Email\"\n" +
    "                                   ng-model=\"user.email\" required>\n" +
    "                            <div class=\"span-catalogue\">\n" +
    "                                <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group input-catalogues\">\n" +
    "                            <input tabindex=\"4\" class=\"form-control\" name=\"address\" type=\"text\" placeholder=\"Address\"\n" +
    "                                   data-toggle=\"tooltip\" data-placement=\"top\" title=\"Street,District,City\"\n" +
    "                                   ng-model=\"user.address\" required>\n" +
    "                            <div class=\"span-catalogue\">\n" +
    "                                <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group input-catalogues\">\n" +
    "                            <input tabindex=\"5\" class=\"form-control\" name=\"password\" type=\"password\"\n" +
    "                                   placeholder=\"Password\"\n" +
    "                                   ng-model=\"user.password\" required>\n" +
    "                            <div class=\"span-catalogue\">\n" +
    "                                <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group input-catalogues\">\n" +
    "                            <input tabindex=\"6\" class=\"form-control\" name=\"confirm-password\" type=\"password\"\n" +
    "                                   placeholder=\"Confirm password\"\n" +
    "                                   ng-model=\"user.confirm_password\" required>\n" +
    "                            <div class=\"span-catalogue\">\n" +
    "                                <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"btn-primary-pro\">\n" +
    "                            <button type=\"submit\" class=\"btn btn-pro-add btn-pro-add-cart\">continue</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"text-footer-signup\">\n" +
    "                            Creating an account means you’re okay with AConcept's Terms of Service, Privacy Policy\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home-page/store/store.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/store/store.tpl.html",
    "<div class=\"store-page\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"store-pading\">\n" +
    "            <div class=\"link-web\">\n" +
    "                <a href=\"#\" class=\"link-home\">Home &nbsp;/&nbsp; </a>\n" +
    "                <a class=\"link-cate\">Store</a>\n" +
    "            </div>\n" +
    "            <tabset active=\"activeJustifiedsss\">\n" +
    "                <tab ng-repeat=\"stores in store\" heading=\"{{stores.name}}\" class=\"title-anlysetab\">\n" +
    "                    <div class=\"store-page-info\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-5\">\n" +
    "                                <div class=\"img-st\">\n" +
    "                                    <img src=\"assets/images/store.jpg\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-7\">\n" +
    "                                <div class=\"name-store\">\n" +
    "                                    {{stores.name}}\n" +
    "                                </div>\n" +
    "                                <div class=\"info-store\">\n" +
    "                                    <p>If you want to know more about AConcept, please contact us at:</p>\n" +
    "                                    <p><i class=\"fa fa-home\" aria-hidden=\"true\"></i>&nbsp; {{stores.address}}</p>\n" +
    "                                    <p><i class=\"fa fa-phone\" aria-hidden=\"true\"></i>&nbsp; {{stores.phone}}</p>\n" +
    "                                    <p><i class=\"fa fa-cloud\" aria-hidden=\"true\"></i></i>&nbsp; {{stores.fax}}</p>\n" +
    "                                    <p><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>&nbsp;{{stores.email}}</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"bottom-sto-rd\">\n" +
    "                                    <p>\n" +
    "                                        Read more about the AConcept Holding A/S - the company behind AConcept A/S and\n" +
    "                                        the AConcept Brand Stores, Inspiration Stores and Studios.\n" +
    "                                    </p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-5\">\n" +
    "                                <div class=\"name-store\">\n" +
    "                                    Opening hours\n" +
    "                                </div>\n" +
    "                                <div class=\"hours\">\n" +
    "                                    <div ng-repeat=\"detail in stores.details\">\n" +
    "                                        <div class=\"day-store\">\n" +
    "                                            {{detail.week}}\n" +
    "                                        </div>\n" +
    "                                        <div class=\"hours-store\">\n" +
    "                                            {{detail.open}} - {{detail.close}}\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-7\">\n" +
    "                                <div class=\"name-store\">\n" +
    "                                    Google Maps\n" +
    "                                </div>\n" +
    "                                <div class=\"map\">\n" +
    "                                    <a href=\"{{stores.google_map}}\">\n" +
    "                                        <img src=\"assets/images/map.png\">\n" +
    "                                    </a>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </tab>\n" +
    "            </tabset>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home-page/sub-categories/sub-categories.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/sub-categories/sub-categories.tpl.html",
    "<div class=\"sub-categories\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"link-web\">\n" +
    "            <a href=\"#\" class=\"link-home\">Home &nbsp;/&nbsp; </a>\n" +
    "            <a ng-click=\"goCategories()\" class=\"link-cate\">{{cate.name}}</a>\n" +
    "        </div>\n" +
    "        <tabset active=\"activeJustifiedsss\">\n" +
    "                <tab ng-repeat=\"list_category in list_cate\" heading=\"{{list_category.name}}\" class=\"title-anlysetab\" >\n" +
    "                    <div class=\"categories-page\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-3\" ng-repeat=\"product in list_category.products\">\n" +
    "                                <div class=\"product-item\">\n" +
    "                                    <div class=\"product-img-cate\">\n" +
    "                                        <img src=\"{{product.colors[0].images[0].src}}\" ng-click=\"goDetails(product.id)\">\n" +
    "                                    </div>\n" +
    "                                    <div class=\"product-name\">\n" +
    "                                        {{product.title}}\n" +
    "                                    </div>\n" +
    "                                    <div class=\"product-price\">\n" +
    "                                        {{product.colors[0].discount_price | currency:\"\":0}} VND\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </tab>\n" +
    "        </tabset>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("home-page/thanks/thanks.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home-page/thanks/thanks.tpl.html",
    "<div class=\"thank-page\">\n" +
    "    <div class=\"title\">\n" +
    "        Thanks you!\n" +
    "    </div>\n" +
    "    <div class=\"info\">\n" +
    "        Thank you for register! Continue, please <a ng-click=\"goLogin()\">Login</a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("login/forget-password/complete/complete.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/forget-password/complete/complete.tpl.html",
    "<div class=\"email-confirm\">\n" +
    "    <div class=\"email-top\">\n" +
    "        <nav class=\"navbar navbar-default\">\n" +
    "            <div class=\"nav-menu\">\n" +
    "                <ul class=\"nav navbar-nav\">\n" +
    "                    <li>\n" +
    "                        <i class=\"fa fa-envelope-square\" aria-hidden=\"true\"></i>\n" +
    "                        <span>1. Confirm email</span>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n" +
    "                        <span>2. Reset password</span>\n" +
    "                    </li>\n" +
    "                    <li class=\"active\">\n" +
    "                        <i class=\"icon-complete\" aria-hidden=\"true\"></i>\n" +
    "                        <span>3. Complete</span>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </nav>\n" +
    "    </div>\n" +
    "    <div class=\"email-main\">\n" +
    "        <div class=\"form-email\">\n" +
    "            <div class=\"intro\">\n" +
    "                <i class=\"icon-complete\" aria-hidden=\"true\"></i>\n" +
    "                <span>Reset Complete !</span>\n" +
    "            </div>\n" +
    "            <div class=\"description\">Your password has been <span>reset</span><br>\n" +
    "                <h3>Please login</h3>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("login/forget-password/confirm-email/confirmEmail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/forget-password/confirm-email/confirmEmail.tpl.html",
    "<div class=\"email-confirm\">\n" +
    "    <div class=\"email-top\">\n" +
    "        <nav class=\"navbar navbar-default\">\n" +
    "            <div class=\"nav-menu\">\n" +
    "                <ul class=\"nav navbar-nav\">\n" +
    "                    <li class=\"active col-xs-4\">\n" +
    "                        <i class=\"fa fa-envelope-square\" aria-hidden=\"true\"></i>\n" +
    "                        <span>1. Confirm email</span>\n" +
    "                    </li>\n" +
    "                    <li class=\"col-xs-4\">\n" +
    "                        <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n" +
    "                        <span>2. Reset password</span>\n" +
    "                    </li>\n" +
    "                    <li class=\"col-xs-4\">\n" +
    "                        <i class=\"icon-complete\" aria-hidden=\"true\"></i>\n" +
    "                        <span>3. Complete</span>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </nav>\n" +
    "    </div>\n" +
    "    <div class=\"email-main\">\n" +
    "        <div class=\"form-email\">\n" +
    "            <div class=\"intro\">\n" +
    "                Provide your <span>Email</span><br>\n" +
    "                so we can help you reset your password\n" +
    "            </div>\n" +
    "            <form role=\"form\" ng-submit=\"confirmEmail()\" name=\"frmEmailConfirm\" ng-controller=\"ConfirmEmailController\">\n" +
    "                <div class=\"col-md-6\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label>EMAIL</label>\n" +
    "                        <input type=\"email\" class=\"form-control\" placeholder=\"Type your email\" name=\"email\" ng-model=\"forgot.email\" required>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group btn-confirm\">\n" +
    "                    <button type=\"submit\" ng-disabled=\"frmEmailConfirm.$invalid\" class=\"btn btn-default\">SUBMIT</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("login/forget-password/forgetPassword.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/forget-password/forgetPassword.tpl.html",
    "<div ui-view=\"resetPassword\"></div>");
}]);

angular.module("login/forget-password/reset-password/resetPassword.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/forget-password/reset-password/resetPassword.tpl.html",
    "<div class=\"email-confirm\">\n" +
    "    <div class=\"email-top\">\n" +
    "        <nav class=\"navbar navbar-default\">\n" +
    "            <div class=\"nav-menu\">\n" +
    "                <ul class=\"nav navbar-nav\">\n" +
    "                    <li class=\"col-xs-4\">\n" +
    "                        <i class=\"fa fa-envelope-square\" aria-hidden=\"true\"></i>\n" +
    "                        <a ui-sref=\"login.forget-password.confirm-email\"><span>1. Confirm email</span></a>\n" +
    "                    </li>\n" +
    "                    <li class=\"active col-xs-4\">\n" +
    "                        <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n" +
    "                        <span>2. Reset password</span>\n" +
    "                    </li>\n" +
    "                    <li class=\"col-xs-4\">\n" +
    "                        <i class=\"icon-complete\" aria-hidden=\"true\"></i>\n" +
    "                        <span>3. Complete</span>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </nav>\n" +
    "    </div>\n" +
    "    <div class=\"email-main\">\n" +
    "        <div class=\"form-email\">\n" +
    "            <div class=\"intro\">\n" +
    "                Enter <span>Reset code</span>, Create your <span>new Password</span><br>\n" +
    "                and <span>Confirm</span> to reset\n" +
    "            </div>\n" +
    "            <form role=\"form\" name=\"frmResetPassword\" ng-submit=\"resetPass()\">\n" +
    "                <div class=\"col-md-6\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label>NEW PASSWORD</label>\n" +
    "                        <input type=\"password\" class=\"form-control\" placeholder=\"Type your password\" name=\"password\" equals=\"{{ pass.confirmPassword}}\" ng-model=\"pass.password\" required>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label>CONFIRM PASSWORD</label>\n" +
    "                        <input type=\"password\" class=\"form-control\" placeholder=\"Confirm password\" name=\"confirmPassword\" equals=\"{{ pass.password}}\" ng-model=\"pass.confirmPassword\" required>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group btn-confirm\">\n" +
    "                    <button type=\"submit\" class=\"btn btn-default\" ng-disabled=\"frmResetPassword.$invalid\">RESET</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<div class=\"page-login\">\n" +
    "</div>");
}]);

angular.module("login/register/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/register/register.tpl.html",
    "<div class=\"main-login\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-5\">\n" +
    "            <div class=\"welcome\">\n" +
    "                <div class=\"title\">Welcome</div>\n" +
    "                <div class=\"sub-title\">to <span>Resuscitation Cases Builder</span></div>\n" +
    "                <div class=\"description\">Come a long with the <span>Resuscitation mobile game. </span> <br><span>Resuscitation cases builder</span> is a <span>website platform </span> allow users to:</div>\n" +
    "                <div class='intro-action'>\n" +
    "                    <div class=\"intro-group icon-cases\">\n" +
    "                        <div class=\"intro-title\">CREATE & MANAGE NEW CASES</div>\n" +
    "                        <div class=\"intro-des\">for the mobile game with full case builder tool</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class='intro-action'>\n" +
    "                    <div class=\"intro-group icon-students\">\n" +
    "                        <div class=\"intro-title\">SHARE CASES</div>\n" +
    "                        <div class=\"intro-des\">with your friends and tutors to receive comment, review and rate</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class='intro-action'>\n" +
    "                    <i class=\"fa fa-clipboard\" aria-hidden=\"true\"></i>\n" +
    "                    <div class=\"intro-group\">\n" +
    "                        <div class=\"intro-title\">KEEP TRACK OF YOUR ASSIGNMENTS</div>\n" +
    "                        <div class=\"intro-des\">receive detail metrics and feedback from your tutor. </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-md-7\">\n" +
    "            <div class=\"sign-up\">\n" +
    "                <div class=\"banner-title\">\n" +
    "                    <p class=\"p-title\"><span>sign up</span> for <span>free!</span></p>\n" +
    "                    <p class=\"p-des\"><span>Create</span> and <span>manage</span> your own resuscitation cases easily</p>\n" +
    "                </div>\n" +
    "                <div class=\"signup-body\">\n" +
    "                    <form name=\"frmRegister\" role=\"form\" ng-submit=\"signup()\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-6\">\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label for=\"email\">Email</label>\n" +
    "                                    <input type=\"email\" name=\"email\" placeholder=\"Type your email\" class=\"form-control\" autofocus ng-model=\"register.email\" required>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label for=\"userName\">Username</label>\n" +
    "                                    <input type=\"text\" name=\"userName\" placeholder=\"Type your username\" class=\"form-control\" ng-model=\"register.userName\" required>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label for=\"password\">Password</label>\n" +
    "                                    <input type=\"password\" name=\"password\" equals=\"{{register.confirmPassword}}\" placeholder=\"Type your password\" class=\"form-control\" ng-model=\"register.password\" required>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label for=\"confirmPassword\">Confirm password</label>\n" +
    "                                    <input type=\"password\" name=\"confirmPassword\" equals=\"{{register.password}}\" placeholder=\"Confirm your password\" class=\"form-control\" ng-model=\"register.confirmPassword\" required>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-6\">\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label for=\"firstName\">First name</label>\n" +
    "                                    <input type=\"text\" name=\"firstName\" placeholder=\"Your first name\" class=\"form-control\" ng-model=\"register.firstName\" required>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label for=\"lastName\">Last name</label>\n" +
    "                                    <input type=\"text\" name=\"lastName\" placeholder=\"Your last name\" class=\"form-control\" ng-model=\"register.lastName\" required>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label for=\"birthday\">Birthday</label>\n" +
    "                                    <input type=\"date\" name=\"birthday\" class=\"form-control\" ng-model=\"register.birthday\" required>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label for=\"mobile\">Phone number</label>\n" +
    "                                    <input type=\"text\" name=\"mobile\" phone=\"{{register.mobile}}\" class=\"form-control\" ng-model=\"register.mobile\" required>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label for=\"gender\">Gender</label>\n" +
    "                                    <select name=\"gender\" class=\"form-control select-gender\" ng-model=\"register.gender\" required>\n" +
    "                                        <option value=\"\">Choose your gender</option>\n" +
    "                                        <option value=\"Male\">Male</option>\n" +
    "                                        <option value=\"Female\">Female</option>\n" +
    "                                    </select>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group btn-sign-up\">\n" +
    "                                <button type=\"submit\" ng-disabled=\"frmRegister.$invalid\" class=\"btn btn-default\">SIGN UP</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("release/release.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("release/release.tpl.html",
    "<div class=\"relese-page\">\n" +
    "    <div class=\"text-background\">\n" +
    "        <div class=\"text-container\">\n" +
    "\n" +
    "            <div class=\"title-release\">\n" +
    "                BE READY. WE ARE LAUNCHING SOON\n" +
    "            </div>\n" +
    "            <div class=\"logo-release\">\n" +
    "                <img src=\"assets/images/logo5.png\">\n" +
    "            </div>\n" +
    "            <table style=\"width: 100%\">\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <div class=\"tron\">\n" +
    "                            <span days='' date='{{day.end}}'>&nbsp;</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"text-tron\">\n" +
    "                            Days\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <div class=\"tron\">\n" +
    "                            <span hour='' date='{{day.end}}'>&nbsp;</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"text-tron\">\n" +
    "                            Hours\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <div class=\"tron\">\n" +
    "                            <span minute='' date='{{day.end}}'>&nbsp;</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"text-tron\">\n" +
    "                            Minutes\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <div class=\"tron\">\n" +
    "                            <span seconds='' date='{{day.end}}'>&nbsp;</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"text-tron\">\n" +
    "                            Seconds\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("users/users.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/users.tpl.html",
    "");
}]);
