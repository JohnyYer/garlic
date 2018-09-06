(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _menues_menues_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menues/menues.component */ "./src/app/menues/menues.component.ts");
/* harmony import */ var _dish_detail_dish_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dish-detail/dish-detail.component */ "./src/app/dish-detail/dish-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'dish/:name', component: _dish_detail_dish_detail_component__WEBPACK_IMPORTED_MODULE_4__["DishDetailComponent"] },
    { path: 'menu', component: _menues_menues_component__WEBPACK_IMPORTED_MODULE_3__["MenuesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" [ngClass]=\"{'noSlider': router.url !== '/home'}\">\n  <div class=\"headerNav\">\n    <div class=\"container\">\n      <div class=\"menu__burger\">\n        <span></span>\n      </div>\n      <a routerLink=\"/\" class=\"headerLogo\">\n        <img src=\"assets/img/header-logo.png\" alt=\"\" title=\"\">\n      </a>\n      <ul>\n        <li>\n          <a routerLink=\"/\">\n            главная\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"menu\">\n            меню\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:\">\n            Доставка и оплата\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:\">\n            контакты\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:\">\n            Комплексы\n          </a>\n        </li>\n        <li class=\"mobileView\">\n          <a href=\"\">\n            +1-202-555-0003\n          </a>\n        </li>\n      </ul>\n      <a href=\"\" class=\"headerSearch headerLink\">\n        <img src=\"assets/img/search-ico.png\" alt=\"\">\n      </a>\n      <a href=\"shop.html\" class=\"headerShop headerLink\">\n        <img src=\"assets/img/shop-ico.png\" alt=\"\">\n        <span>0</span>\n      </a>\n      <a href=\"\" class=\"headerPhone headerLink desktopView\">\n        +1-202-555-0003\n      </a>\n    </div>\n  </div>\n  <div class=\"headerSlider\">\n    <div class=\"slide\" style=\"background-image:url('../assets/img/slide.jpg');\">\n      <div class=\"slideTitle\">\n        <span>delivery</span>food\n      </div>\n    </div>\n    <div class=\"slide\" style=\"background-image:url('../assets/img/slide.jpg');\">\n      <div class=\"slideTitle\">\n        <span>delivery</span>food\n      </div>\n    </div>\n    <div class=\"slide\" style=\"background-image:url('../assets/img/slide.jpg');\">\n      <div class=\"slideTitle\">\n        <span>delivery</span>food\n      </div>\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n\n<div class=\"defaultImageSection\">\n  <div class=\"smallImage imageSection backgroundImage\" style=\"background-image:url('assets/img/footer-image1.jpg');\">\n\n  </div>\n  <div class=\"largeImage imageSection backgroundImage\" style=\"background-image:url('assets/img/footer-image2.jpg');\">\n\n  </div>\n</div>\n<div class=\"footer\">\n  <div class=\"container\">\n    <ul class=\"footerNav\">\n      <li><a routerLink=\"/\">Главная</a>\n      <li><a routerLink=\"/menu\">меню</a>\n      <li><a routerLink=\"/\">Доставка и оплата</a>\n      <li><a routerLink=\"/\">контакты</a>\n      <li><a routerLink=\"/menu\">Комплексы</a></li>\n    </ul>\n    <a href=\"\" class=\"footerSocial\">\n      <img src=\"assets/img/fb.png\" alt=\"\">\n    </a>\n    <a href=\"\" class=\"footerSocial\">\n      <img src=\"assets/img/ig.png\" alt=\"\">\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'garlic-front';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-slick */ "./node_modules/ngx-slick/ngx-slick.umd.js");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _menues_menues_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menues/menues.component */ "./src/app/menues/menues.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dish_detail_dish_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dish-detail/dish-detail.component */ "./src/app/dish-detail/dish-detail.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _menues_menues_component__WEBPACK_IMPORTED_MODULE_6__["MenuesComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _dish_detail_dish_detail_component__WEBPACK_IMPORTED_MODULE_8__["DishDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                ngx_slick__WEBPACK_IMPORTED_MODULE_3__["SlickModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dish-detail/dish-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/dish-detail/dish-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"singleItem\">\n  <div class=\"container\">\n    <a href=\"javascript:\" (click)=\"goBack()\" class=\"backButton\">Назад</a>\n    <div class=\"singleProduct storeItem\">\n\n      <ngx-slick class=\"productSlider\">\n      <div class=\"productSlider\">\n          <div ngxSlickItem *ngFor=\"let slide of dish.sliderImages\" [ngStyle]=\"{'background-image': 'url(assets/img' + slide + ')'}\">\n            <img src=\"assets/img/product-mask.png\" />\n          </div>\n      </div>\n      </ngx-slick>\n\n\n      <div class=\"productData storeContent\">\n        <div class=\"storeTitle\">{{ dish.name }}</div>\n        <div class=\"storePrice\">{{ dish.price }} грн.</div>\n        <div class=\"storeInfo\">\n          <div class=\"weight\">250 гр.</div>\n          <div class=\"description\">\n            {{ dish.ingredients }}\n          </div>\n        </div>\n        <!--<div class=\"storeBottom\">\n          <div class=\"storeNum\">\n            <span class=\"minus\"></span>\n            <input type=\"text\" value=\"1\" min=\"0\">\n            <span class=\"plus\"></span>\n          </div>\n          <a href=\"\" class=\"customBtn blueBtn\">в корзину</a>\n        </div>-->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dish-detail/dish-detail.component.scss":
/*!********************************************************!*\
  !*** ./src/app/dish-detail/dish-detail.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slick-slide {\n  background-size: 165%;\n  background-repeat: no-repeat;\n  background-position: center; }\n"

/***/ }),

/***/ "./src/app/dish-detail/dish-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dish-detail/dish-detail.component.ts ***!
  \******************************************************/
/*! exports provided: DishDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishDetailComponent", function() { return DishDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dish_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dish.service */ "./src/app/dish.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DishDetailComponent = /** @class */ (function () {
    function DishDetailComponent(route, location, dishService) {
        this.route = route;
        this.location = location;
        this.dishService = dishService;
    }
    DishDetailComponent.prototype.getDish = function () {
        var _this = this;
        var name = this.route.snapshot.paramMap.get('name');
        this.dishService.getDish(name)
            .subscribe(function (dish) { return _this.dish = dish; });
    };
    DishDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    DishDetailComponent.prototype.ngOnInit = function () {
        this.getDish();
    };
    DishDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dish-detail',
            template: __webpack_require__(/*! ./dish-detail.component.html */ "./src/app/dish-detail/dish-detail.component.html"),
            styles: [__webpack_require__(/*! ./dish-detail.component.scss */ "./src/app/dish-detail/dish-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _dish_service__WEBPACK_IMPORTED_MODULE_3__["DishService"]])
    ], DishDetailComponent);
    return DishDetailComponent;
}());



/***/ }),

/***/ "./src/app/dish.service.ts":
/*!*********************************!*\
  !*** ./src/app/dish.service.ts ***!
  \*********************************/
/*! exports provided: DishService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishService", function() { return DishService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_dishes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-dishes */ "./src/app/mock-dishes.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DishService = /** @class */ (function () {
    function DishService() {
    }
    DishService.prototype.getDishes = function () {
        return _mock_dishes__WEBPACK_IMPORTED_MODULE_1__["DISHES"];
    };
    DishService.prototype.getDish = function (name) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_dishes__WEBPACK_IMPORTED_MODULE_1__["DISHES"].find(function (dish) { return dish.name === name; }));
    };
    DishService.prototype.getSpecialProposal = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_dishes__WEBPACK_IMPORTED_MODULE_1__["DISHES"].filter(function (dish) { return dish.isSpecial; }));
    };
    DishService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DishService);
    return DishService;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"promoSection defaultSection\">\n\n  <ngx-slick class=\"promoSlider\" [config]=\"slideConfig\">\n    <div ngxSlickItem *ngFor=\"let slide of slides\" class=\"promoOuterSlide\">\n      <div class=\"promoSlide\">\n        <div class=\"promoImage backgroundImage\" [ngStyle]=\"{'background-image': 'url(assets/img' + slide.sliderImages[0] + ')'}\">\n          <img src=\"assets/img/promo-mask.png\" alt=\"\" title=\"\">\n        </div>\n        <div class=\"promoContent\" [ngStyle]=\"{'background-image': 'url(assets/img' + slide.sliderImages[1] + ')'}\">\n          <div class=\"promoInner\">\n            <div class=\"promoTitle\">\n              {{ slide.name }}\n            </div>\n            <div class=\"promoText\">\n              {{ slide.ingredients }}\n            </div>\n            <!--<a href=\"\" class=\"promoLink\">\n                Подробнее\n            </a>-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </ngx-slick>\n\n</div>\n<!--<div class=\"container\">\n    <div class=\"moreLink\">\n        <a href=\"\">\n            Посмотреть все акции\n        </a>\n    </div>\n</div>-->\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dish_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dish.service */ "./src/app/dish.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(dishService) {
        this.dishService = dishService;
        this.slideConfig = {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '480px',
            infinite: true,
            prevArrow: '<div class="slick-prev"><button type="button">Назад</button></div>',
            nextArrow: '<div class="slick-next"><button type="button">Вперед</button></div>',
            dots: false,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 1700,
                    settings: {
                        centerPadding: '350px',
                    }
                },
                {
                    breakpoint: 1550,
                    settings: {
                        centerPadding: '300px',
                    }
                },
                {
                    breakpoint: 1420,
                    settings: {
                        centerPadding: '250px',
                    }
                },
                {
                    breakpoint: 1320,
                    settings: {
                        centerPadding: '200px',
                    }
                },
                {
                    breakpoint: 1220,
                    settings: {
                        centerPadding: '150px',
                    }
                },
                {
                    breakpoint: 1120,
                    settings: {
                        centerPadding: '100px',
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        centerPadding: '100px',
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        centerPadding: '0px',
                    }
                },
                {
                    breakpoint: 820,
                    settings: {
                        centerMode: false,
                    }
                }
            ]
        };
    }
    HomeComponent.prototype.getSpecialDishes = function () {
        var _this = this;
        this.dishService.getSpecialProposal().subscribe(function (specialDishes) { return _this.slides = specialDishes; });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getSpecialDishes();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_dish_service__WEBPACK_IMPORTED_MODULE_1__["DishService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/menues/menues.component.html":
/*!**********************************************!*\
  !*** ./src/app/menues/menues.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"complexSection defaultSection largeBottomPadding\">\n  <div class=\"container\">\n    <div class=\"menuSideBar\" [ngClass]=\"{'openSideBar' : openMobileMenu}\">\n      <div class=\"openMenu mobileView\" (click)=\"openMenuTypes()\" [ngClass]=\"{'active' : openMobileMenu}\">меню</div>\n      <div class=\"customTitle\">\n        меню\n      </div>\n      <ul>\n        <li *ngFor=\"let item of menuTypes\">\n          <a [ngClass]=\"{'active' : selectedMenuType.state === item.state}\"\n             (click)=\"onMenuTypeSelect(item)\" href=\"javascript:\">{{ item.name }}</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"menuWrapper\">\n      <div class=\"customTitle\">\n        {{ selectedMenuType.name }}\n      </div>\n      <div class=\"menuItems\">\n        <div class=\"menuItem\" *ngFor=\"let dish of dishes \">\n          <div class=\"storeItem textCenter\">\n            <div class=\"storePhoto backgroundImage\" [ngStyle]=\"{'background-image': 'url(assets/img' + dish.image + ')'}\">\n              <img src=\"assets/img/store-mask.png\" alt=\"\" title=\"\">\n              <div class=\"storeInfo\">\n                <div class=\"tableDiv\">\n                  <div class=\"tableCell\">\n                    {{ dish.ingredients }}\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"storeContent\">\n              <a routerLink=\"/dish/{{ dish.name }}\" class=\"storeTitle\">{{ dish.name }}</a>\n              <div class=\"storePrice\">{{ dish.price }} грн.</div>\n              <div class=\"storeBottom\">\n                <!--<div class=\"storeNum\">\n                  <span class=\"minus\"></span>\n                  <input type=\"text\" value=\"1\" min=\"0\">\n                  <span class=\"plus\"></span>\n                </div>\n                <a href=\"\" class=\"storeBuy\">в корзину</a>-->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n<!--      <div class=\"moreLink\">\n        <a href=\"\">\n          Посмотреть еще\n        </a>\n      </div>-->\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/menues/menues.component.scss":
/*!**********************************************!*\
  !*** ./src/app/menues/menues.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menues/menues.component.ts":
/*!********************************************!*\
  !*** ./src/app/menues/menues.component.ts ***!
  \********************************************/
/*! exports provided: MenuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuesComponent", function() { return MenuesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_menu_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-menu-types */ "./src/app/mock-menu-types.ts");
/* harmony import */ var _dish_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dish.service */ "./src/app/dish.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuesComponent = /** @class */ (function () {
    function MenuesComponent(dishService) {
        this.dishService = dishService;
        this.menuTypes = _mock_menu_types__WEBPACK_IMPORTED_MODULE_1__["MENU_TYPES"];
        this.selectedMenuType = _mock_menu_types__WEBPACK_IMPORTED_MODULE_1__["MENU_TYPES"][0];
        this.openMobileMenu = false;
    }
    MenuesComponent.prototype.onMenuTypeSelect = function (item) {
        this.selectedMenuType = item;
        this.filterMenu();
    };
    MenuesComponent.prototype.filterMenu = function () {
        var _this = this;
        this.dishes = this.dishService.getDishes().filter(function (dish) { return dish.type === _this.selectedMenuType.state; });
    };
    MenuesComponent.prototype.getDishes = function () {
        this.dishes = this.dishService.getDishes();
    };
    MenuesComponent.prototype.openMenuTypes = function () {
        this.openMobileMenu = !this.openMobileMenu;
    };
    MenuesComponent.prototype.ngOnInit = function () {
        this.getDishes();
        this.filterMenu();
    };
    MenuesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menues',
            template: __webpack_require__(/*! ./menues.component.html */ "./src/app/menues/menues.component.html"),
            styles: [__webpack_require__(/*! ./menues.component.scss */ "./src/app/menues/menues.component.scss")]
        }),
        __metadata("design:paramtypes", [_dish_service__WEBPACK_IMPORTED_MODULE_2__["DishService"]])
    ], MenuesComponent);
    return MenuesComponent;
}());



/***/ }),

/***/ "./src/app/mock-dishes.ts":
/*!********************************!*\
  !*** ./src/app/mock-dishes.ts ***!
  \********************************/
/*! exports provided: DISHES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISHES", function() { return DISHES; });
var DISHES = [
    {
        id: 1,
        name: 'Гречневая каша',
        ingredients: 'гречневая крупа / сливочное масло',
        type: 'garnishes', description: '', price: '22',
        image: '/garnish/grechnevaia_kasha/img0039.jpg',
        sliderImages: [
            '/garnish/grechnevaia_kasha/img0039.jpg',
            '/garnish/grechnevaia_kasha/img0040.jpg',
            '/garnish/grechnevaia_kasha/img0041.jpg',
        ], isSpecial: false
    },
    {
        id: 2,
        name: 'Пшеничная каша',
        ingredients: 'Пшеничная крупа / Сливочное масло / соль',
        type: 'garnishes', description: '', price: '22', image: '/garnish/pshenichnaya_kasha/img0064.jpg',
        sliderImages: [
            '/garnish/pshenichnaya_kasha/img0064.jpg',
            '/garnish/pshenichnaya_kasha/img0065.jpg',
            '/garnish/pshenichnaya_kasha/img0066.jpg',
        ], isSpecial: false
    },
    {
        id: 3,
        name: 'Кукурузная каша',
        ingredients: 'кукурузная каша / соль / сливочное масло',
        type: 'garnishes', description: '', price: '22', image: '/garnish/kukuruznaia_kasha/img0050.jpg',
        sliderImages: [
            '/garnish/kukuruznaia_kasha/img0050.jpg',
            '/garnish/kukuruznaia_kasha/img0051.jpg',
            '/garnish/kukuruznaia_kasha/img0052.jpg',
            '/garnish/kukuruznaia_kasha/img0053.jpg',
            '/garnish/kukuruznaia_kasha/img0054.jpg',
            '/garnish/kukuruznaia_kasha/img0055.jpg',
        ], isSpecial: false
    },
    {
        id: 4,
        name: 'Булгур',
        ingredients: 'крупа булгур / сливочное масло / соль',
        type: 'garnishes', description: '', price: '22', image: '/garnish/bulgur/img0058.jpg',
        sliderImages: [
            '/garnish/bulgur/img0058.jpg',
            '/garnish/bulgur/img0059.jpg',
            '/garnish/bulgur/img0060.jpg',
            '/garnish/bulgur/img0061.jpg',
            '/garnish/bulgur/img0062.jpg',
            '/garnish/bulgur/img0063.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Макароны(фарфалле)',
        ingredients: 'макароны / соль / сливочное масло',
        type: 'garnishes', description: '', price: '22', image: '/garnish/makarony_farfalle/img0030.jpg',
        sliderImages: [
            '/garnish/makarony_farfalle/img0030.jpg',
            '/garnish/makarony_farfalle/img0031.jpg',
            '/garnish/makarony_farfalle/img0032.jpg',
            '/garnish/makarony_farfalle/img0033.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Лапша',
        ingredients: 'лапша / соль / сливочное масло',
        type: 'garnishes', description: '', price: '22', image: '/garnish/lapsha/img0083.jpg',
        sliderImages: [
            '/garnish/lapsha/img0083.jpg',
            '/garnish/lapsha/img0084.jpg',
            '/garnish/lapsha/img0085.jpg',
            '/garnish/lapsha/img0086.jpg',
            '/garnish/lapsha/img0087.jpg',
            '/garnish/lapsha/img0088.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Кус-кус с томатами и пореем',
        ingredients: 'крупа кус-кус / сливочное масло / соль /' +
            ' томаты / лук порей / растительное масло',
        type: 'garnishes', description: '', price: '34', image: '/garnish/kus-kus_s_tomatami_i_poreem/img0071.jpg',
        sliderImages: [
            '/garnish/kus-kus_s_tomatami_i_poreem/img0071.jpg',
            '/garnish/kus-kus_s_tomatami_i_poreem/img0072.jpg',
            '/garnish/kus-kus_s_tomatami_i_poreem/img0073.jpg',
            '/garnish/kus-kus_s_tomatami_i_poreem/img0074.jpg',
            '/garnish/kus-kus_s_tomatami_i_poreem/img0075.jpg',
            '/garnish/kus-kus_s_tomatami_i_poreem/img0076.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Рис с овощами',
        ingredients: 'рис / растительное масло / лук / морковка ' +
            '/ зеленый горошек / кукуруза',
        type: 'garnishes', description: '', price: '22',
        image: '/garnish/ris_s_ovoshami/img0077.jpg',
        sliderImages: [
            '/garnish/ris_s_ovoshami/img0077.jpg',
            '/garnish/ris_s_ovoshami/img0078.jpg',
            '/garnish/ris_s_ovoshami/img0079.jpg',
            '/garnish/ris_s_ovoshami/img0080.jpg',
            '/garnish/ris_s_ovoshami/img0081.jpg',
            '/garnish/ris_s_ovoshami/img0082.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Пюре картофельное',
        ingredients: 'картофель / соль / сливочное масло / молоко',
        type: 'garnishes', description: '', price: '22', image: '/garnish/pure_kartofelnoe/img0060.jpg',
        sliderImages: [
            '/garnish/pure_kartofelnoe/img0060.jpg',
            '/garnish/pure_kartofelnoe/img0061.jpg',
            '/garnish/pure_kartofelnoe/img0062.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Картофель печеный',
        ingredients: 'картофель / соль / черный перец / красный перец ' +
            '/ паприка / куркума / растительное масло',
        type: 'garnishes', description: '', price: '22', image: '/garnish/kartofel_pechenyi/img0017.jpg',
        sliderImages: [
            '/garnish/kartofel_pechenyi/img0017.jpg',
            '/garnish/kartofel_pechenyi/img0018.jpg',
            '/garnish/kartofel_pechenyi/img0019.jpg',
            '/garnish/kartofel_pechenyi/img0020.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Рис',
        ingredients: 'рис / соль' +
            'растительное масло', type: 'garnishes', description: '', price: '22', image: '/garnish/ris/img0063.jpg',
        sliderImages: [
            '/garnish/ris/img0063.jpg',
            '/garnish/ris/img0064.jpg',
            '/garnish/ris/img0065.jpg',
            '/garnish/ris/img0066.jpg',
            '/garnish/ris/img0067.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Картофель отварной с зеленью',
        ingredients: 'картофель / соль / растительное масло / петрушка/укроп',
        type: 'garnishes', description: '', price: '22', image: '/garnish/kartofel_otvarnoi_s_zelenyu/img0100.jpg',
        sliderImages: [
            '/garnish/kartofel_otvarnoi_s_zelenyu/img0100.jpg',
            '/garnish/kartofel_otvarnoi_s_zelenyu/img0101.jpg',
            '/garnish/kartofel_otvarnoi_s_zelenyu/img0102.jpg',
            '/garnish/kartofel_otvarnoi_s_zelenyu/img0103.jpg',
            '/garnish/kartofel_otvarnoi_s_zelenyu/img0104.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Фасоль в томатном соусе',
        ingredients: 'фасоль белая / томатная паста / соль / лавровый лист / перец черный/красный',
        type: 'garnishes', description: '', price: '22', image: '/garnish/fasol_v_tomatnom_souse/img0077.jpg',
        sliderImages: [
            '/garnish/fasol_v_tomatnom_souse/img0077.jpg',
            '/garnish/fasol_v_tomatnom_souse/img0078.jpg',
            '/garnish/fasol_v_tomatnom_souse/img0079.jpg',
            '/garnish/fasol_v_tomatnom_souse/img0080.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Тушеная капуста',
        ingredients: 'капуста белокочанная / соль / растительное масло / томатная паста / красный перец',
        type: 'garnishes',
        description: '', price: '22', image: '/garnish/tushenaia_kapusta/img0049.jpg',
        sliderImages: [
            '/garnish/tushenaia_kapusta/img0049.jpg',
            '/garnish/tushenaia_kapusta/img0050.jpg',
            '/garnish/tushenaia_kapusta/img0051.jpg',
            '/garnish/tushenaia_kapusta/img0052.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Куриный суп с лапшой и грибами',
        ingredients: 'куриное филе / соль / черный перец / лук / морковка / грибы шампиньоны / яйцо / сливочное масло / лапша / зелень',
        type: 'first_dishes',
        description: '',
        price: '45',
        image: '/first_dishes/kurinyi_sup_s_lapshoi_i_gribami/img0001.jpg',
        sliderImages: [
            '/first_dishes/kurinyi_sup_s_lapshoi_i_gribami/img0001.jpg',
            '/first_dishes/kurinyi_sup_s_lapshoi_i_gribami/img0002.jpg',
            '/first_dishes/kurinyi_sup_s_lapshoi_i_gribami/img0003.jpg',
            '/first_dishes/kurinyi_sup_s_lapshoi_i_gribami/img0004.jpg',
            '/first_dishes/kurinyi_sup_s_lapshoi_i_gribami/img0005.jpg',
            '/first_dishes/kurinyi_sup_s_lapshoi_i_gribami/img0006.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Финский сливочный суп с лососем',
        ingredients: 'лосось / сливки / плавленый сырок / картофель / стебель сельдерея / лук / морковка / соль/перец',
        type: 'first_dishes',
        description: '',
        price: '56',
        image: '/first_dishes/finskii_slivochnyi_sup_s_lososem/img0007.jpg',
        sliderImages: [
            '/first_dishes/finskii_slivochnyi_sup_s_lososem/img0007.jpg',
            '/first_dishes/finskii_slivochnyi_sup_s_lososem/img0008.jpg',
            '/first_dishes/finskii_slivochnyi_sup_s_lososem/img0009.jpg',
            '/first_dishes/finskii_slivochnyi_sup_s_lososem/img0010.jpg',
            '/first_dishes/finskii_slivochnyi_sup_s_lososem/img0011.jpg',
            '/first_dishes/finskii_slivochnyi_sup_s_lososem/img0012.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Морковный суп с булгуром',
        ingredients: 'морковка / лук / крупа булгур / кардамон / соль / семена льна',
        type: 'first_dishes',
        description: '',
        price: '22',
        image: '/first_dishes/morkovnyi_sup_s_bulgurom/img0013.jpg',
        sliderImages: [
            '/first_dishes/morkovnyi_sup_s_bulgurom/img0013.jpg',
            '/first_dishes/morkovnyi_sup_s_bulgurom/img0014.jpg',
            '/first_dishes/morkovnyi_sup_s_bulgurom/img0015.jpg',
            '/first_dishes/morkovnyi_sup_s_bulgurom/img0016.jpg',
            '/first_dishes/morkovnyi_sup_s_bulgurom/img0017.jpg',
            '/first_dishes/morkovnyi_sup_s_bulgurom/img0018.jpg',
        ], isSpecial: true
    },
    {
        id: 1,
        name: 'Куриный крем-суп',
        ingredients: 'филе куриное / сливки / лук / сливочное масло / пшеничная мука / соевый соус / соль/перец / хлебные гренки',
        type: 'first_dishes',
        description: '',
        price: '45',
        image: '/first_dishes/kurinyi_krem-sup/img0019.jpg',
        sliderImages: [
            '/first_dishes/kurinyi_krem-sup/img0019.jpg',
            '/first_dishes/kurinyi_krem-sup/img0020.jpg',
            '/first_dishes/kurinyi_krem-sup/img0021.jpg',
            '/first_dishes/kurinyi_krem-sup/img0022.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Суп Чили Кон Карне',
        ingredients: 'фасоль красная / говяжий фарш / томаты / болгарский перец / лук / чеснок / перец чили / кинза / соль/перец',
        type: 'first_dishes',
        description: '',
        price: '45',
        image: '/first_dishes/sup_chili_kon_karne/img0150.jpg',
        sliderImages: [
            '/first_dishes/sup_chili_kon_karne/img0150.jpg',
            '/first_dishes/sup_chili_kon_karne/img0151.jpg',
            '/first_dishes/sup_chili_kon_karne/img0152.jpg',
            '/first_dishes/sup_chili_kon_karne/img0153.jpg',
            '/first_dishes/sup_chili_kon_karne/img0154.jpg',
            '/first_dishes/sup_chili_kon_karne/img0155.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Чечевичный суп с беконом',
        ingredients: 'чечевица / бекон / сливки / лук / морковь / чеснок / соль/перец',
        type: 'first_dishes',
        description: '',
        price: '40',
        image: '/first_dishes/chechevichnyi_sup_s_bekonom/img0156.jpg',
        sliderImages: [
            '/first_dishes/chechevichnyi_sup_s_bekonom/img0156.jpg',
            '/first_dishes/chechevichnyi_sup_s_bekonom/img0157.jpg',
            '/first_dishes/chechevichnyi_sup_s_bekonom/img0158.jpg',
            '/first_dishes/chechevichnyi_sup_s_bekonom/img0159.jpg',
            '/first_dishes/chechevichnyi_sup_s_bekonom/img0160.jpg',
            '/first_dishes/chechevichnyi_sup_s_bekonom/img0161.jpg',
            '/first_dishes/chechevichnyi_sup_s_bekonom/img0162.jpg',
            '/first_dishes/chechevichnyi_sup_s_bekonom/img0163.jpg',
            '/first_dishes/chechevichnyi_sup_s_bekonom/img0164.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Гороховый суп с курицей',
        ingredients: 'колотый горох / куриное филе / картофель / лук / чеснок / лук порей / имбирь / куркума / кориандр / зира / соль/перец',
        type: 'first_dishes',
        description: '',
        price: '34',
        image: '/first_dishes/gorohovyi_sup_s_kuritsei/img0024.jpg',
        sliderImages: [
            '/first_dishes/gorohovyi_sup_s_kuritsei/img0024.jpg',
            '/first_dishes/gorohovyi_sup_s_kuritsei/img0025.jpg',
            '/first_dishes/gorohovyi_sup_s_kuritsei/img0026.jpg',
            '/first_dishes/gorohovyi_sup_s_kuritsei/img0027.jpg',
            '/first_dishes/gorohovyi_sup_s_kuritsei/img0028.jpg',
            '/first_dishes/gorohovyi_sup_s_kuritsei/img0029.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Сырный суп',
        ingredients: 'Сырок сливочный / лук / морковка / сливочное масло / пшеничная мука / соль/перец / куркума / орегано',
        type: 'first_dishes',
        description: '',
        price: '34',
        image: '/first_dishes/syrnyi_sup/img0097.jpg',
        sliderImages: [
            '/first_dishes/syrnyi_sup/img0097.jpg',
            '/first_dishes/syrnyi_sup/img0098.jpg',
            '/first_dishes/syrnyi_sup/img0099.jpg',
            '/first_dishes/syrnyi_sup/img0100.jpg',
            '/first_dishes/syrnyi_sup/img0101.jpg',
            '/first_dishes/syrnyi_sup/img0102.jpg',
            '/first_dishes/syrnyi_sup/img0103.jpg',
            '/first_dishes/syrnyi_sup/img0104.jpg',
            '/first_dishes/syrnyi_sup/img0105.jpg',
            '/first_dishes/syrnyi_sup/img0106.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Овощной крем-суп',
        ingredients: 'капуста цветная / капуста брокколи / брюссельская капуста / лук / морковка / соль/перец / сливки',
        type: 'first_dishes',
        description: '',
        price: '40',
        image: '/first_dishes/ovoshnoi_krem-sup/img0035.jpg', sliderImages: [
            '/first_dishes/ovoshnoi_krem-sup/img0035.jpg',
            '/first_dishes/ovoshnoi_krem-sup/img0036.jpg',
            '/first_dishes/ovoshnoi_krem-sup/img0037.jpg',
            '/first_dishes/ovoshnoi_krem-sup/img0038.jpg',
            '/first_dishes/ovoshnoi_krem-sup/img0039.jpg',
            '/first_dishes/ovoshnoi_krem-sup/img0040.jpg',
            '/first_dishes/ovoshnoi_krem-sup/img0041.jpg',
            '/first_dishes/ovoshnoi_krem-sup/img0042.jpg',
            '/first_dishes/ovoshnoi_krem-sup/img0043.jpg',
            '/first_dishes/ovoshnoi_krem-sup/img0044.jpg',
            '/first_dishes/ovoshnoi_krem-sup/img0045.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Грибной крем-суп',
        ingredients: 'шампиньоны / лук / морковка / сливки / соль/перец / картофель / сливочное масло / пшеничная мука',
        type: 'first_dishes',
        description: '',
        price: '45',
        image: '/first_dishes/gribnoi_krem-sup/img0046.jpg',
        sliderImages: [
            '/first_dishes/gribnoi_krem-sup/img0046.jpg',
            '/first_dishes/gribnoi_krem-sup/img0047.jpg',
            '/first_dishes/gribnoi_krem-sup/img0048.jpg',
            '/first_dishes/gribnoi_krem-sup/img0049.jpg',
            '/first_dishes/gribnoi_krem-sup/img0050.jpg',
            '/first_dishes/gribnoi_krem-sup/img0051.jpg',
            '/first_dishes/gribnoi_krem-sup/img0052.jpg',
            '/first_dishes/gribnoi_krem-sup/img0053.jpg',
            '/first_dishes/gribnoi_krem-sup/img0054.jpg',
            '/first_dishes/gribnoi_krem-sup/img0055.jpg',
            '/first_dishes/gribnoi_krem-sup/img0056.jpg',
            '/first_dishes/gribnoi_krem-sup/img0057.jpg',
            '/first_dishes/gribnoi_krem-sup/img0058.jpg',
            '/first_dishes/gribnoi_krem-sup/img0059.jpg',
            '/first_dishes/gribnoi_krem-sup/img0060.jpg',
            '/first_dishes/gribnoi_krem-sup/img0061.jpg',
            '/first_dishes/gribnoi_krem-sup/img0062.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Суп Харчо',
        ingredients: 'говядина / рис / томаты / кавказские специи / кориандр / соль/перец / кинза',
        type: 'first_dishes', description: '', price: '45',
        image: '/first_dishes/sup_harcho/img0139.jpg',
        sliderImages: [
            '/first_dishes/sup_harcho/img0139.jpg',
            '/first_dishes/sup_harcho/img0140.jpg',
            '/first_dishes/sup_harcho/img0141.jpg',
            '/first_dishes/sup_harcho/img0142.jpg',
            '/first_dishes/sup_harcho/img0143.jpg',
            '/first_dishes/sup_harcho/img0144.jpg',
            '/first_dishes/sup_harcho/img0145.jpg',
            '/first_dishes/sup_harcho/img0146.jpg',
            '/first_dishes/sup_harcho/img0147.jpg',
            '/first_dishes/sup_harcho/img0148.jpg',
            '/first_dishes/sup_harcho/img0149.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Солянка мясная',
        ingredients: 'Копченое мясо / куриное филе / говядина / соленый огурец / томатная паста / лук / морковка / соль/перец / лимон / оливки',
        type: 'first_dishes', description: '', price: '50',
        image: '/first_dishes/solianka_miasnaya/img0118.jpg',
        sliderImages: [
            '/first_dishes/solianka_miasnaya/img0118.jpg',
            '/first_dishes/solianka_miasnaya/img0119.jpg',
            '/first_dishes/solianka_miasnaya/img0120.jpg',
            '/first_dishes/solianka_miasnaya/img0121.jpg',
            '/first_dishes/solianka_miasnaya/img0122.jpg',
            '/first_dishes/solianka_miasnaya/img0123.jpg',
            '/first_dishes/solianka_miasnaya/img0124.jpg',
            '/first_dishes/solianka_miasnaya/img0125.jpg',
            '/first_dishes/solianka_miasnaya/img0126.jpg',
            '/first_dishes/solianka_miasnaya/img0127.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Красный борщ',
        ingredients: 'свекла / лук / морковка / капуста белокочанная / томатная паста / картофель / соль/перец / лавровый лист',
        type: 'first_dishes', description: '', price: '22',
        image: '/first_dishes/krasnyi_borshch/img0108.jpg',
        sliderImages: [
            '/first_dishes/krasnyi_borshch/img0108.jpg',
            '/first_dishes/krasnyi_borshch/img0109.jpg',
            '/first_dishes/krasnyi_borshch/img0110.jpg',
            '/first_dishes/krasnyi_borshch/img0111.jpg',
            '/first_dishes/krasnyi_borshch/img0112.jpg',
            '/first_dishes/krasnyi_borshch/img0113.jpg',
            '/first_dishes/krasnyi_borshch/img0114.jpg',
            '/first_dishes/krasnyi_borshch/img0115.jpg',
            '/first_dishes/krasnyi_borshch/img0116.jpg',
            '/first_dishes/krasnyi_borshch/img0117.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Зеленый борщ',
        ingredients: 'картофель / рис / яйцо / лук / морковка / щавель / шпинат / соль/перец',
        type: 'first_dishes', description: '', price: '34',
        image: '/first_dishes/zelenyi_borshch/img0128.jpg',
        sliderImages: [
            '/first_dishes/zelenyi_borshch/img0128.jpg',
            '/first_dishes/zelenyi_borshch/img0129.jpg',
            '/first_dishes/zelenyi_borshch/img0130.jpg',
            '/first_dishes/zelenyi_borshch/img0131.jpg',
            '/first_dishes/zelenyi_borshch/img0132.jpg',
            '/first_dishes/zelenyi_borshch/img0133.jpg',
            '/first_dishes/zelenyi_borshch/img0134.jpg',
            '/first_dishes/zelenyi_borshch/img0135.jpg',
            '/first_dishes/zelenyi_borshch/img0136.jpg',
            '/first_dishes/zelenyi_borshch/img0137.jpg',
            '/first_dishes/zelenyi_borshch/img0138.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Бульон с фрикадельками',
        ingredients: 'куриный бульон / свино говяжий фарш / лук / морковка / соль/перец / зелень',
        type: 'first_dishes', description: '', price: '34',
        image: '/first_dishes/bulion_s_frikadelkami/img0063.jpg',
        sliderImages: [
            '/first_dishes/bulion_s_frikadelkami/img0063.jpg',
            '/first_dishes/bulion_s_frikadelkami/img0064.jpg',
            '/first_dishes/bulion_s_frikadelkami/img0065.jpg',
            '/first_dishes/bulion_s_frikadelkami/img0066.jpg',
            '/first_dishes/bulion_s_frikadelkami/img0067.jpg',
            '/first_dishes/bulion_s_frikadelkami/img0068.jpg',
            '/first_dishes/bulion_s_frikadelkami/img0069.jpg',
            '/first_dishes/bulion_s_frikadelkami/img0070.jpg',
            '/first_dishes/bulion_s_frikadelkami/img0071.jpg',
            '/first_dishes/bulion_s_frikadelkami/img0072.jpg',
            '/first_dishes/bulion_s_frikadelkami/img0073.jpg',
            '/first_dishes/bulion_s_frikadelkami/img0074.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Окрошка на кефире',
        ingredients: 'кефир / минеральная вода / копченое мясо / огурец / горчица / соль/перец / укроп',
        type: 'first_dishes', description: '', price: '45',
        image: '/first_dishes/okroshka_na_kefire/img0165.jpg',
        sliderImages: [
            '/first_dishes/okroshka_na_kefire/img0165.jpg',
            '/first_dishes/okroshka_na_kefire/img0166.jpg',
            '/first_dishes/okroshka_na_kefire/img0167.jpg',
            '/first_dishes/okroshka_na_kefire/img0168.jpg',
            '/first_dishes/okroshka_na_kefire/img0169.jpg',
            '/first_dishes/okroshka_na_kefire/img0170.jpg',
            '/first_dishes/okroshka_na_kefire/img0171.jpg',
            '/first_dishes/okroshka_na_kefire/img0172.jpg',
            '/first_dishes/okroshka_na_kefire/img0173.jpg',
            '/first_dishes/okroshka_na_kefire/img0174.jpg',
            '/first_dishes/okroshka_na_kefire/img0175.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Салат из белокочанной капусты',
        ingredients: 'капуста белокочанная / морковка / соль/сахар / уксус / растительное масло',
        type: 'salads', description: '', price: '22',
        image: '/salads/salat_iz_belokochannoi_kapusty/img0010.jpg',
        sliderImages: [
            '/salads/salat_iz_belokochannoi_kapusty/img0010.jpg',
            '/salads/salat_iz_belokochannoi_kapusty/img0011.jpg',
            '/salads/salat_iz_belokochannoi_kapusty/img0012.jpg',
            '/salads/salat_iz_belokochannoi_kapusty/img0013.jpg',
            '/salads/salat_iz_belokochannoi_kapusty/img0014.jpg',
            '/salads/salat_iz_belokochannoi_kapusty/img0015.jpg',
            '/salads/salat_iz_belokochannoi_kapusty/img0016.jpg',
            '/salads/salat_iz_belokochannoi_kapusty/img0017.jpg',
            '/salads/salat_iz_belokochannoi_kapusty/img0018.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Вегетарианский',
        ingredients: 'свекла / морковка/ корень сельдерея / лук / кориандр / соль/перец / растительное масло',
        type: 'salads', description: '', price: '28',
        image: '/salads/vegetarianskii/img0069.jpg',
        sliderImages: [
            '/salads/vegetarianskii/img0069.jpg',
            '/salads/vegetarianskii/img0070.jpg',
            '/salads/vegetarianskii/img0071.jpg',
            '/salads/vegetarianskii/img0072.jpg',
            '/salads/vegetarianskii/img0073.jpg',
            '/salads/vegetarianskii/img0074.jpg',
            '/salads/vegetarianskii/img0080.jpg',
            '/salads/vegetarianskii/img0081.jpg',
            '/salads/vegetarianskii/img0082.jpg',
            '/salads/vegetarianskii/img0083.jpg',
            '/salads/vegetarianskii/img0084.jpg',
            '/salads/vegetarianskii/img0085.jpg',
            '/salads/vegetarianskii/img0086.jpg',
            '/salads/vegetarianskii/img0087.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Вальдорф',
        ingredients: 'корень сельдерея / яблоко / куриное филе / пекинская капуста / сметана / майонез / соль/перец / кунжут',
        type: 'salads', description: '', price: '40',
        image: '/salads/valdorf/img0001.jpg',
        sliderImages: [
            '/salads/valdorf/img0001.jpg',
            '/salads/valdorf/img0002.jpg',
            '/salads/valdorf/img0003.jpg',
            '/salads/valdorf/img0004.jpg',
            '/salads/valdorf/img0005.jpg',
            '/salads/valdorf/img0006.jpg',
            '/salads/valdorf/img0007.jpg',
            '/salads/valdorf/img0008.jpg',
            '/salads/valdorf/img0009.jpg',
            '/salads/valdorf/img0010.jpg',
            '/salads/valdorf/img0011.jpg',
            '/salads/valdorf/img0012.jpg',
            '/salads/valdorf/img0013.jpg',
            '/salads/valdorf/img0014.jpg',
            '/salads/valdorf/img0015.jpg',
            '/salads/valdorf/img0016.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Сырный',
        ingredients: 'стебель сельдерея / яблоко / твердый сыр / майонез / соль/перец',
        type: 'salads', description: '', price: '40',
        image: '/salads/syrnyi/img0017.jpg',
        sliderImages: [
            '/salads/syrnyi/img0017.jpg',
            '/salads/syrnyi/img0018.jpg',
            '/salads/syrnyi/img0019.jpg',
            '/salads/syrnyi/img0020.jpg',
            '/salads/syrnyi/img0021.jpg',
            '/salads/syrnyi/img0022.jpg',
            '/salads/syrnyi/img0023.jpg',
            '/salads/syrnyi/img0024.jpg',
            '/salads/syrnyi/img0025.jpg',
            '/salads/syrnyi/img0026.jpg',
            '/salads/syrnyi/img0027.jpg',
            '/salads/syrnyi/img0028.jpg',
            '/salads/syrnyi/img0029.jpg',
            '/salads/syrnyi/img0030.jpg',
            '/salads/syrnyi/img0031.jpg',
            '/salads/syrnyi/img0032.jpg',
            '/salads/syrnyi/img0033.jpg',
            '/salads/syrnyi/img0034.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Овощной',
        ingredients: 'помидор / огурец / перец болгарский / маринованный лук / соль / растительное масло',
        type: 'salads', description: '', price: '28',
        image: '/salads/ovoshnoi/img0035.jpg',
        sliderImages: [
            '/salads/ovoshnoi/img0035.jpg',
            '/salads/ovoshnoi/img0036.jpg',
            '/salads/ovoshnoi/img0037.jpg',
            '/salads/ovoshnoi/img0038.jpg',
            '/salads/ovoshnoi/img0039.jpg',
            '/salads/ovoshnoi/img0040.jpg',
            '/salads/ovoshnoi/img0041.jpg',
            '/salads/ovoshnoi/img0042.jpg',
            '/salads/ovoshnoi/img0050.jpg',
            '/salads/ovoshnoi/img0051.jpg',
            '/salads/ovoshnoi/img0052.jpg',
            '/salads/ovoshnoi/img0053.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Греческий',
        ingredients: 'помидор / огурец / перец болгарский / маринованный лук / сыр фета / оливки / растительное маслосоевый соус / горчица',
        type: 'salads', description: '', price: '34',
        image: '/salads/grecheskii/img0043.jpg',
        sliderImages: [
            '/salads/grecheskii/img0043.jpg',
            '/salads/grecheskii/img0044.jpg',
            '/salads/grecheskii/img0045.jpg',
            '/salads/grecheskii/img0046.jpg',
            '/salads/grecheskii/img0047.jpg',
            '/salads/grecheskii/img0048.jpg',
            '/salads/grecheskii/img0049.jpg',
            '/salads/grecheskii/img0059.jpg',
            '/salads/grecheskii/img0060.jpg',
            '/salads/grecheskii/img0061.jpg',
            '/salads/grecheskii/img0062.jpg',
            '/salads/grecheskii/img0063.jpg',
        ], isSpecial: true
    },
    {
        id: 1,
        name: 'Томаты с моцареллой',
        ingredients: 'помидор черри / моцарелла мини / соус Песто', type: 'salads', description: '',
        price: '40',
        image: '/salads/tomaty_s_mocarelloi/img0098.jpg',
        sliderImages: [
            '/salads/tomaty_s_mocarelloi/img0098.jpg',
            '/salads/tomaty_s_mocarelloi/img0099.jpg',
            '/salads/tomaty_s_mocarelloi/img0100.jpg',
            '/salads/tomaty_s_mocarelloi/img0101.jpg',
            '/salads/tomaty_s_mocarelloi/img0102.jpg',
            '/salads/tomaty_s_mocarelloi/img0103.jpg',
            '/salads/tomaty_s_mocarelloi/img0104.jpg',
            '/salads/tomaty_s_mocarelloi/img0105.jpg',
            '/salads/tomaty_s_mocarelloi/img0106.jpg',
            '/salads/tomaty_s_mocarelloi/img0107.jpg',
            '/salads/tomaty_s_mocarelloi/img0108.jpg',
            '/salads/tomaty_s_mocarelloi/img0109.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Баклажановый с базиликом',
        ingredients: 'баклажан / помидор / базилик / соль / растительное масло',
        type: 'salads', description: '', price: '28',
        image: '/salads/baklazhanovyi/img0064.jpg',
        sliderImages: [
            '/salads/baklazhanovyi/img0064.jpg',
            '/salads/baklazhanovyi/img0065.jpg',
            '/salads/baklazhanovyi/img0066.jpg',
            '/salads/baklazhanovyi/img0067.jpg',
            '/salads/baklazhanovyi/img0068.jpg',
            '/salads/baklazhanovyi/img0075.jpg',
            '/salads/baklazhanovyi/img0076.jpg',
            '/salads/baklazhanovyi/img0077.jpg',
            '/salads/baklazhanovyi/img0078.jpg',
            '/salads/baklazhanovyi/img0079.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Салат легкий',
        ingredients: 'салатный микс / мякгий сыр / растительное масло / соевый соус / горчица / семена льна / яйцо',
        type: 'salads', description: '', price: '28',
        image: '/salads/legkii_s_krem-syrom/img0088.jpg',
        sliderImages: [
            '/salads/legkii_s_krem-syrom/img0088.jpg',
            '/salads/legkii_s_krem-syrom/img0089.jpg',
            '/salads/legkii_s_krem-syrom/img0090.jpg',
            '/salads/legkii_s_krem-syrom/img0091.jpg',
            '/salads/legkii_s_krem-syrom/img0092.jpg',
            '/salads/legkii_s_krem-syrom/img0093.jpg',
            '/salads/legkii_s_krem-syrom/img0094.jpg',
            '/salads/legkii_s_krem-syrom/img0095.jpg',
            '/salads/legkii_s_krem-syrom/img0096.jpg',
            '/salads/legkii_s_krem-syrom/img0097.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Корейский с курицей',
        ingredients: 'морковка / спаржевая фасоль / шампиньоны / оливки / соль / масло растительное / перец',
        type: 'salads', description: '', price: '40',
        image: '/salads/koreiskii/img0110.jpg',
        sliderImages: [
            '/salads/koreiskii/img0110.jpg',
            '/salads/koreiskii/img0111.jpg',
            '/salads/koreiskii/img0112.jpg',
            '/salads/koreiskii/img0113.jpg',
            '/salads/koreiskii/img0114.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Салат из Пекинской капусты',
        ingredients: 'пекинская капуста / помидор / огурец / растительное масло / соль / горчица / базилик / соевый соус',
        type: 'salads', description: '', price: '28',
        image: '/salads/salat_iz_pekinskoi_kapusty/img0054.jpg',
        sliderImages: [
            '/salads/salat_iz_pekinskoi_kapusty/img0054.jpg',
            '/salads/salat_iz_pekinskoi_kapusty/img0055.jpg',
            '/salads/salat_iz_pekinskoi_kapusty/img0056.jpg',
            '/salads/salat_iz_pekinskoi_kapusty/img0057.jpg',
            '/salads/salat_iz_pekinskoi_kapusty/img0058.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Блинный',
        ingredients: 'копченое мясо / помидор / жареные шампиньоны / майонез / блины / соль/перец',
        type: 'salads', description: '', price: '40',
        image: '/salads/blinnyi/img0144.jpg',
        sliderImages: [
            '/salads/blinnyi/img0144.jpg',
            '/salads/blinnyi/img0145.jpg',
            '/salads/blinnyi/img0146.jpg',
            '/salads/blinnyi/img0147.jpg',
            '/salads/blinnyi/img0148.jpg',
            '/salads/blinnyi/img0149.jpg',
            '/salads/blinnyi/img0150.jpg',
            '/salads/blinnyi/img0151.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Салат с рукколой',
        ingredients: 'помидор / руккола / брынза / растительное масло / горчица / соевый соус / кунжут',
        type: 'salads', description: '', price: '34',
        image: '/salads/salat_s_rukkoloi/img0115.jpg',
        sliderImages: [
            '/salads/salat_s_rukkoloi/img0116.jpg',
            '/salads/salat_s_rukkoloi/img0117.jpg',
            '/salads/salat_s_rukkoloi/img0118.jpg',
            '/salads/salat_s_rukkoloi/img0119.jpg',
            '/salads/salat_s_rukkoloi/img0120.jpg',
            '/salads/salat_s_rukkoloi/img0126.jpg',
            '/salads/salat_s_rukkoloi/img0127.jpg',
            '/salads/salat_s_rukkoloi/img0128.jpg',
            '/salads/salat_s_rukkoloi/img0129.jpg',
            '/salads/salat_s_rukkoloi/img0120.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Икра баклажанная',
        ingredients: 'Баклажаны / болгарский перец / помидор / растительное масло / соль/перец / уксус / чеснок',
        type: 'salads', description: '', price: '34',
        image: '/salads/ikra_baklazhannaia/img0121.jpg',
        sliderImages: [
            '/salads/ikra_baklazhannaia/img0121.jpg',
            '/salads/ikra_baklazhannaia/img0122.jpg',
            '/salads/ikra_baklazhannaia/img0123.jpg',
            '/salads/ikra_baklazhannaia/img0124.jpg',
            '/salads/ikra_baklazhannaia/img0125.jpg',
            '/salads/ikra_baklazhannaia/img0131.jpg',
            '/salads/ikra_baklazhannaia/img0132.jpg',
            '/salads/ikra_baklazhannaia/img0133.jpg',
            '/salads/ikra_baklazhannaia/img0134.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Овощной сэндвич',
        ingredients: 'кабачок / помидор / твердый сыр / майонез / соль/перец / зелень',
        type: 'salads', description: '', price: '28',
        image: '/salads/ovoshnoi_sendvich/img0152.jpg',
        sliderImages: [
            '/salads/ovoshnoi_sendvich/img0152.jpg',
            '/salads/ovoshnoi_sendvich/img0153.jpg',
            '/salads/ovoshnoi_sendvich/img0154.jpg',
            '/salads/ovoshnoi_sendvich/img0155.jpg',
            '/salads/ovoshnoi_sendvich/img0156.jpg',
            '/salads/ovoshnoi_sendvich/img0157.jpg',
            '/salads/ovoshnoi_sendvich/img0158.jpg',
            '/salads/ovoshnoi_sendvich/img0159.jpg',
            '/salads/ovoshnoi_sendvich/img0160.jpg',
            '/salads/ovoshnoi_sendvich/img0161.jpg',
            '/salads/ovoshnoi_sendvich/img0162.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Рулет из баклажанов с томатами',
        ingredients: 'баклажан / помидор / чеснок / растительное масло / соль/перец / зелень',
        type: 'salads', description: '', price: '28',
        image: '/salads/rulet_iz_baklazhanov_s_tomatami/img0163.jpg',
        sliderImages: [
            '/salads/rulet_iz_baklazhanov_s_tomatami/img0163.jpg',
            '/salads/rulet_iz_baklazhanov_s_tomatami/img0164.jpg',
            '/salads/rulet_iz_baklazhanov_s_tomatami/img0165.jpg',
            '/salads/rulet_iz_baklazhanov_s_tomatami/img0166.jpg',
            '/salads/rulet_iz_baklazhanov_s_tomatami/img0167.jpg',
            '/salads/rulet_iz_baklazhanov_s_tomatami/img0168.jpg',
            '/salads/rulet_iz_baklazhanov_s_tomatami/img0169.jpg',
            '/salads/rulet_iz_baklazhanov_s_tomatami/img0170.jpg',
            '/salads/rulet_iz_baklazhanov_s_tomatami/img0171.jpg',
            '/salads/rulet_iz_baklazhanov_s_tomatami/img0172.jpg',
            '/salads/rulet_iz_baklazhanov_s_tomatami/img0173.jpg',
            '/salads/rulet_iz_baklazhanov_s_tomatami/img0174.jpg',
            '/salads/rulet_iz_baklazhanov_s_tomatami/img0175.jpg',
            '/salads/rulet_iz_baklazhanov_s_tomatami/img0176.jpg',
            '/salads/rulet_iz_baklazhanov_s_tomatami/img0177.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Рулет из баклажанов с сырно-ореховой начинкой',
        ingredients: 'баклажан / грецкий орех / крем-сыр / соль/перец / растительное масло  / зелень',
        type: 'salads', description: '', price: '34',
        image: '/salads/rulet_iz_baklazhanov_s_syrno-orehovoi_nachinkoi/img0178.jpg',
        sliderImages: [
            '/salads/rulet_iz_baklazhanov_s_syrno-orehovoi_nachinkoi/img0178.jpg',
            '/salads/rulet_iz_baklazhanov_s_syrno-orehovoi_nachinkoi/img0179.jpg',
            '/salads/rulet_iz_baklazhanov_s_syrno-orehovoi_nachinkoi/img0180.jpg',
            '/salads/rulet_iz_baklazhanov_s_syrno-orehovoi_nachinkoi/img0181.jpg',
            '/salads/rulet_iz_baklazhanov_s_syrno-orehovoi_nachinkoi/img0182.jpg',
            '/salads/rulet_iz_baklazhanov_s_syrno-orehovoi_nachinkoi/img0183.jpg',
            '/salads/rulet_iz_baklazhanov_s_syrno-orehovoi_nachinkoi/img0184.jpg',
            '/salads/rulet_iz_baklazhanov_s_syrno-orehovoi_nachinkoi/img0185.jpg',
            '/salads/rulet_iz_baklazhanov_s_syrno-orehovoi_nachinkoi/img0186.jpg',
            '/salads/rulet_iz_baklazhanov_s_syrno-orehovoi_nachinkoi/img0187.jpg',
            '/salads/rulet_iz_baklazhanov_s_syrno-orehovoi_nachinkoi/img0188.jpg',
            '/salads/rulet_iz_baklazhanov_s_syrno-orehovoi_nachinkoi/img0189.jpg',
            '/salads/rulet_iz_baklazhanov_s_syrno-orehovoi_nachinkoi/img0190.jpg',
            '/salads/rulet_iz_baklazhanov_s_syrno-orehovoi_nachinkoi/img0191.jpg',
            '/salads/rulet_iz_baklazhanov_s_syrno-orehovoi_nachinkoi/img0192.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Цезарь',
        ingredients: 'салатный микс / куриное филе / куриное яйцо / твердый сыр / растительное масло / соль/перец / орегано / сухарики',
        type: 'salads', description: '', price: '40',
        image: '/salads/cezar/img0135.jpg',
        sliderImages: [
            '/salads/cezar/img0135.jpg',
            '/salads/cezar/img0136.jpg',
            '/salads/cezar/img0137.jpg',
            '/salads/cezar/img0138.jpg',
            '/salads/cezar/img0139.jpg',
            '/salads/cezar/img0140.jpg',
            '/salads/cezar/img0141.jpg',
            '/salads/cezar/img0142.jpg',
            '/salads/cezar/img0143.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Куриная отбивная',
        ingredients: 'филе куриное / пшеничная мука / куриное яйцо / соль/перец',
        type: 'main_dishes', description: '', price: '45',
        image: '/main_dishes/chicken/kurinaia_otbivnaia/img0001.jpg',
        sliderImages: [
            '/main_dishes/chicken/kurinaia_otbivnaia/img0001 2.jpg',
            '/main_dishes/chicken/kurinaia_otbivnaia/img0002 2.jpg',
            '/main_dishes/chicken/kurinaia_otbivnaia/img0003 2.jpg',
            '/main_dishes/chicken/kurinaia_otbivnaia/img0004 2.jpg',
            '/main_dishes/chicken/kurinaia_otbivnaia/img0005.jpg',
            '/main_dishes/chicken/kurinaia_otbivnaia/img0006.jpg',
            '/main_dishes/chicken/kurinaia_otbivnaia/img0007.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Куриная отбивная с грибами под сыром',
        ingredients: 'филе куриное / пшеничная мука / куриное яйцо / соль/перец / грибы / твердый сыр',
        type: 'main_dishes', description: '', price: '50',
        image: '/main_dishes/chicken/kurinaia_otbivnaia_s_gribami_pod_syrom/img0013.jpg',
        sliderImages: [
            '/main_dishes/chicken/kurinaia_otbivnaia_s_gribami_pod_syrom/img0013.jpg',
            '/main_dishes/chicken/kurinaia_otbivnaia_s_gribami_pod_syrom/img0014.jpg',
            '/main_dishes/chicken/kurinaia_otbivnaia_s_gribami_pod_syrom/img0015.jpg',
            '/main_dishes/chicken/kurinaia_otbivnaia_s_gribami_pod_syrom/img0016.jpg',
            '/main_dishes/chicken/kurinaia_otbivnaia_s_gribami_pod_syrom/img0026.jpg',
            '/main_dishes/chicken/kurinaia_otbivnaia_s_gribami_pod_syrom/img0027.jpg',
            '/main_dishes/chicken/kurinaia_otbivnaia_s_gribami_pod_syrom/img0028.jpg',
            '/main_dishes/chicken/kurinaia_otbivnaia_s_gribami_pod_syrom/img0029.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Куриная отбивная с ананасом под сыром',
        ingredients: 'филе куриное / пшеничная мука / куриное яйцо / соль/перец / ананас / твердый сыр',
        type: 'main_dishes', description: '', price: '50',
        image: '/main_dishes/chicken/kurinaia_otbivnaia_s_ananasom_pod_syrom/img0034.jpg',
        sliderImages: [
            '/main_dishes/chicken/kurinaia_otbivnaia_s_ananasom_pod_syrom/img0034.jpg',
            '/main_dishes/chicken/kurinaia_otbivnaia_s_ananasom_pod_syrom/img0035.jpg',
            '/main_dishes/chicken/kurinaia_otbivnaia_s_ananasom_pod_syrom/img0036.jpg',
            '/main_dishes/chicken/kurinaia_otbivnaia_s_ananasom_pod_syrom/img0037.jpg',
            '/main_dishes/chicken/kurinaia_otbivnaia_s_ananasom_pod_syrom/img0038.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Курица с грибами в сливочном соусе',
        ingredients: 'куриное филе / шампиньоны / сливки / карри / соль/перец',
        type: 'main_dishes', description: '', price: '50',
        image: '/main_dishes/chicken/Kuritsa_s_gribami_v_slivochnom_souse/img0106.jpg',
        sliderImages: [
            '/main_dishes/chicken/Kuritsa_s_gribami_v_slivochnom_souse/img0106.jpg',
            '/main_dishes/chicken/Kuritsa_s_gribami_v_slivochnom_souse/img0107.jpg',
            '/main_dishes/chicken/Kuritsa_s_gribami_v_slivochnom_souse/img0108.jpg',
            '/main_dishes/chicken/Kuritsa_s_gribami_v_slivochnom_souse/img0109.jpg',
            '/main_dishes/chicken/Kuritsa_s_gribami_v_slivochnom_souse/img0110.jpg',
            '/main_dishes/chicken/Kuritsa_s_gribami_v_slivochnom_souse/img0111.jpg',
            '/main_dishes/chicken/Kuritsa_s_gribami_v_slivochnom_souse/img0112.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Куриная ножка с кунжутом',
        ingredients: 'четверть куриная / соль/специи / кунжут',
        type: 'main_dishes', description: '', price: '45',
        image: '/main_dishes/chicken/kurinaia_nozhka_s_kunzhutom/img0039.jpg',
        sliderImages: [
            '/main_dishes/chicken/kurinaia_nozhka_s_kunzhutom/img0039.jpg',
            '/main_dishes/chicken/kurinaia_nozhka_s_kunzhutom/img0040.jpg',
            '/main_dishes/chicken/kurinaia_nozhka_s_kunzhutom/img0041.jpg',
            '/main_dishes/chicken/kurinaia_nozhka_s_kunzhutom/img0042.jpg',
            '/main_dishes/chicken/kurinaia_nozhka_s_kunzhutom/img0043.jpg',
            '/main_dishes/chicken/kurinaia_nozhka_s_kunzhutom/img0044.jpg',
            '/main_dishes/chicken/kurinaia_nozhka_s_kunzhutom/img0113.jpg',
            '/main_dishes/chicken/kurinaia_nozhka_s_kunzhutom/img0114.jpg',
            '/main_dishes/chicken/kurinaia_nozhka_s_kunzhutom/img0115.jpg',
            '/main_dishes/chicken/kurinaia_nozhka_s_kunzhutom/img0116.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Крылья куриные в медовом соусе',
        ingredients: 'Куриные крылья  / мед / соевый соус / соль/специи',
        type: 'main_dishes', description: '', price: '45',
        image: '/main_dishes/chicken/krylia_kurinye_v_medovom_souse/img0008.jpg',
        sliderImages: [
            '/main_dishes/chicken/krylia_kurinye_v_medovom_souse/img0008.jpg',
            '/main_dishes/chicken/krylia_kurinye_v_medovom_souse/img0009.jpg',
            '/main_dishes/chicken/krylia_kurinye_v_medovom_souse/img0010.jpg',
            '/main_dishes/chicken/krylia_kurinye_v_medovom_souse/img0011.jpg',
            '/main_dishes/chicken/krylia_kurinye_v_medovom_souse/img0012.jpg',
            '/main_dishes/chicken/krylia_kurinye_v_medovom_souse/img0013.jpg',
            '/main_dishes/chicken/krylia_kurinye_v_medovom_souse/img0014.jpg',
            '/main_dishes/chicken/krylia_kurinye_v_medovom_souse/img0015.jpg',
            '/main_dishes/chicken/krylia_kurinye_v_medovom_souse/img0016.jpg',
            '/main_dishes/chicken/krylia_kurinye_v_medovom_souse/img0017.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Шашлычок куриный(бедро)',
        ingredients: 'Мясо куриного бедра / соевый соус / соль/специи',
        type: 'main_dishes', description: '', price: '56',
        image: '/main_dishes/chicken/shashlychok_kurinnyi_bedro/img0068.jpg',
        sliderImages: [
            '/main_dishes/chicken/shashlychok_kurinnyi_bedro/img0068.jpg',
            '/main_dishes/chicken/shashlychok_kurinnyi_bedro/img0069.jpg',
            '/main_dishes/chicken/shashlychok_kurinnyi_bedro/img0070.jpg',
            '/main_dishes/chicken/shashlychok_kurinnyi_bedro/img0071.jpg',
        ], isSpecial: false
    },
    /*  {
        id: 1,
        name: 'Мини-стейки куриные',
        ingredients: 'куриное филе / соевый соус / соль/специи', type: 'main_dishes', description: '', price: '55',
        image: '/main_dishes/chicken/mini-steyki_kurinnye/img0072.jpg',
        sliderImages: [
          '/main_dishes/chicken/mini-steyki_kurinnye/img0072.jpg',
          '/main_dishes/chicken/mini-steyki_kurinnye/img0073.jpg',
          '/main_dishes/chicken/mini-steyki_kurinnye/img0074.jpg',
          '/main_dishes/chicken/mini-steyki_kurinnye/img0075.jpg',
          '/main_dishes/chicken/mini-steyki_kurinnye/img0076.jpg',
        ], isSpecial: false
      },*/
    {
        id: 1,
        name: 'Котлета куриная',
        ingredients: 'куриное филе / лук / соль/специи',
        type: 'main_dishes', description: '', price: '50',
        image: '/main_dishes/chicken/kotleta_kurinaia/img0089.jpg',
        sliderImages: [
            '/main_dishes/chicken/kotleta_kurinaia/img0089.jpg',
            '/main_dishes/chicken/kotleta_kurinaia/img0090.jpg',
            '/main_dishes/chicken/kotleta_kurinaia/img0091.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Печень куриная с вишневым соусом',
        ingredients: 'печень куриная / соль/специи / вишневый соус',
        type: 'main_dishes', description: '', price: '50',
        image: '/main_dishes/chicken/pechen_kurinaia_s_vishnevym_sousom/img0056.jpg',
        sliderImages: [
            '/main_dishes/chicken/pechen_kurinaia_s_vishnevym_sousom/img0056.jpg',
            '/main_dishes/chicken/pechen_kurinaia_s_vishnevym_sousom/img0057.jpg',
            '/main_dishes/chicken/pechen_kurinaia_s_vishnevym_sousom/img0058.jpg',
            '/main_dishes/chicken/pechen_kurinaia_s_vishnevym_sousom/img0059.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Кордон Чиз',
        ingredients: 'куриное филе / копченое мясо / сыр сулугуни / соль/специи / растительное масло / панировочные сухари',
        type: 'main_dishes', description: '', price: '45',
        image: '/main_dishes/chicken/kordon_chiz/img0098.jpg',
        sliderImages: [
            '/main_dishes/chicken/kordon_chiz/img0098.jpg',
            '/main_dishes/chicken/kordon_chiz/img0099.jpg',
            '/main_dishes/chicken/kordon_chiz/img0100.jpg',
            '/main_dishes/chicken/kordon_chiz/img0101.jpg',
            '/main_dishes/chicken/kordon_chiz/img0102.jpg',
            '/main_dishes/chicken/kordon_chiz/img0103.jpg',
            '/main_dishes/chicken/kordon_chiz/img0104.jpg',
            '/main_dishes/chicken/kordon_chiz/img0105.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Котлета по-Киевски',
        ingredients: 'куриное филе / сливочное масло  / зелень / растительное масло / соль/специи / панировочные сухари',
        type: 'main_dishes', description: '', price: '56',
        image: '/main_dishes/chicken/kotleta_po-kievski/img0092.jpg',
        sliderImages: [
            '/main_dishes/chicken/kotleta_po-kievski/img0092.jpg',
            '/main_dishes/chicken/kotleta_po-kievski/img0093.jpg',
            '/main_dishes/chicken/kotleta_po-kievski/img0094.jpg',
            '/main_dishes/chicken/kotleta_po-kievski/img0095.jpg',
            '/main_dishes/chicken/kotleta_po-kievski/img0096.jpg',
            '/main_dishes/chicken/kotleta_po-kievski/img0097.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Фахитос с курицей',
        ingredients: 'куриное филе / фасоль / болгарский перец / перец чили / томатная паста / соль/специи',
        type: 'main_dishes', description: '', price: '50',
        image: '/main_dishes/chicken/fahitos_s_kuritsei/img0117.jpg',
        sliderImages: [
            '/main_dishes/chicken/fahitos_s_kuritsei/img0117.jpg',
            '/main_dishes/chicken/fahitos_s_kuritsei/img0118.jpg',
            '/main_dishes/chicken/fahitos_s_kuritsei/img0119.jpg',
            '/main_dishes/chicken/fahitos_s_kuritsei/img0120.jpg',
            '/main_dishes/chicken/fahitos_s_kuritsei/img0121.jpg',
            '/main_dishes/chicken/fahitos_s_kuritsei/img0122.jpg',
            '/main_dishes/chicken/fahitos_s_kuritsei/img0123.jpg',
            '/main_dishes/chicken/fahitos_s_kuritsei/img0124.jpg',
            '/main_dishes/chicken/fahitos_s_kuritsei/img0125.jpg',
            '/main_dishes/chicken/fahitos_s_kuritsei/img0126.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Рулет куриный с грибами',
        ingredients: 'куриное филе / бекон / шампиньоны / сливки / соль/специи',
        type: 'main_dishes', description: '', price: '45',
        image: '/main_dishes/chicken/rulet_kurinyi_s_gribami/img0127.jpg',
        sliderImages: [
            '/main_dishes/chicken/rulet_kurinyi_s_gribami/img0127.jpg',
            '/main_dishes/chicken/rulet_kurinyi_s_gribami/img0128.jpg',
            '/main_dishes/chicken/rulet_kurinyi_s_gribami/img0129.jpg',
            '/main_dishes/chicken/rulet_kurinyi_s_gribami/img0130.jpg',
            '/main_dishes/chicken/rulet_kurinyi_s_gribami/img0131.jpg',
            '/main_dishes/chicken/rulet_kurinyi_s_gribami/img0132.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Утиная ножка с ягодным соусом',
        ingredients: 'утиная ножка / соль/специи / ягодный соус',
        type: 'main_dishes', description: '', price: '78',
        image: '/main_dishes/chicken/utinaya_nozhka_s_iagodnym_sousom/img0054.jpg',
        sliderImages: [
            '/main_dishes/chicken/utinaya_nozhka_s_iagodnym_sousom/img0054.jpg',
            '/main_dishes/chicken/utinaya_nozhka_s_iagodnym_sousom/img0055.jpg',
            '/main_dishes/chicken/utinaya_nozhka_s_iagodnym_sousom/img0056.jpg',
            '/main_dishes/chicken/utinaya_nozhka_s_iagodnym_sousom/img0057.jpg',
            '/main_dishes/chicken/utinaya_nozhka_s_iagodnym_sousom/img0058.jpg',
            '/main_dishes/chicken/utinaya_nozhka_s_iagodnym_sousom/img0059.jpg',
            '/main_dishes/chicken/utinaya_nozhka_s_iagodnym_sousom/img0060.jpg',
            '/main_dishes/chicken/utinaya_nozhka_s_iagodnym_sousom/img0061.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Перепелка в медово-горчичном соусе',
        ingredients: 'перепелка / бекон / соль/специи / мед / горчица',
        type: 'main_dishes', description: '', price: '78',
        image: '/main_dishes/chicken/perepelka_v_medovo_gorchichnom_souse/img0062.jpg',
        sliderImages: [
            '/main_dishes/chicken/perepelka_v_medovo_gorchichnom_souse/img0062.jpg',
            '/main_dishes/chicken/perepelka_v_medovo_gorchichnom_souse/img0063.jpg',
            '/main_dishes/chicken/perepelka_v_medovo_gorchichnom_souse/img0064.jpg',
            '/main_dishes/chicken/perepelka_v_medovo_gorchichnom_souse/img0077.jpg',
            '/main_dishes/chicken/perepelka_v_medovo_gorchichnom_souse/img0078.jpg',
            '/main_dishes/chicken/perepelka_v_medovo_gorchichnom_souse/img0079.jpg',
            '/main_dishes/chicken/perepelka_v_medovo_gorchichnom_souse/img0080.jpg',
            '/main_dishes/chicken/perepelka_v_medovo_gorchichnom_souse/img0081.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Свиной рулет в беконе',
        ingredients: 'Свинина / бекон / фарш свиной / маринованный огурец / соль/специи',
        type: 'main_dishes', description: '', price: '45',
        image: '/header-logo.png',
        sliderImages: [
            '/header-logo.png',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Свинина Стир-Фрай с овощами',
        ingredients: 'свинина / стручковая фасоль / зеленый горошек / болгарский перец / лук / пекинская капуста ' +
            '/ соевый соус / растительное масло / соль/специи',
        type: 'main_dishes', description: '', price: '45',
        image: '/main_dishes/pork/svinina_stir-frai/img0095.jpg',
        sliderImages: [
            '/main_dishes/pork/svinina_stir-frai/img0095.jpg',
            '/main_dishes/pork/svinina_stir-frai/img0096.jpg',
            '/main_dishes/pork/svinina_stir-frai/img0097.jpg',
            '/main_dishes/pork/svinina_stir-frai/img0098.jpg',
            '/main_dishes/pork/svinina_stir-frai/img0099.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Челогач',
        ingredients: 'свинина / соль/специи',
        type: 'main_dishes', description: '', price: '67',
        image: '/main_dishes/pork/chelogach/img0015.jpg',
        sliderImages: [
            '/main_dishes/pork/chelogach/img0015.jpg',
            '/main_dishes/pork/chelogach/img0016.jpg',
            '/main_dishes/pork/chelogach/img0017.jpg',
            '/main_dishes/pork/chelogach/img0018.jpg',
            '/main_dishes/pork/chelogach/img0019.jpg',
            '/main_dishes/pork/chelogach/img0020.jpg',
        ],
        isSpecial: true
    },
    {
        id: 1,
        name: 'Свиные ребра BBQ',
        ingredients: 'свиные ребра / соевый соус / вишневый сок / соль/специи',
        type: 'main_dishes', description: '', price: '78',
        image: '/main_dishes/pork/svinye_rebra_BBQ/img0031.jpg',
        sliderImages: [
            '/main_dishes/pork/svinye_rebra_BBQ/img0031.jpg',
            '/main_dishes/pork/svinye_rebra_BBQ/img0032.jpg',
            '/main_dishes/pork/svinye_rebra_BBQ/img0033.jpg',
            '/main_dishes/pork/svinye_rebra_BBQ/img0034.jpg',
            '/main_dishes/pork/svinye_rebra_BBQ/img0035.jpg',
            '/main_dishes/pork/svinye_rebra_BBQ/img0036.jpg',
            '/main_dishes/pork/svinye_rebra_BBQ/img0037.jpg',
            '/main_dishes/pork/svinye_rebra_BBQ/img0038.jpg',
            '/main_dishes/pork/svinye_rebra_BBQ/img0039.jpg',
            '/main_dishes/pork/svinye_rebra_BBQ/img0047.jpg',
            '/main_dishes/pork/svinye_rebra_BBQ/img0048.jpg',
            '/main_dishes/pork/svinye_rebra_BBQ/img0049.jpg',
            '/main_dishes/pork/svinye_rebra_BBQ/img0050.jpg',
            '/main_dishes/pork/svinye_rebra_BBQ/img0051.jpg',
            '/main_dishes/pork/svinye_rebra_BBQ/img0052.jpg',
            '/main_dishes/pork/svinye_rebra_BBQ/img0053.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Шашлык свиной',
        ingredients: 'свинина / маринованный лук / соль/специи / зелень',
        type: 'main_dishes', description: '', price: '56',
        image: '/main_dishes/pork/shashlyck_svinoi/img0005.jpg',
        sliderImages: [
            '/main_dishes/pork/shashlyck_svinoi/img0005.jpg',
            '/main_dishes/pork/shashlyck_svinoi/img0006.jpg',
            '/main_dishes/pork/shashlyck_svinoi/img0007.jpg',
            '/main_dishes/pork/shashlyck_svinoi/img0008.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Мини стейки из свинины',
        ingredients: 'свинина / соль/специи / соевый соус',
        type: 'main_dishes', description: '', price: '50',
        image: '/main_dishes/pork/mini-steiki_iz_svininy/img0065.jpg',
        sliderImages: [
            '/main_dishes/pork/mini-steiki_iz_svininy/img0065.jpg',
            '/main_dishes/pork/mini-steiki_iz_svininy/img0066.jpg',
            '/main_dishes/pork/mini-steiki_iz_svininy/img0067.jpg',
            '/main_dishes/pork/mini-steiki_iz_svininy/img0068.jpg',
            '/main_dishes/pork/mini-steiki_iz_svininy/img0069.jpg',
            '/main_dishes/pork/mini-steiki_iz_svininy/img0010.jpg',
            '/main_dishes/pork/mini-steiki_iz_svininy/img0071.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Свинина в кисло-сладком соусе',
        ingredients: 'свинина / апельсин / лимон / соль/специи',
        type: 'main_dishes', description: '', price: '56',
        image: '/main_dishes/pork/svinina_v_kislo-sladkom_souse/img0082.jpg',
        sliderImages: [
            '/main_dishes/pork/svinina_v_kislo-sladkom_souse/img0082.jpg',
            '/main_dishes/pork/svinina_v_kislo-sladkom_souse/img0083.jpg',
            '/main_dishes/pork/svinina_v_kislo-sladkom_souse/img0084.jpg',
            '/main_dishes/pork/svinina_v_kislo-sladkom_souse/img0085.jpg',
            '/main_dishes/pork/svinina_v_kislo-sladkom_souse/img0086.jpg',
            '/main_dishes/pork/svinina_v_kislo-sladkom_souse/img0087.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Колбаски Мюнхенские',
        ingredients: 'свинина / говядина / соль/специи',
        type: 'main_dishes', description: '', price: '56',
        image: '/main_dishes/pork/kolbaski_munhenskie/img0088.jpg',
        sliderImages: [
            '/main_dishes/pork/kolbaski_munhenskie/img0088.jpg',
            '/main_dishes/pork/kolbaski_munhenskie/img0089.jpg',
            '/main_dishes/pork/kolbaski_munhenskie/img0090.jpg',
            '/main_dishes/pork/kolbaski_munhenskie/img0091.jpg',
            '/main_dishes/pork/kolbaski_munhenskie/img0092.jpg',
            '/main_dishes/pork/kolbaski_munhenskie/img0093.jpg',
            '/main_dishes/pork/kolbaski_munhenskie/img0094.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Телятина в имбирном соусе',
        ingredients: 'Телятина / лук / сливки / имбирь / соль/специи',
        type: 'main_dishes', description: '', price: '45',
        image: '/main_dishes/beef/teliatina_v_imbirnom_souse/img0042.jpg',
        sliderImages: [
            '/main_dishes/beef/teliatina_v_imbirnom_souse/img0042.jpg',
            '/main_dishes/beef/teliatina_v_imbirnom_souse/img0043.jpg',
            '/main_dishes/beef/teliatina_v_imbirnom_souse/img0044.jpg',
            '/main_dishes/beef/teliatina_v_imbirnom_souse/img0045.jpg',
            '/main_dishes/beef/teliatina_v_imbirnom_souse/img0046.jpg',
            '/main_dishes/beef/teliatina_v_imbirnom_souse/img0047.jpg',
            '/main_dishes/beef/teliatina_v_imbirnom_souse/img0048.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Бифштекс говяжий',
        ingredients: 'фарш говяжий / маринованный лук / маринованный огурец / помидор / соль/специи',
        type: 'main_dishes',
        description: '', price: '50',
        image: '/main_dishes/beef/bifshteks_goviazhii/img0034.jpg',
        sliderImages: [
            '/main_dishes/beef/bifshteks_goviazhii/img0034.jpg',
            '/main_dishes/beef/bifshteks_goviazhii/img0035.jpg',
            '/main_dishes/beef/bifshteks_goviazhii/img0036.jpg',
            '/main_dishes/beef/bifshteks_goviazhii/img0037.jpg',
            '/main_dishes/beef/bifshteks_goviazhii/img0038.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Свинина Дарницкая',
        ingredients: 'Свинина / соевый соус / мед / соль/специи',
        type: 'main_dishes', description: '', price: '50',
        image: '/main_dishes/pork/svinina_darnytskaya/img0005.jpg',
        sliderImages: [
            '/main_dishes/pork/svinina_darnytskaya/img0005.jpg',
            '/main_dishes/pork/svinina_darnytskaya/img0006.jpg',
            '/main_dishes/pork/svinina_darnytskaya/img0007.jpg',
            '/main_dishes/pork/svinina_darnytskaya/img0008.jpg',
            '/main_dishes/pork/svinina_darnytskaya/img0009.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Мини стейки из говядины',
        ingredients: 'говядина / соль/специи / соевый соус',
        type: 'main_dishes', description: '', price: '50',
        image: '/main_dishes/beef/mini-steiki_iz_goviadiny/img0040.jpg',
        sliderImages: [
            '/main_dishes/beef/mini-steiki_iz_goviadiny/img0040.jpg',
            '/main_dishes/beef/mini-steiki_iz_goviadiny/img0041.jpg',
            '/main_dishes/beef/mini-steiki_iz_goviadiny/img0042.jpg',
            '/main_dishes/beef/mini-steiki_iz_goviadiny/img0043.jpg',
            '/main_dishes/beef/mini-steiki_iz_goviadiny/img0044.jpg',
            '/main_dishes/beef/mini-steiki_iz_goviadiny/img0045.jpg',
            '/main_dishes/beef/mini-steiki_iz_goviadiny/img0046.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Телятина по-тайски',
        ingredients: 'Телятина / соль/специи / соевый соус / стручковая фасоль ' +
            '/ лук / помидор / болгарский перец / морковка / растительное масло / кунжут',
        type: 'main_dishes', description: '', price: '67',
        image: '/main_dishes/beef/teliatina_po-tayski/img0105.jpg',
        sliderImages: [
            '/main_dishes/beef/teliatina_po-tayski/img0105.jpg',
            '/main_dishes/beef/teliatina_po-tayski/img0106.jpg',
            '/main_dishes/beef/teliatina_po-tayski/img0107.jpg',
            '/main_dishes/beef/teliatina_po-tayski/img0108.jpg',
            '/main_dishes/beef/teliatina_po-tayski/img0109.jpg',
            '/main_dishes/beef/teliatina_po-tayski/img0110.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Филе рыбы с овощами под сыром',
        ingredients: 'филе рыбы / помидор / лук / твердый сыр / соль/специи / сливочное масло',
        type: 'main_dishes', description: '', price: '56',
        image: '/main_dishes/fish/file_ryby_s_ovoshami_pod_syrom/img0024.jpg',
        sliderImages: [
            '/main_dishes/fish/file_ryby_s_ovoshami_pod_syrom/img0024.jpg',
            '/main_dishes/fish/file_ryby_s_ovoshami_pod_syrom/img0025.jpg',
            '/main_dishes/fish/file_ryby_s_ovoshami_pod_syrom/img0026.jpg',
            '/main_dishes/fish/file_ryby_s_ovoshami_pod_syrom/img0027.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Филе рыбы со шпинатом',
        ingredients: 'Филе рыбы / шпинат / сливочное масло / соль/специи',
        type: 'main_dishes', description: '', price: '56',
        image: '/main_dishes/fish/file_ryby_so_shpinatom/img0028.jpg',
        sliderImages: [
            '/main_dishes/fish/file_ryby_so_shpinatom/img0028.jpg',
            '/main_dishes/fish/file_ryby_so_shpinatom/img0029.jpg',
            '/main_dishes/fish/file_ryby_so_shpinatom/img0030.jpg',
            '/main_dishes/fish/file_ryby_so_shpinatom/img0031.jpg',
            '/main_dishes/fish/file_ryby_so_shpinatom/img0032.jpg',
            '/main_dishes/fish/file_ryby_so_shpinatom/img0033.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Филе рыбы в крошке',
        ingredients: 'филе рыбы / соевый соус / соль/специи / растительное масло / панировочные сухари',
        type: 'main_dishes', description: '', price: '45',
        image: '/main_dishes/fish/file_ryby_v_kroshke/img0019.jpg',
        sliderImages: [
            '/main_dishes/fish/file_ryby_v_kroshke/img0019.jpg',
            '/main_dishes/fish/file_ryby_v_kroshke/img0020.jpg',
            '/main_dishes/fish/file_ryby_v_kroshke/img0021.jpg',
            '/main_dishes/fish/file_ryby_v_kroshke/img0022.jpg',
            '/main_dishes/fish/file_ryby_v_kroshke/img0023.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Хек в томатном соусе',
        ingredients: 'тушка хека / томатная паста / соль/специи / лавровый лист / черный перец',
        type: 'main_dishes', description: '', price: '50',
        image: '/main_dishes/fish/hek_v_tomatnom_souse/img0111.jpg',
        sliderImages: [
            '/main_dishes/fish/hek_v_tomatnom_souse/img0111.jpg',
            '/main_dishes/fish/hek_v_tomatnom_souse/img0112.jpg',
            '/main_dishes/fish/hek_v_tomatnom_souse/img0113.jpg',
            '/main_dishes/fish/hek_v_tomatnom_souse/img0114.jpg',
            '/main_dishes/fish/hek_v_tomatnom_souse/img0115.jpg',
            '/main_dishes/fish/hek_v_tomatnom_souse/img0116.jpg',
            '/main_dishes/fish/hek_v_tomatnom_souse/img0117.jpg',
            '/main_dishes/fish/hek_v_tomatnom_souse/img0118.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Стейк из Горбуши Гриль',
        ingredients: 'горбуша / растительное масло / соль/специи / лимон',
        type: 'main_dishes', description: '', price: '56',
        image: '/main_dishes/fish/steik_iz_gorbushi_gril/img0053.jpg',
        sliderImages: [
            '/main_dishes/fish/steik_iz_gorbushi_gril/img0053.jpg',
            '/main_dishes/fish/steik_iz_gorbushi_gril/img0054.jpg',
            '/main_dishes/fish/steik_iz_gorbushi_gril/img0055.jpg',
            '/main_dishes/fish/steik_iz_gorbushi_gril/img0056.jpg',
            '/main_dishes/fish/steik_iz_gorbushi_gril/img0057.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Карп с овощами',
        ingredients: 'филе карпа / помидор / лук порей / сметана / соль/специи / зелень',
        type: 'main_dishes', description: '', price: '56',
        image: '/main_dishes/fish/karp_s_ovoshami/img0067.jpg',
        sliderImages: [
            '/main_dishes/fish/karp_s_ovoshami/img0067.jpg',
            '/main_dishes/fish/karp_s_ovoshami/img0068.jpg',
            '/main_dishes/fish/karp_s_ovoshami/img0069.jpg',
            '/main_dishes/fish/karp_s_ovoshami/img0070.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Свиная отбивная с овощами под сыром',
        ingredients: 'свинина / лук / помидор / пшеничная мука / яйцо / соль/перец / твердый сыр',
        type: 'main_dishes', description: '', price: '50',
        image: '/main_dishes/pork/svinnaya_s_ovoschami_pod_syrom/img0009.jpg',
        sliderImages: [
            '/main_dishes/pork/svinnaya_s_ovoschami_pod_syrom/img0010.jpg',
            '/main_dishes/pork/svinnaya_s_ovoschami_pod_syrom/img0011.jpg',
            '/main_dishes/pork/svinnaya_s_ovoschami_pod_syrom/img0012.jpg',
            '/main_dishes/pork/svinnaya_s_ovoschami_pod_syrom/img0013.jpg',
            '/main_dishes/pork/svinnaya_s_ovoschami_pod_syrom/img0014.jpg',
        ], isSpecial: false
    },
    {
        id: 1,
        name: 'Котлета по-домашнему',
        ingredients: 'свинина / говядина / лук / соль/перец/специи',
        type: 'main_dishes', description: '', price: '45',
        image: '/main_dishes/pork/kotleta/img0001.jpg',
        sliderImages: [
            '/main_dishes/pork/kotleta/img0001.jpg',
            '/main_dishes/pork/kotleta/img0002.jpg',
            '/main_dishes/pork/kotleta/img0003.jpg',
            '/main_dishes/pork/kotleta/img0004.jpg',
        ], isSpecial: false
    }
];


/***/ }),

/***/ "./src/app/mock-menu-types.ts":
/*!************************************!*\
  !*** ./src/app/mock-menu-types.ts ***!
  \************************************/
/*! exports provided: MENU_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_TYPES", function() { return MENU_TYPES; });
var MENU_TYPES = [
    { id: 1, name: 'Первые Блюда', state: 'first_dishes' },
    { id: 2, name: 'Салаты', state: 'salads' },
    { id: 3, name: 'Основное Горячее', state: 'main_dishes' },
    { id: 4, name: 'Гарниры', state: 'garnishes' }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ivanyeremenko/workDir/garlic-front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map