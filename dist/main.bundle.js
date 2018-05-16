webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./cms/cms.module": [
		"../../../../../src/app/cms/cms.module.ts"
	],
	"./web/web.module": [
		"../../../../../src/app/web/web.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var appRoutes = [
    { path: '', loadChildren: './web/web.module#WebModule', pathMatch: 'full' },
    { path: 'cms', loadChildren: './cms/cms.module#CmsModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cms_cms_module__ = __webpack_require__("../../../../../src/app/cms/cms.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__web_web_module__ = __webpack_require__("../../../../../src/app/web/web.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_pipes_filter_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_pipes_filter_array_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/filter-array.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_pipes_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_9__shared_pipes_filter_array_pipe__["a" /* FilterArrayPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__web_web_module__["WebModule"],
                __WEBPACK_IMPORTED_MODULE_6__cms_cms_module__["CmsModule"]
            ],
            providers: [],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/cms/cms-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CmsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tv_shows_tv_shows_component__ = __webpack_require__("../../../../../src/app/cms/tv-shows/tv-shows.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tv_shows_edit_show_edit_show_component__ = __webpack_require__("../../../../../src/app/cms/tv-shows/edit-show/edit-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cms_component__ = __webpack_require__("../../../../../src/app/cms/cms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tv_shows_shows_list_shows_list_component__ = __webpack_require__("../../../../../src/app/cms/tv-shows/shows-list/shows-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tv_shows_edit_season_edit_season_component__ = __webpack_require__("../../../../../src/app/cms/tv-shows/edit-season/edit-season.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tv_shows_edit_episode_edit_episode_component__ = __webpack_require__("../../../../../src/app/cms/tv-shows/edit-episode/edit-episode.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var cmsRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__cms_component__["a" /* CmsComponent */], children: [
            { path: 'shows', component: __WEBPACK_IMPORTED_MODULE_2__tv_shows_tv_shows_component__["a" /* TvShowsComponent */], children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__tv_shows_shows_list_shows_list_component__["a" /* ShowsListComponent */], pathMatch: 'full' },
                    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_3__tv_shows_edit_show_edit_show_component__["a" /* EditShowComponent */] },
                    { path: ':id/edit', component: __WEBPACK_IMPORTED_MODULE_3__tv_shows_edit_show_edit_show_component__["a" /* EditShowComponent */] },
                    { path: ':id/season/new', component: __WEBPACK_IMPORTED_MODULE_6__tv_shows_edit_season_edit_season_component__["a" /* EditSeasonComponent */] },
                    { path: ':id/season/edit', component: __WEBPACK_IMPORTED_MODULE_6__tv_shows_edit_season_edit_season_component__["a" /* EditSeasonComponent */] },
                    { path: 'season/:id/episode/new', component: __WEBPACK_IMPORTED_MODULE_7__tv_shows_edit_episode_edit_episode_component__["a" /* EditEpisodeComponent */] },
                    { path: 'season/:id/episode/edit', component: __WEBPACK_IMPORTED_MODULE_7__tv_shows_edit_episode_edit_episode_component__["a" /* EditEpisodeComponent */] }
                ] },
        ] }
];
var CmsRoutingModule = /** @class */ (function () {
    function CmsRoutingModule() {
    }
    CmsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(cmsRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], CmsRoutingModule);
    return CmsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/cms/cms.component.html":
/***/ (function(module, exports) {

module.exports = "<cms-navigation></cms-navigation>\r\n<div class=\"content-wrapper\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/cms/cms.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n  padding-top: 60px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cms/cms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CmsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CmsComponent = /** @class */ (function () {
    function CmsComponent() {
    }
    CmsComponent.prototype.ngOnInit = function () {
    };
    CmsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cms',
            template: __webpack_require__("../../../../../src/app/cms/cms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cms/cms.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CmsComponent);
    return CmsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cms/cms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmsModule", function() { return CmsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cms_component__ = __webpack_require__("../../../../../src/app/cms/cms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cms_routing_module__ = __webpack_require__("../../../../../src/app/cms/cms-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_tv_shows_service__ = __webpack_require__("../../../../../src/app/cms/services/tv-shows.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/cms/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tv_shows_tv_shows_component__ = __webpack_require__("../../../../../src/app/cms/tv-shows/tv-shows.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tv_shows_edit_show_edit_show_component__ = __webpack_require__("../../../../../src/app/cms/tv-shows/edit-show/edit-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tv_shows_edit_season_edit_season_component__ = __webpack_require__("../../../../../src/app/cms/tv-shows/edit-season/edit-season.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tv_shows_edit_episode_edit_episode_component__ = __webpack_require__("../../../../../src/app/cms/tv-shows/edit-episode/edit-episode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tv_shows_shows_list_shows_list_component__ = __webpack_require__("../../../../../src/app/cms/tv-shows/shows-list/shows-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CmsModule = /** @class */ (function () {
    function CmsModule() {
    }
    CmsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__cms_component__["a" /* CmsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tv_shows_tv_shows_component__["a" /* TvShowsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__tv_shows_edit_show_edit_show_component__["a" /* EditShowComponent */],
                __WEBPACK_IMPORTED_MODULE_9__tv_shows_edit_season_edit_season_component__["a" /* EditSeasonComponent */],
                __WEBPACK_IMPORTED_MODULE_10__tv_shows_edit_episode_edit_episode_component__["a" /* EditEpisodeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__tv_shows_shows_list_shows_list_component__["a" /* ShowsListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__cms_routing_module__["a" /* CmsRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_tv_shows_service__["a" /* TvShowsService */]
            ],
        })
    ], CmsModule);
    return CmsModule;
}());



/***/ }),

/***/ "../../../../../src/app/cms/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\" id=\"mainNav\">\n  <a class=\"navbar-brand\" routerLink=\"\">Start Bootstrap</a>\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\"\n          data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\"\n          aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n    <ul class=\"navbar-nav navbar-sidenav\" id=\"exampleAccordion\">\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"TV Shows\">\n        <a class=\"nav-link\" routerLink=\"/cms/shows\">\n          <i class=\"fa fa-fw fa-tv\"></i>\n          <span class=\"nav-link-text\">TV Shows</span>\n        </a>\n      </li>\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Charts\">\n        <a class=\"nav-link\" routerLink=\"/shows\">\n          <i class=\"fa fa-fw fa-area-chart\"></i>\n          <span class=\"nav-link-text\">Charts</span>\n        </a>\n      </li>\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tables\">\n        <a class=\"nav-link\" href=\"tables.html\">\n          <i class=\"fa fa-fw fa-table\"></i>\n          <span class=\"nav-link-text\">Tables</span>\n        </a>\n      </li>\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Components\">\n        <a class=\"nav-link nav-link-collapse collapsed\" data-toggle=\"collapse\" href=\"#collapseComponents\"\n           data-parent=\"#exampleAccordion\">\n          <i class=\"fa fa-fw fa-wrench\"></i>\n          <span class=\"nav-link-text\">Components</span>\n        </a>\n        <ul class=\"sidenav-second-level collapse\" id=\"collapseComponents\">\n          <li>\n            <a href=\"navbar.html\">Navbar</a>\n          </li>\n          <li>\n            <a href=\"cards.html\">Cards</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Example Pages\">\n        <a class=\"nav-link nav-link-collapse collapsed\" data-toggle=\"collapse\" href=\"#collapseExamplePages\"\n           data-parent=\"#exampleAccordion\">\n          <i class=\"fa fa-fw fa-file\"></i>\n          <span class=\"nav-link-text\">Example Pages</span>\n        </a>\n        <ul class=\"sidenav-second-level collapse\" id=\"collapseExamplePages\">\n          <li>\n            <a href=\"login.html\">Login Page</a>\n          </li>\n          <li>\n            <a href=\"register.html\">Registration Page</a>\n          </li>\n          <li>\n            <a href=\"forgot-password.html\">Forgot Password Page</a>\n          </li>\n          <li>\n            <a href=\"blank.html\">Blank Page</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Menu Levels\">\n        <a class=\"nav-link nav-link-collapse collapsed\" data-toggle=\"collapse\" href=\"#collapseMulti\"\n           data-parent=\"#exampleAccordion\">\n          <i class=\"fa fa-fw fa-sitemap\"></i>\n          <span class=\"nav-link-text\">Menu Levels</span>\n        </a>\n        <ul class=\"sidenav-second-level collapse\" id=\"collapseMulti\">\n          <li>\n            <a href=\"#\">Second Level Item</a>\n          </li>\n          <li>\n            <a href=\"#\">Second Level Item</a>\n          </li>\n          <li>\n            <a href=\"#\">Second Level Item</a>\n          </li>\n          <li>\n            <a class=\"nav-link-collapse collapsed\" data-toggle=\"collapse\" href=\"#collapseMulti2\">Third\n              Level</a>\n            <ul class=\"sidenav-third-level collapse\" id=\"collapseMulti2\">\n              <li>\n                <a href=\"#\">Third Level Item</a>\n              </li>\n              <li>\n                <a href=\"#\">Third Level Item</a>\n              </li>\n              <li>\n                <a href=\"#\">Third Level Item</a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Link\">\n        <a class=\"nav-link\" href=\"#\">\n          <i class=\"fa fa-fw fa-link\"></i>\n          <span class=\"nav-link-text\">Link</span>\n        </a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav sidenav-toggler\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link text-center\" id=\"sidenavToggler\">\n          <i class=\"fa fa-fw fa-angle-left\"></i>\n        </a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle mr-lg-2\" id=\"messagesDropdown\" href=\"#\" data-toggle=\"dropdown\"\n           aria-haspopup=\"true\" aria-expanded=\"false\">\n          <i class=\"fa fa-fw fa-envelope\"></i>\n          <span class=\"d-lg-none\">Messages\n              <span class=\"badge badge-pill badge-primary\">12 New</span>\n            </span>\n          <span class=\"indicator text-primary d-none d-lg-block\">\n              <i class=\"fa fa-fw fa-circle\"></i>\n            </span>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"messagesDropdown\">\n          <h6 class=\"dropdown-header\">New Messages:</h6>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">\n            <strong>David Miller</strong>\n            <span class=\"small float-right text-muted\">11:21 AM</span>\n            <div class=\"dropdown-message small\">Hey there! This new version of SB Admin is pretty awesome!\n              These messages clip off when they reach the end of the box so they don't overflow over to\n              the sides!\n            </div>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">\n            <strong>Jane Smith</strong>\n            <span class=\"small float-right text-muted\">11:21 AM</span>\n            <div class=\"dropdown-message small\">I was wondering if you could meet for an appointment at 3:00\n              instead of 4:00. Thanks!\n            </div>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">\n            <strong>John Doe</strong>\n            <span class=\"small float-right text-muted\">11:21 AM</span>\n            <div class=\"dropdown-message small\">I've sent the final files over to you for review. When\n              you're able to sign off of them let me know and we can discuss distribution.\n            </div>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item small\" href=\"#\">View all messages</a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle mr-lg-2\" id=\"alertsDropdown\" href=\"#\" data-toggle=\"dropdown\"\n           aria-haspopup=\"true\" aria-expanded=\"false\">\n          <i class=\"fa fa-fw fa-bell\"></i>\n          <span class=\"d-lg-none\">Alerts\n              <span class=\"badge badge-pill badge-warning\">6 New</span>\n            </span>\n          <span class=\"indicator text-warning d-none d-lg-block\">\n              <i class=\"fa fa-fw fa-circle\"></i>\n            </span>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"alertsDropdown\">\n          <h6 class=\"dropdown-header\">New Alerts:</h6>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">\n              <span class=\"text-success\">\n                <strong>\n                  <i class=\"fa fa-long-arrow-up fa-fw\"></i>Status Update</strong>\n              </span>\n            <span class=\"small float-right text-muted\">11:21 AM</span>\n            <div class=\"dropdown-message small\">This is an automated server response message. All systems\n              are online.\n            </div>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">\n              <span class=\"text-danger\">\n                <strong>\n                  <i class=\"fa fa-long-arrow-down fa-fw\"></i>Status Update</strong>\n              </span>\n            <span class=\"small float-right text-muted\">11:21 AM</span>\n            <div class=\"dropdown-message small\">This is an automated server response message. All systems\n              are online.\n            </div>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">\n              <span class=\"text-success\">\n                <strong>\n                  <i class=\"fa fa-long-arrow-up fa-fw\"></i>Status Update</strong>\n              </span>\n            <span class=\"small float-right text-muted\">11:21 AM</span>\n            <div class=\"dropdown-message small\">This is an automated server response message. All systems\n              are online.\n            </div>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item small\" href=\"#\">View all alerts</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <!--<form class=\"form-inline my-2 my-lg-0 mr-lg-2\">-->\n        <!--<div class=\"input-group\">-->\n        <!--<input class=\"form-control\" type=\"text\" placeholder=\"Search for...\">-->\n        <!--<span class=\"input-group-append\">-->\n        <!--<button class=\"btn btn-primary\" type=\"button\">-->\n        <!--<i class=\"fa fa-search\"></i>-->\n        <!--</button>-->\n        <!--</span>-->\n        <!--</div>-->\n        <!--</form>-->\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n          <i class=\"fa fa-fw fa-sign-out\"></i>Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/cms/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cms/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cms-navigation',
            template: __webpack_require__("../../../../../src/app/cms/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cms/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cms/services/tv-shows.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvShowsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TvShowsService = /** @class */ (function () {
    function TvShowsService(http) {
        this.http = http;
    }
    TvShowsService.prototype.getShows = function () {
        return this.http.get('/api/shows');
    };
    TvShowsService.prototype.getSingleShow = function (showId) {
        return this.http.get("/api/shows/" + showId);
    };
    TvShowsService.prototype.getSingleSeason = function (showId, seasonNumber) {
        return this.http.get("/api/shows/" + showId + "/season/" + seasonNumber);
    };
    TvShowsService.prototype.getSingleEpisode = function (seasonId, episodeNumber) {
        return this.http.get("/api/shows/seasonId/" + seasonId + "/episode/" + episodeNumber);
    };
    TvShowsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TvShowsService);
    return TvShowsService;
}());



/***/ }),

/***/ "../../../../../src/app/cms/tv-shows/edit-episode/edit-episode.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-10 order-md-1 m-auto\">\n  <h4 class=\"mb-3\">TV Show Episode</h4>\n  <form [formGroup]=\"tvShowEpisodeForm\" class=\"needs-validation mb-3\">\n    <div class=\"row\">\n      <div class=\"col-md-7\">\n        <div class=\"row\">\n          <div class=\"col-md-8 mb-3\">\n            <label for=\"title\">Title</label>\n            <input\n                id=\"title\"\n                class=\"form-control\"\n                type=\"text\"\n                formControlName=\"title\"\n                placeholder=\"Enter title for the episode here\"/>\n          </div>\n          <div class=\"col-md-4 mb-3\">\n            <label for=\"episodeReleaseDate\">Release date</label>\n            <input\n                id=\"releaseDate\"\n                class=\"form-control\"\n                type=\"date\"\n                formControlName=\"releaseDate\"/>\n          </div>\n        </div>\n        <div class=\"mb-3\">\n          <label for=\"screenshot\">Screenshot URL</label>\n          <input\n              id=\"screenshot\"\n              class=\"form-control\"\n              type=\"text\"\n              formControlName=\"screenshot\"\n              placeholder=\"Screenshot URL\"\n              #screenshotImagePath/>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-4 mb-3\">\n            <label for=\"runtime\">Runtime</label>\n            <input\n                id=\"runtime\"\n                class=\"form-control\"\n                type=\"text\"\n                formControlName=\"runtime\"\n                placeholder=\"Runtime\"/>\n          </div>\n          <div class=\"col-md-4 mb-3\">\n            <label for=\"imdbId\">IMDB ID</label>\n            <input\n                id=\"imdbId\"\n                class=\"form-control\"\n                type=\"text\"\n                formControlName=\"imdbId\"\n                placeholder=\"IMDB ID\"/>\n          </div>\n          <div class=\"col-md-4 mb-3\">\n            <label for=\"imdbRating\">IMDB Rating</label>\n            <input\n                id=\"imdbRating\"\n                class=\"form-control\"\n                type=\"number\"\n                formControlName=\"imdbRating\"\n                placeholder=\"IMDB Rating\"/>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-5 text-center\">\n        <label for=\"poster-image\" class=\"d-block\">Screenshot preview:</label>\n        <img\n            id=\"poster-image\"\n            [src]=\"screenshotImagePath.value\"\n            alt=\"Episode screenshot\"\n            class=\"img-fluid\"/>\n      </div>\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"plot\">Plot</label>\n      <textarea\n          id=\"plot\"\n          class=\"form-control\"\n          formControlName=\"plot\"\n          rows=\"5\"></textarea>\n    </div>\n    <hr class=\"mb-4\">\n    <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Save episode</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/cms/tv-shows/edit-episode/edit-episode.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cms/tv-shows/edit-episode/edit-episode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEpisodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tv_shows_service__ = __webpack_require__("../../../../../src/app/cms/services/tv-shows.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditEpisodeComponent = /** @class */ (function () {
    function EditEpisodeComponent(route, tvShowsService) {
        this.route = route;
        this.tvShowsService = tvShowsService;
        this.editMode = false;
    }
    EditEpisodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.seasonId = params['id'];
        });
        this.route.queryParams.subscribe(function (params) {
            var episodeNumber = params['number'];
            if (!episodeNumber) {
                episodeNumber = params['id'];
                _this.editMode = true;
            }
            _this.episodeNumber = episodeNumber;
        });
        console.log(this.episodeNumber);
        console.log(this.editMode);
        this.initForm();
    };
    EditEpisodeComponent.prototype.initForm = function () {
        var _this = this;
        var number = '';
        var title = '';
        var plot = '';
        var screenshot = '';
        var runtime = '';
        var releaseDate = '';
        var imdbId = '';
        var imdbRating = '';
        this.tvShowEpisodeForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            'number': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](number),
            'title': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](title),
            'plot': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](plot),
            'screenshot': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](screenshot),
            'runtime': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](runtime),
            'releaseDate': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](releaseDate),
            'imdbId': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](imdbId),
            'imdbRating': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](imdbRating)
        });
        if (this.editMode) {
            this.tvShowsService.getSingleEpisode(this.seasonId, this.episodeNumber).subscribe(function (res) {
                console.log(res);
                _this.tvShowEpisodeForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
                    'number': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.number),
                    'title': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.title),
                    'plot': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.plot),
                    'screenshot': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.screenshot),
                    'runtime': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.runtime),
                    'releaseDate': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.releaseDate),
                    'imdbId': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.imdbId),
                    'imdbRating': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.imdbRating)
                });
            });
        }
    };
    EditEpisodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-episode',
            template: __webpack_require__("../../../../../src/app/cms/tv-shows/edit-episode/edit-episode.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cms/tv-shows/edit-episode/edit-episode.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_tv_shows_service__["a" /* TvShowsService */]])
    ], EditEpisodeComponent);
    return EditEpisodeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cms/tv-shows/edit-season/edit-season.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-10 order-md-1 m-auto\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n  <h4 class=\"mb-3\">Season data</h4>\n    </div>\n    <div class=\"col-md-4\">\n      <a class=\"btn btn-success\" [routerLink]=\"['../episode/']\" role=\"button\">Add episode</a>\n    </div>\n  </div>\n  <hr class=\"mb-4\">\n  <form [formGroup]=\"tvShowForm\" class=\"needs-validation mb-3\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"row\">\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"number\">Season number:</label>\n            <input\n                type=\"number\"\n                id=\"number\"\n                class=\"form-control\"\n                formControlName=\"number\"\n                placeholder=\"Enter title here\"/>\n            <div class=\"invalid-feedback\">\n              Please enter a number!\n            </div>\n          </div>\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"releaseYear\">Release date</label>\n            <input\n                type=\"text\"\n                id=\"releaseYear\"\n                formControlName=\"releaseYear\"\n                class=\"form-control\"/>\n            <div class=\"invalid-feedback\">\n              Please enter a valid year!\n            </div>\n          </div>\n        </div>\n        <div class=\"mb-3\">\n          <label for=\"poster\">Poster URL</label>\n          <input\n              type=\"text\"\n              id=\"poster\"\n              formControlName=\"poster\"\n              class=\"form-control\"\n              placeholder=\"Poster URL\"\n              #posterImagePath/>\n        </div>\n        <div class=\"mb-3\">\n          <label for=\"description\">Description</label>\n          <textarea\n              formControlName=\"description\"\n              id=\"description\"\n              class=\"form-control\"\n              rows=\"5\"></textarea>\n          <div class=\"invalid-feedback\">\n            Please enter the show's description!\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 text-center\">\n        <label for=\"poster-image\" class=\"d-block\">Poster preview:</label>\n        <img\n            id=\"poster-image\"\n            [src]=\"posterImagePath.value\"\n            alt=\"Poster\"\n            class=\"img-fluid\"/>\n      </div>\n    </div>\n    <hr class=\"mb-4\">\n    <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Save changes</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/cms/tv-shows/edit-season/edit-season.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cms/tv-shows/edit-season/edit-season.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSeasonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tv_shows_service__ = __webpack_require__("../../../../../src/app/cms/services/tv-shows.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditSeasonComponent = /** @class */ (function () {
    function EditSeasonComponent(route, tvShowsService) {
        this.route = route;
        this.tvShowsService = tvShowsService;
        this.editMode = false;
        this.seasons = [];
    }
    EditSeasonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.tvShowId = params['id'];
        });
        this.route.queryParams.subscribe(function (params) {
            var seasonNumber = params['number'];
            if (!seasonNumber) {
                seasonNumber = params['id'];
                _this.editMode = true;
            }
            _this.seasonNumber = seasonNumber;
        });
        this.initForm();
    };
    EditSeasonComponent.prototype.initForm = function () {
        var _this = this;
        var poster = '';
        var description = '';
        var number = '';
        var releaseYear = '';
        this.tvShowForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            'poster': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](poster),
            'description': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](description),
            'number': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](number),
            'releaseYear': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](releaseYear)
        });
        if (this.editMode) {
            this.tvShowsService.getSingleSeason(this.tvShowId, this.seasonNumber).subscribe(function (res) {
                console.log(res);
                _this.tvShowForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
                    'poster': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.poster),
                    'description': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.description),
                    'number': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.number),
                    'releaseYear': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.releaseYear)
                });
            });
        }
    };
    EditSeasonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-season',
            template: __webpack_require__("../../../../../src/app/cms/tv-shows/edit-season/edit-season.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cms/tv-shows/edit-season/edit-season.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_tv_shows_service__["a" /* TvShowsService */]])
    ], EditSeasonComponent);
    return EditSeasonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cms/tv-shows/edit-show/edit-show.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-10 order-md-1 m-auto\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-8\">\n      <h4 class=\"mb-3\">TV Show</h4>\n    </div>\n    <div class=\"col-6 col-md-2\">\n      <div class=\"btn-group\">\n        <button\n            type=\"button\"\n            class=\"btn btn-info dropdown-toggle\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n          Edit seasons\n        </button>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\"\n             *ngFor=\"let seasonNumber of seasons\"\n             [routerLink]=\"['../../season/', seasonNumber, 'edit']\">{{seasonNumber}}</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6 col-md-2\">\n      <a class=\"btn btn-success\" [routerLink]=\"['../season/new/', seasons.length + 1]\" role=\"button\">Add season</a>\n    </div>\n  </div>\n  <hr class=\"mb-4\">\n  <form [formGroup]=\"tvShowForm\" class=\"needs-validation mb-3\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"row\">\n          <div class=\"col-md-8 mb-3\">\n            <label for=\"title\">Title</label>\n            <input\n                type=\"text\"\n                id=\"title\"\n                class=\"form-control\"\n                formControlName=\"title\"\n                placeholder=\"Enter title here\"/>\n            <div class=\"invalid-feedback\">\n              Please enter a title!\n            </div>\n          </div>\n          <div class=\"col-md-4 mb-3\">\n            <label for=\"year\">Release date</label>\n            <input\n                type=\"text\"\n                id=\"year\"\n                formControlName=\"year\"\n                class=\"form-control\"/>\n            <div class=\"invalid-feedback\">\n              Please enter a valid year!\n            </div>\n          </div>\n        </div>\n        <div class=\"mb-3\">\n          <label for=\"poster\">Poster URL</label>\n          <input\n              type=\"text\"\n              id=\"poster\"\n              formControlName=\"poster\"\n              class=\"form-control\"\n              placeholder=\"Poster URL\"\n              #posterImagePath/>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-8 mb-3\">\n            <label for=\"genre\">Genre</label>\n            <input\n                type=\"text\"\n                id=\"genre\"\n                formControlName=\"genre\"\n                class=\"form-control\"\n                placeholder=\"Enter genre\"/>\n            <div class=\"invalid-feedback\">\n              Please specify show genre!\n            </div>\n          </div>\n          <div class=\"col-md-4 mb-3\">\n            <label for=\"runtime\">Runtime</label>\n            <input\n                type=\"text\"\n                formControlName=\"runtime\"\n                id=\"runtime\"\n                class=\"form-control\"\n                placeholder=\"Runtime\"/>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-8 mb-3\">\n            <label for=\"logo\">Logo URL</label>\n            <input\n                type=\"text\"\n                id=\"logo\"\n                formControlName=\"logo\"\n                class=\"form-control\"\n                placeholder=\"Logo URL\"\n                #logoImage/>\n          </div>\n          <div class=\"col-md-4 mb-3\">\n            <label for=\"status\">Status</label>\n            <select\n                class=\"custom-select d-block w-100\"\n                id=\"status\"\n                formControlName=\"status\">\n              <option value=\"unknown\">Choose...</option>\n              <option value=\"renewed\">Renewed</option>\n              <option value=\"onAir\">Now on</option>\n              <option value=\"canceled\">Cancelled</option>\n              <option value=\"finished\">Finished</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"mb-3\">\n              <label for=\"trailer\">Trailer ID</label>\n              <input\n                  type=\"text\"\n                  formControlName=\"trailer\"\n                  id=\"trailer\"\n                  class=\"form-control\"\n                  placeholder=\"YouTube video ID\"/>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <label for=\"logo-image\">Logo preview:</label>\n            <img\n                id=\"logo-image\"\n                [src]=\"logoImage.value\"\n                alt=\"Logo\"\n                class=\"img-fluid\"/>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 text-center\">\n        <label for=\"poster-image\" class=\"d-block\">Poster preview:</label>\n        <img\n            id=\"poster-image\"\n            [src]=\"posterImagePath.value\"\n            alt=\"Poster\"\n            class=\"img-fluid\"/>\n      </div>\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"plot\">Plot</label>\n      <textarea\n          formControlName=\"plot\"\n          id=\"plot\"\n          class=\"form-control\"\n          rows=\"5\"></textarea>\n      <div class=\"invalid-feedback\">\n        Please enter the show's plot!\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4 mb-3\">\n        <label for=\"languages\">Languages</label>\n        <input\n            type=\"text\"\n            id=\"languages\"\n            formControlName=\"languages\"\n            class=\"form-control\"\n            placeholder=\"Languages\"/>\n      </div>\n      <div class=\"col-md-3 mb-3\">\n        <label for=\"country\">Country</label>\n        <input\n            type=\"text\"\n            id=\"country\"\n            formControlName=\"country\"\n            class=\"form-control\"\n            placeholder=\"Country\"/>\n      </div>\n      <div class=\"col-md-3 mb-3\">\n        <label for=\"imdbID\">IMDB ID</label>\n        <input\n            type=\"text\"\n            id=\"imdbID\"\n            formControlName=\"imdbID\"\n            class=\"form-control\"\n            placeholder=\"IMDB ID\"/>\n      </div>\n      <div class=\"col-md-2 mb-3\">\n        <label for=\"imdbRating\">IMDB Rating</label>\n        <input\n            type=\"number\"\n            id=\"imdbRating\"\n            formControlName=\"imdbRating\"\n            class=\"form-control\"\n            placeholder=\"Rating\"/>\n      </div>\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"awards\">Awards</label>\n      <textarea\n          formControlName=\"awards\"\n          id=\"awards\"\n          class=\"form-control\"\n          rows=\"2\"></textarea>\n    </div>\n    <hr class=\"mb-4\">\n    <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Save changes</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/cms/tv-shows/edit-show/edit-show.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cms/tv-shows/edit-show/edit-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tv_shows_service__ = __webpack_require__("../../../../../src/app/cms/services/tv-shows.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditShowComponent = /** @class */ (function () {
    function EditShowComponent(route, tvShowsService) {
        this.route = route;
        this.tvShowsService = tvShowsService;
        this.editMode = false;
        this.seasons = [];
    }
    EditShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.tvShowId = id;
            _this.editMode = id != null;
            _this.initForm();
        });
    };
    EditShowComponent.prototype.initForm = function () {
        var _this = this;
        var title = '';
        var year = (new Date()).getFullYear();
        var poster = '';
        var genre = '';
        var runtime = '';
        var logo = '';
        var status = 'unknown';
        var trailer = '';
        var plot = '';
        var languages = '';
        var country = '';
        var imdbID = '';
        var imdbRating = '';
        var awards = '';
        this.tvShowForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            'title': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](title),
            'year': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](year),
            'poster': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](poster),
            'genre': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](genre),
            'runtime': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](runtime),
            'logo': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](logo),
            'status': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](status),
            'trailer': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](trailer),
            'plot': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](plot),
            'languages': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](languages),
            'country': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](country),
            'imdbID': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](imdbID),
            'imdbRating': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](imdbRating),
            'awards': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](awards)
        });
        if (this.editMode) {
            this.tvShowsService.getSingleShow(this.tvShowId).subscribe(function (res) {
                console.log(res);
                _this.seasons = Array.from({ length: res.totalSeasons }, function (v, k) { return k + 1; });
                _this.tvShowForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
                    'title': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.title),
                    'year': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.year),
                    'poster': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.poster),
                    'genre': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.genre),
                    'runtime': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.runtime),
                    'logo': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.logo),
                    'status': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.status),
                    'trailer': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.trailer),
                    'plot': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.plot),
                    'languages': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.languages),
                    'country': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.country),
                    'imdbID': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.imdbID),
                    'imdbRating': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.imdbRating),
                    'awards': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](res.awards)
                });
            });
        }
    };
    EditShowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-show',
            template: __webpack_require__("../../../../../src/app/cms/tv-shows/edit-show/edit-show.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cms/tv-shows/edit-show/edit-show.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_tv_shows_service__["a" /* TvShowsService */]])
    ], EditShowComponent);
    return EditShowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cms/tv-shows/shows-list/shows-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\" *ngIf=\"tvShows\">\n  <li *ngFor=\"let show of tvShows\"\n      class=\"list-group-item list-group-item-action\">\n    <a [routerLink]=\"[show.id, 'edit']\"\n       class=\"d-flex justify-content-between align-items-center\">{{show.title}}\n      <span class=\"badge badge-primary badge-pill float-right\">Seasons: {{show.totalSeasons}}</span>\n    </a>\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/cms/tv-shows/shows-list/shows-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  padding: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cms/tv-shows/shows-list/shows-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tv_shows_service__ = __webpack_require__("../../../../../src/app/cms/services/tv-shows.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowsListComponent = /** @class */ (function () {
    function ShowsListComponent(tvShowsService) {
        this.tvShowsService = tvShowsService;
    }
    ShowsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tvShowsService.getShows().subscribe(function (res) {
            _this.tvShows = res;
        });
    };
    ShowsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shows-list',
            template: __webpack_require__("../../../../../src/app/cms/tv-shows/shows-list/shows-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cms/tv-shows/shows-list/shows-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tv_shows_service__["a" /* TvShowsService */]])
    ], ShowsListComponent);
    return ShowsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cms/tv-shows/tv-shows.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/cms/tv-shows/tv-shows.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cms/tv-shows/tv-shows.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvShowsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TvShowsComponent = /** @class */ (function () {
    function TvShowsComponent() {
    }
    TvShowsComponent.prototype.ngOnInit = function () {
    };
    TvShowsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tv-shows',
            template: __webpack_require__("../../../../../src/app/cms/tv-shows/tv-shows.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cms/tv-shows/tv-shows.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TvShowsComponent);
    return TvShowsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/filter-array.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterArrayPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterArrayPipe = /** @class */ (function () {
    function FilterArrayPipe() {
    }
    FilterArrayPipe.prototype.transform = function (values, searchCriteria) {
        var arrayValues = JSON.parse(values);
        var searchValues = searchCriteria.split(',');
        console.log(arrayValues);
        console.log(searchValues);
    };
    FilterArrayPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filterArray'
        })
    ], FilterArrayPipe);
    return FilterArrayPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, args) {
        return null;
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/sort.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (array, criteria, isDescending) {
        if (criteria) {
            array.sort(function (firstElement, secondElement) {
                var firstParameter = firstElement[criteria].toLowerCase();
                var secondParameter = secondElement[criteria].toLowerCase();
                if (isDescending) {
                    _a = [secondParameter, firstParameter], firstParameter = _a[0], secondParameter = _a[1];
                }
                if (firstParameter < secondParameter) {
                    return -1;
                }
                else if (firstParameter > secondParameter) {
                    return 1;
                }
                else {
                    return 0;
                }
                var _a;
            });
        }
        return array;
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'sort'
        })
    ], SortPipe);
    return SortPipe;
}());



/***/ }),

/***/ "../../../../../src/app/web/auth/auth-layout/auth-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-section\">\n  <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "../../../../../src/app/web/auth/auth-layout/auth-layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auth-section {\n  height: calc(100vh - 54px);\n  background-size: cover;\n  overflow: hidden; }\n  @media (min-width: 480px) {\n    .auth-section {\n      background: url(\"/assets/img/auth-background.jpg\") no-repeat top;\n      background-size: cover; } }\n  @media (min-width: 1024px) {\n    .auth-section {\n      height: calc(100vh - 70px); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web/auth/auth-layout/auth-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-auth-layout',
            template: __webpack_require__("../../../../../src/app/web/auth/auth-layout/auth-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web/auth/auth-layout/auth-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/auth/auth-modal/auth-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-modal-wrapper\">\r\n  <div class=\"auth-modal\">\r\n    <div class=\"content\">\r\n      <ng-template [ngIf]=\"isModal\">\r\n        <button class=\"popup-close-button\" (click)=\"closeModal()\">\r\n          <i class=\"fa fa-times\"></i>\r\n        </button>\r\n      </ng-template>\r\n      <a [routerLink]=\"['/']\">\r\n        <div class=\"logo-container\"></div>\r\n      </a>\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/web/auth/auth-modal/auth-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auth-modal-wrapper {\n  position: fixed;\n  top: calc(50% + 30px);\n  left: 50%;\n  z-index: 1000;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.auth-modal {\n  width: 455px;\n  margin: auto;\n  padding: 0;\n  text-align: center;\n  background: transparent; }\n\n.auth-modal .content {\n    padding: 30px 40px 5px;\n    background: rgba(255, 255, 255, 0.7);\n    border-radius: 3px;\n    -webkit-box-shadow: 0 6px 6px rgba(0, 0, 0, 0.3);\n            box-shadow: 0 6px 6px rgba(0, 0, 0, 0.3); }\n\n.auth-modal .logo-container {\n    height: 80px;\n    margin-top: 0;\n    margin-bottom: 5px;\n    overflow: hidden;\n    background: url(\"/assets/img/logo.png\") no-repeat center;\n    background-size: auto 100%;\n    text-align: center; }\n\n.popup-close-button {\n  float: right;\n  margin-top: -15px;\n  margin-right: -25px;\n  color: #000;\n  font-size: 1.8rem;\n  font-weight: bold;\n  background: none;\n  border: 0;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web/auth/auth-modal/auth-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthModalComponent = /** @class */ (function () {
    function AuthModalComponent() {
        this.getModalStateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isModal = false;
    }
    AuthModalComponent.prototype.ngOnInit = function () {
    };
    AuthModalComponent.prototype.closeModal = function () {
        this.isModal = false;
        this.getModalStateChange.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AuthModalComponent.prototype, "getModalStateChange", void 0);
    AuthModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-auth-modal',
            template: __webpack_require__("../../../../../src/app/web/auth/auth-modal/auth-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web/auth/auth-modal/auth-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthModalComponent);
    return AuthModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/auth/auth-submit/auth-submit.component.html":
/***/ (function(module, exports) {

module.exports = "<li>\n  <div class=\"fieldgroup\">\n    <input\n        class=\"user-input\"\n        [id]=\"id\"\n        type=\"submit\"\n        [disabled]=\"!form.getForm().valid\"\n        [value]=\"inputValue\" />\n  </div>\n  <p class=\"additional-label\" *ngIf=\"label\">{{label}}\n    <a\n        *ngIf=\"labelButtonText && labelRedirect\"\n        class=\"action-link\"\n        [routerLink]=\"[labelRedirect]\">{{labelButtonText}}</a>\n  </p>\n</li>"

/***/ }),

/***/ "../../../../../src/app/web/auth/auth-submit/auth-submit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n  width: 100%;\n  height: 34px;\n  margin: 20px 0 0;\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);\n  background: #287bbc -webkit-gradient(linear, right top, left top, from(#287bbc), to(#23639a));\n  background: #287bbc linear-gradient(to left, #287bbc 0%, #23639a 100%);\n  border: 1px solid #1b5480;\n  border-radius: 3px;\n  cursor: pointer;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  filter: progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr='#FF287BBC', endColorstr='#FF23639A'); }\n  input[disabled] {\n    background: #5f5353 -webkit-gradient(linear, right top, left top, from(#ccc), to(#5f5353));\n    background: #5f5353 linear-gradient(to left, #ccc 0%, #5f5353 100%);\n    border-color: #5f5353;\n    cursor: not-allowed; }\n  input:not([disabled]):hover {\n    background: #2672ae -webkit-gradient(linear, right top, left top, from(#2672ae), to(#1e4f7e));\n    background: #2672ae linear-gradient(to left, #2672ae 0%, #1e4f7e 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr='#FF2672AE', endColorstr='#FF1E4F7E');\n    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);\n            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25); }\n  .additional-label {\n  margin-top: 10px; }\n  .additional-label .action-link {\n    color: #8B0000;\n    font-style: italic;\n    font-weight: 700; }\n  .additional-label .action-link:hover {\n      color: #DC143C; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web/auth/auth-submit/auth-submit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthSubmitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthSubmitComponent = /** @class */ (function () {
    function AuthSubmitComponent() {
        this.form = {};
        this.inputValue = null;
        this.label = null;
        this.labelButtonText = null;
        this.labelRedirect = null;
    }
    AuthSubmitComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AuthSubmitComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AuthSubmitComponent.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AuthSubmitComponent.prototype, "inputValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AuthSubmitComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AuthSubmitComponent.prototype, "labelButtonText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AuthSubmitComponent.prototype, "labelRedirect", void 0);
    AuthSubmitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-auth-submit',
            template: __webpack_require__("../../../../../src/app/web/auth/auth-submit/auth-submit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web/auth/auth-submit/auth-submit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthSubmitComponent);
    return AuthSubmitComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.userAuthenticationChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
    }
    AuthService.prototype.ngOnInit = function () {
    };
    AuthService.prototype.checkIfUserIsAuthenticated = function () {
        return !!localStorage.getItem('jwtToken');
    };
    AuthService.prototype.registerUser = function (userData) {
        return this.http.post('/api/users', userData);
    };
    AuthService.prototype.loginUser = function (userData) {
        return this.http.post('/api/users/login', userData);
    };
    AuthService.prototype.getUser = function () {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': localStorage.getItem('jwtToken') })
        };
        return this.http.get('/api/users', httpOptions);
    };
    AuthService.prototype.setIsUserAuthenticated = function (isUserAuthenticated) {
        this.isUserAuthenticated = isUserAuthenticated;
        this.userAuthenticationChanged.next(this.isUserAuthenticated);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/web/auth/forgotten-password/forgotten-password.component.html":
/***/ (function(module, exports) {

module.exports = "<app-auth-layout>\n  <app-auth-modal>\n    <form (onSubmit)=\"requestPassword\" ngForm>\n      <fieldset>\n        <ul>\n          <input-with-errors\n              name=\"email\"\n              type=\"email\"\n              [form]=\"forgottenPasswordForm\"\n              placeholder=\"Enter email address\"></input-with-errors>\n          <app-auth-submit\n              [form]=\"forgottenPasswordForm\"\n              label=\"Not a member?\"\n              labelButtonText=\"Join now\"\n              labelRedirect=\"/signup\"\n              inputValue=\"Send request\"></app-auth-submit>\n        </ul>\n      </fieldset>\n    </form>\n  </app-auth-modal>\n</app-auth-layout>"

/***/ }),

/***/ "../../../../../src/app/web/auth/forgotten-password/forgotten-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgottenPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_validation_manager__ = __webpack_require__("../../../../ng2-validation-manager/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_validation_manager___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_validation_manager__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/web/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgottenPasswordComponent = /** @class */ (function () {
    function ForgottenPasswordComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ForgottenPasswordComponent.prototype.ngOnInit = function () {
        this.forgottenPasswordForm = new __WEBPACK_IMPORTED_MODULE_1_ng2_validation_manager__["ValidationManager"]({
            email: 'required|email'
        });
    };
    ForgottenPasswordComponent.prototype.requestPassword = function () {
        console.log(this.forgottenPasswordForm.formGroup.value);
    };
    ForgottenPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forgotten-password',
            template: __webpack_require__("../../../../../src/app/web/auth/forgotten-password/forgotten-password.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ForgottenPasswordComponent);
    return ForgottenPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/auth/input-with-error/input-with-error.component.html":
/***/ (function(module, exports) {

module.exports = "<li [formGroup]=\"form && form.getForm()\">\n  <span class=\"error error-message\">{{ form.getError(name) }}</span>\n  <div\n      class=\"fieldgroup\"\n      [ngClass]=\"{ 'with-side': buttonRedirect }\">\n    <input\n        class=\"user-input\"\n        [id]=\"id || name\"\n        [name]=\"name\"\n        [ngClass]=\"{ 'error': errorMessage || form.getError(name)}\"\n        [placeholder]=\"placeholder\"\n        [type]=\"type\"\n        [formControlName]=\"name\" />\n    <a\n        *ngIf=\"buttonRedirect\"\n        class=\"side-button\"\n        [routerLink]=\"[buttonRedirect]\"\n        title=\"Forgot your password?\">\n      <i class=\"fa fa-unlock-alt\"></i>\n    </a>\n  </div>\n</li>"

/***/ }),

/***/ "../../../../../src/app/web/auth/input-with-error/input-with-error.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\n  margin: 0 auto 5px; }\n  li .fieldgroup {\n    position: relative;\n    height: 40px; }\n  li .fieldgroup.with-side input,\n    li .fieldgroup.with-side .side-button {\n      position: absolute;\n      top: 0; }\n  li .fieldgroup.with-side input {\n      left: 0;\n      width: 90%; }\n  li .fieldgroup.with-side .side-button {\n      right: 0; }\n  li .error-message {\n    display: block;\n    height: 20px;\n    color: #DC143C;\n    font-size: 0.875rem;\n    font-weight: 700; }\n  li input {\n    width: 100%;\n    padding: 8px 7px 5px;\n    font-size: 1rem;\n    color: #333333;\n    background: #FFFFFF;\n    border: 1px solid #908484;\n    border-radius: 2px;\n    -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1) inset;\n            box-shadow: 0 0 3px rgba(0, 0, 0, 0.1) inset;\n    vertical-align: middle; }\n  li input.error {\n      color: #DC143C;\n      border-color: #DC143C; }\n  li .side-button {\n    display: block;\n    height: 39px;\n    line-height: 40px;\n    padding: 0 14px;\n    color: #333333;\n    font-size: 1rem;\n    font-weight: bold;\n    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\n    background: #f2f2f2 -webkit-gradient(linear, left top, right top, from(#f2f2f2), color-stop(32%, #e9e9e9), color-stop(74%, #d8d8d8), to(#d1d1d1));\n    background: #f2f2f2 linear-gradient(to right, #f2f2f2 0%, #e9e9e9 32%, #d8d8d8 74%, #d1d1d1 100%);\n    border: 1px solid #908484;\n    border-left-width: 0;\n    border-radius: 0 3px 3px 0;\n    cursor: pointer; }\n  li .side-button:hover {\n      background: #e8e8e8 -webkit-gradient(linear, left top, right top, from(#e8e8e8), color-stop(13%, #e3e3e3), color-stop(32%, #d7d7d7), color-stop(71%, #b9b9b9), to(#a9a9a9));\n      background: #e8e8e8 linear-gradient(to right, #e8e8e8 0%, #e3e3e3 13%, #d7d7d7 32%, #b9b9b9 71%, #a9a9a9 100%);\n      -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);\n              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web/auth/input-with-error/input-with-error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputWithErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputWithErrorComponent = /** @class */ (function () {
    function InputWithErrorComponent() {
        this.buttonRedirect = null;
        this.form = {};
        this.type = 'text';
        this.placeholder = null;
        this.errorMessage = null;
    }
    InputWithErrorComponent.prototype.ngOnInit = function () {
    };
    InputWithErrorComponent.prototype.ngOnChanges = function (changes) {
        this.inputControl = this.form && this.form.formGroup.controls[this.name] || {};
        if (__WEBPACK_IMPORTED_MODULE_1_lodash__["get"](changes, 'disabled.currentValue') === true) {
            this.inputControl.disable && this.inputControl.disable();
        }
        else {
            this.inputControl.enable && this.inputControl.enable();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], InputWithErrorComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], InputWithErrorComponent.prototype, "buttonRedirect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], InputWithErrorComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], InputWithErrorComponent.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], InputWithErrorComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], InputWithErrorComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], InputWithErrorComponent.prototype, "errorMessage", void 0);
    InputWithErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'input-with-errors',
            template: __webpack_require__("../../../../../src/app/web/auth/input-with-error/input-with-error.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web/auth/input-with-error/input-with-error.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InputWithErrorComponent);
    return InputWithErrorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/auth/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-auth-layout>\n  <app-auth-modal>\n    <form (ngSubmit)=\"signIn()\" ngForm>\n    <fieldset>\n        <ul>\n          <input-with-errors\n              name=\"email\"\n              type=\"email\"\n              [form]=\"signInForm\"\n              placeholder=\"Enter email address\"></input-with-errors>\n          <input-with-errors\n              buttonRedirect=\"/forgotten\"\n              name=\"password\"\n              type=\"password\"\n              [form]=\"signInForm\"\n              placeholder=\"Enter password\"></input-with-errors>\n          <app-auth-submit\n              [form]=\"signInForm\"\n              label=\"Not a member?\"\n              labelButtonText=\"Join now\"\n              labelRedirect=\"/signup\"\n              inputValue=\"Sign In\"></app-auth-submit>\n        </ul>\n      </fieldset>\n    </form>\n  </app-auth-modal>\n</app-auth-layout>"

/***/ }),

/***/ "../../../../../src/app/web/auth/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_validation_manager__ = __webpack_require__("../../../../ng2-validation-manager/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_validation_manager___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_validation_manager__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/web/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignInComponent = /** @class */ (function () {
    function SignInComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.signInForm = new __WEBPACK_IMPORTED_MODULE_1_ng2_validation_manager__["ValidationManager"]({
            email: 'required|email',
            password: 'required|rangeLength:8,50'
        });
    };
    SignInComponent.prototype.signIn = function () {
        var _this = this;
        var userData = __assign({}, this.signInForm.formGroup.value);
        this.authService.loginUser(userData).subscribe(function (response) {
            _this.data = response;
            console.log(response);
            localStorage.setItem('jwtToken', _this.data.token);
            _this.authService.setIsUserAuthenticated(!!response);
            _this.router.navigate(['/']);
        }, function (error) {
            console.log(error);
        });
    };
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/web/auth/signin/signin.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<app-auth-layout>\r\n  <app-auth-modal>\r\n    <form (ngSubmit)=\"signUp()\" ngForm>\r\n      <fieldset>\r\n        <ul>\r\n          <input-with-errors\r\n              name=\"email\"\r\n              type=\"email\"\r\n              [form]=\"signUpForm\"\r\n              placeholder=\"Enter email address\"></input-with-errors>\r\n          <input-with-errors\r\n              name=\"password\"\r\n              type=\"password\"\r\n              [form]=\"signUpForm\"\r\n              placeholder=\"Enter password\"></input-with-errors>\r\n          <input-with-errors\r\n              name=\"confirmPassword\"\r\n              type=\"password\"\r\n              [form]=\"signUpForm\"\r\n              placeholder=\"Confirm password\"></input-with-errors>\r\n          <app-auth-submit\r\n              [form]=\"signUpForm\"\r\n              label=\"Already a member?\"\r\n              labelButtonText=\"Sign In\"\r\n              labelRedirect=\"/signin\"\r\n              inputValue=\"Sign Up\"></app-auth-submit>\r\n        </ul>\r\n      </fieldset>\r\n    </form>\r\n  </app-auth-modal>\r\n</app-auth-layout>"

/***/ }),

/***/ "../../../../../src/app/web/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/web/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation_manager__ = __webpack_require__("../../../../ng2-validation-manager/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation_manager___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation_manager__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.signUpForm = new __WEBPACK_IMPORTED_MODULE_3_ng2_validation_manager__["ValidationManager"]({
            email: 'required|email',
            password: 'required|rangeLength:8,50',
            confirmPassword: 'required|equalTo:password'
        });
        this.signUpForm.setErrorMessage('confirmPassword', 'equalTo', 'Passwords does not match!');
        this.signUpForm.setErrorMessage('confirmPassword', 'required', 'Confirm your password');
        this.messages = {
            email: null,
            password: null
        };
    };
    SignUpComponent.prototype.signUp = function () {
        var _this = this;
        var userData = __assign({}, this.signUpForm.formGroup.value);
        delete userData.confirmPassword;
        this.authService.registerUser(userData).subscribe(function (response) {
            _this.data = response;
            localStorage.setItem('jwtToken', _this.data.token);
            _this.authService.setIsUserAuthenticated(!!response);
            _this.router.navigate(['/']);
        }, function (error) {
            _this.messages.email = error.error.email;
            _this.messages.password = error.error.password;
            console.log(_this.messages);
        });
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/web/auth/signup/signup.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-header\">\n  <div class=\"header-wrapper\">\n    <app-navigation-logo></app-navigation-logo>\n    <nav class=\"menu-navigation d-inline-block align-middle\">\n      <div class=\"d-inline-block align-middle text-right\">\n        <app-sub-navigation></app-sub-navigation>\n        <app-main-navigation></app-main-navigation>\n      </div>\n      <app-user-navigation></app-user-navigation>\n    </nav>\n    <app-mobile-menu></app-mobile-menu>\n  </div>\n</div>\n<div class=\"header-fix\"></div>"

/***/ }),

/***/ "../../../../../src/app/web/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-header {\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 54px;\n  background-color: #000; }\n\n.header-fix {\n  width: 100%;\n  height: 54px; }\n\n.header-wrapper {\n  width: calc(100% - 20px);\n  height: 100%;\n  margin: 0 auto; }\n\n@media screen and (min-width: 768px) {\n  .header-wrapper {\n    width: 700px; } }\n\n@media screen and (min-width: 1024px) {\n  .main-header,\n  .header-fix {\n    height: 70px; }\n  .header-wrapper {\n    width: 998px; } }\n\n@media screen and (min-width: 1200px) {\n  .header-wrapper {\n    width: 1170px; } }\n\n/* Navigation */\n\n.menu-navigation {\n  display: inline-block;\n  height: 100%;\n  float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'web-header',
            template: __webpack_require__("../../../../../src/app/web/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/header/main-navigation/main-navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"menu-primary d-none d-md-block\">\n  <li class=\"menu-item\">\n    <a\n        class=\"menu-link\"\n        [routerLink]=\"['/']\"\n        routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{exact: true}\"\n        title=\"Home\">Home</a>\n  </li>\n  <li class=\"menu-item\">\n    <a\n        class=\"menu-link\"\n        [routerLink]=\"['/newest']\"\n        routerLinkActive=\"active\"\n        title=\"List of new shows\">New Shows</a>\n  </li>\n  <li class=\"menu-item\">\n    <a\n        class=\"menu-link\"\n        [routerLink]=\"['/shows']\"\n        routerLinkActive=\"active\"\n        title=\"Browse all TV shows\">Browse A-Z</a>\n  </li>\n  <li class=\"menu-item\">\n    <a\n        class=\"menu-link\"\n        [routerLink]=\"['/ranking']\"\n        routerLinkActive=\"active\"\n        title=\"List of all shows by their rating\">High Scores</a>\n  </li>\n  <li class=\"menu-item\">\n    <a\n        class=\"menu-link\"\n        [routerLink]=\"['/schedule']\"\n        routerLinkActive=\"active\"\n        title=\"Schedule for the week\">This Week</a>\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/web/header/main-navigation/main-navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu-primary {\n  height: 32px;\n  margin: 0;\n  padding: 0; }\n  .menu-primary li {\n    display: inline-block;\n    list-style-type: none; }\n  .menu-link {\n  height: 28px;\n  padding: 0 10px 2px;\n  color: #FFF;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase; }\n  .menu-link.active, .menu-link:hover {\n    color: #00b7ba;\n    border-bottom: 3px solid #8B0000; }\n  .menu-link:hover {\n    text-decoration: none; }\n  @media screen and (min-width: 1024px) {\n  .menu-primary {\n    height: 34px; }\n  .menu-link {\n    font-size: 16px; }\n    .menu-link.active, .menu-link:hover {\n      border-width: 4px;\n      padding-bottom: 8px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web/header/main-navigation/main-navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainNavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainNavigationComponent = /** @class */ (function () {
    function MainNavigationComponent() {
    }
    MainNavigationComponent.prototype.ngOnInit = function () {
    };
    MainNavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-navigation',
            template: __webpack_require__("../../../../../src/app/web/header/main-navigation/main-navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web/header/main-navigation/main-navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainNavigationComponent);
    return MainNavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/header/mobile-menu/mobile-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"mobile-nav-button d-inline-block d-md-none\" (click)=\"openHamburgerMenu()\">\n  <div class=\"menu-button\" [ngClass]=\"{'active': isHamburgerMenuOpen}\">\n    <span class=\"menu-button-bar top\"></span>\n    <span class=\"menu-button-bar middle\"></span>\n    <span class=\"menu-button-bar bottom\"></span>\n  </div>\n</button>\n<div class=\"mobile-menu d-md-none\" *ngIf=\"isHamburgerMenuOpen\">\n  kon\n</div>"

/***/ }),

/***/ "../../../../../src/app/web/header/mobile-menu/mobile-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Menu Button */\n.mobile-nav-button {\n  float: right;\n  width: 54px;\n  height: 54px;\n  padding: 18px 14px 16px;\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  outline: none; }\n.menu-button {\n  position: relative;\n  height: 100%; }\n.menu-button.active .top {\n    -webkit-transform: translateX(3px) rotate(45deg);\n            transform: translateX(3px) rotate(45deg); }\n.menu-button.active .middle {\n    -webkit-transform: scaleX(0);\n            transform: scaleX(0); }\n.menu-button.active .bottom {\n    -webkit-transform: translateX(3px) rotate(-45deg);\n            transform: translateX(3px) rotate(-45deg); }\n.menu-button-bar {\n  position: absolute;\n  left: 0;\n  display: block;\n  width: 26px;\n  height: 2px;\n  background-color: #FFF;\n  border-radius: 1px;\n  -webkit-transform-origin: left center;\n          transform-origin: left center;\n  -webkit-transition: 0.125s;\n  transition: 0.125s; }\n.menu-button-bar.top {\n    top: 0; }\n.menu-button-bar.middle {\n    top: 45%;\n    -webkit-transform-origin: center;\n            transform-origin: center; }\n.menu-button-bar.bottom {\n    bottom: 0; }\n/* Mobile Menu */\n.mobile-menu {\n  position: absolute;\n  top: 54px;\n  left: 0;\n  width: 100%;\n  min-height: calc(100vh - 54px);\n  background-color: #000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web/header/mobile-menu/mobile-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MobileMenuComponent = /** @class */ (function () {
    function MobileMenuComponent() {
        this.isHamburgerMenuOpen = false;
    }
    MobileMenuComponent.prototype.openHamburgerMenu = function () {
        this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
    };
    MobileMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mobile-menu',
            template: __webpack_require__("../../../../../src/app/web/header/mobile-menu/mobile-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web/header/mobile-menu/mobile-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MobileMenuComponent);
    return MobileMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/header/navigation-logo/navigation-logo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-logo d-inline-block\">\n  <a [routerLink]=\"['/']\">\n    <div class=\"logo-image\"></div>\n  </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/web/header/navigation-logo/navigation-logo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-logo {\n  position: relative;\n  width: 120px;\n  height: 100%;\n  padding: 5px 5px 0;\n  background-color: #8B0000; }\n  .header-logo:after {\n    content: '';\n    position: absolute;\n    bottom: -8px;\n    left: 50%;\n    width: 0;\n    height: 0;\n    border-color: #8B0000 transparent transparent transparent;\n    border-style: solid;\n    border-width: 8px 40px 0 40px;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  .logo-image {\n  width: 100%;\n  height: 100%;\n  background: url(\"/assets/img/logo-white.png\") no-repeat center;\n  background-size: 100%; }\n  @media screen and (min-width: 1024px) {\n  .header-logo {\n    width: 160px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web/header/navigation-logo/navigation-logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationLogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationLogoComponent = /** @class */ (function () {
    function NavigationLogoComponent() {
    }
    NavigationLogoComponent.prototype.ngOnInit = function () {
    };
    NavigationLogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation-logo',
            template: __webpack_require__("../../../../../src/app/web/header/navigation-logo/navigation-logo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web/header/navigation-logo/navigation-logo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationLogoComponent);
    return NavigationLogoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/header/sub-navigation/sub-navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"sub-menu d-none d-md-inline-block\">\n  <li class=\"search menu-item\">\n    <a\n        class=\"menu-link\"\n        [routerLink]=\"['/search']\"\n        routerLinkActive=\"active\"\n        title=\"Search\">Search</a>\n  </li>\n  <li class=\"menu-item\">\n    <a\n        class=\"menu-link\"\n        [routerLink]=\"['/about']\"\n        routerLinkActive=\"active\"\n        title=\"About the site\">About the Site</a>\n  </li>\n  <li class=\"menu-item\">\n    <a\n        class=\"menu-link\"\n        [routerLink]=\"['/futureDev']\"\n        routerLinkActive=\"active\"\n        title=\"Future development\">Future development</a>\n  </li>\n  <li class=\"menu-item\">\n    <a\n        class=\"menu-link\"\n        [routerLink]=\"['/contacts']\"\n        routerLinkActive=\"active\"\n        title=\"Contact us\">Contact us</a>\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/web/header/sub-navigation/sub-navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sub-menu {\n  height: 24px;\n  margin: 0;\n  padding-top: 5px;\n  list-style-type: none; }\n  .sub-menu li {\n    float: left; }\n  .sub-menu li .menu-link {\n      display: inline-block;\n      padding: 0 10px;\n      font-size: 0.7rem;\n      color: #FFF;\n      font-weight: normal;\n      border-left: 1px solid rgba(136, 136, 136, 0.6); }\n  .sub-menu li .menu-link.active, .sub-menu li .menu-link:hover {\n        color: #DC143C;\n        text-decoration: none; }\n  .sub-menu li:first-child .menu-link {\n      border: none; }\n  @media screen and (min-width: 1024px) {\n  .sub-menu {\n    height: 32px;\n    padding-top: 8px; }\n    .sub-menu li .menu-link {\n      font-size: 14px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web/header/sub-navigation/sub-navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubNavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubNavigationComponent = /** @class */ (function () {
    function SubNavigationComponent() {
    }
    SubNavigationComponent.prototype.ngOnInit = function () {
    };
    SubNavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sub-navigation',
            template: __webpack_require__("../../../../../src/app/web/header/sub-navigation/sub-navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web/header/sub-navigation/sub-navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SubNavigationComponent);
    return SubNavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/header/user-navigation/user-navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-navigation d-none d-md-inline-block align-middle\">\n  <div class=\"user-action\">\n    <a class=\"button-auth\" [routerLink]=\"['/signin']\">Sign in</a>\n  </div>\n  <div class=\"user-action\">\n    <a class=\"button-profile\" [routerLink]=\"['/signup']\">Register</a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/web/header/user-navigation/user-navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-navigation {\n  display: inline-block;\n  width: 100px;\n  height: 100%; }\n\n.user-action {\n  width: 100%;\n  height: 20px;\n  margin-bottom: 4px; }\n\n.button-auth,\n.button-profile {\n  display: inline-block;\n  line-height: 16px;\n  font-size: 12px;\n  text-align: center;\n  font-weight: bold;\n  border-radius: 5px; }\n\n.button-auth:hover,\n.button-profile:hover {\n  text-decoration: none; }\n\n.button-auth {\n  width: 65px;\n  color: #000;\n  margin-top: 2px;\n  background-color: #00b7ba;\n  border: 1px solid #00b7ba; }\n\n.button-auth:hover {\n  background-color: #54e2cc;\n  border-color: #54e2cc; }\n\n.button-profile {\n  width: 96px;\n  color: #fff;\n  background-color: #8B0000;\n  border: 1px solid #8B0000; }\n\n.button-profile:hover {\n  background-color: #DC143C;\n  border-color: #DC143C; }\n\n@media screen and (min-width: 1024px) {\n  .user-navigation {\n    width: 150px; }\n  .user-action {\n    height: 30px; }\n  .button-auth {\n    width: 70%;\n    line-height: 20px;\n    margin-top: 8px;\n    font-size: 14px; }\n  .button-profile {\n    width: 100%;\n    line-height: 22px;\n    margin-top: 3px;\n    font-size: 16px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web/header/user-navigation/user-navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserNavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserNavigationComponent = /** @class */ (function () {
    function UserNavigationComponent() {
    }
    UserNavigationComponent.prototype.ngOnInit = function () {
    };
    UserNavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-navigation',
            template: __webpack_require__("../../../../../src/app/web/header/user-navigation/user-navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web/header/user-navigation/user-navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserNavigationComponent);
    return UserNavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <img class=\"img-fluid d-none d-md-block\" src=\"/assets/img/welcome-image.jpg\" alt=\"Welcome to TV-Shows\">\n  <img class=\"img-fluid d-md-none\" src=\"/assets/img/welcome-image-mobile.jpg\" alt=\"Welcome to TV-Shows\">\n</div>\n<div>\n  <img class=\"img-fluid d-none d-md-block\" src=\"/assets/img/welcome-image.jpg\" alt=\"Welcome to TV-Shows\">\n  <img class=\"img-fluid d-md-none\" src=\"/assets/img/welcome-image-mobile.jpg\" alt=\"Welcome to TV-Shows\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/web/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/web/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/shared/buttons/link-button/link-button.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"link-button\"\r\n   [routerLink]=\"['/']\">\r\n  <ng-content></ng-content>\r\n</a>"

/***/ }),

/***/ "../../../../../src/app/web/shared/buttons/link-button/link-button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".link-button {\n  display: inline-block;\n  padding: 5px 20px;\n  color: #FFFFFF;\n  text-align: center;\n  font-weight: 600;\n  font-size: 14px;\n  vertical-align: middle;\n  background-color: #8B0000;\n  border-radius: 38px;\n  border: 2px solid transparent;\n  -webkit-transition: background-color 0.3s ease-in-out;\n  transition: background-color 0.3s ease-in-out; }\n  .link-button:hover {\n    background-color: #DC143C; }\n  @media screen and (min-width: 768px) {\n    .link-button {\n      padding: 12px 24px;\n      font-size: 16px; } }\n  @media screen and (min-width: 1024px) {\n    .link-button {\n      padding: 12px 30px;\n      font-size: 20px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web/shared/buttons/link-button/link-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LinkButtonComponent = /** @class */ (function () {
    function LinkButtonComponent() {
    }
    LinkButtonComponent.prototype.ngOnInit = function () {
    };
    LinkButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'link-button',
            template: __webpack_require__("../../../../../src/app/web/shared/buttons/link-button/link-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web/shared/buttons/link-button/link-button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LinkButtonComponent);
    return LinkButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/shared/tv-show-card/tv-show-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"show.id\" class=\"show-wrapper\" *ngIf=\"show\">\n  <show-poster\n      [showTitle]=\"show.title\"\n      showUrl=\"/\"\n      [showImage]=\"show.poster\"></show-poster>\n  <div class=\"information\">\n    <h3 class=\"title\">{{show.title}}</h3>\n    <p class=\"duration\">Year: {{show.year}}</p>\n    <link-button>More info</link-button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/web/shared/tv-show-card/tv-show-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".show-wrapper {\n  margin-top: 0;\n  -webkit-transition: margin 0.3s ease-in-out;\n  transition: margin 0.3s ease-in-out; }\n  @media screen and (min-width: 768px) {\n    .show-wrapper {\n      margin-top: 35px; } }\n  @media screen and (min-width: 1024px) {\n    .show-wrapper {\n      margin-top: 65px; } }\n  .poster-wrapper {\n  display: inline-block;\n  width: 100%;\n  height: 100%; }\n  .poster-wrapper img {\n    width: 100%; }\n  .information {\n  width: 100%;\n  padding: 15px 0 25px;\n  color: #fff;\n  text-align: center;\n  -webkit-transition: padding 0.3s ease-in-out;\n  transition: padding 0.3s ease-in-out; }\n  @media screen and (min-width: 768px) {\n    .information {\n      padding: 25px 0 15px; } }\n  @media screen and (min-width: 1024px) {\n    .information {\n      padding: 30px 0 15px; } }\n  .information .title {\n    max-width: 90%;\n    line-height: 1.5;\n    margin: 3px auto;\n    overflow: hidden;\n    color: #FFFFFF;\n    font-size: 16px;\n    font-weight: 900;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    -webkit-transition: font 0.3s ease;\n    transition: font 0.3s ease; }\n  @media screen and (min-width: 768px) {\n      .information .title {\n        font-size: 22px; } }\n  @media screen and (min-width: 1024px) {\n      .information .title {\n        font-size: 24px; } }\n  .information .duration {\n    margin: 0 auto 5px;\n    color: #eeeeee;\n    font-size: 12px;\n    font-weight: 500;\n    text-transform: uppercase;\n    -webkit-transition: font 0.3s ease, margin 0.3s ease-in-out;\n    transition: font 0.3s ease, margin 0.3s ease-in-out; }\n  @media screen and (min-width: 768px) {\n      .information .duration {\n        margin-bottom: 10px;\n        font-size: 16px; } }\n  @media screen and (min-width: 1024px) {\n      .information .duration {\n        margin: 10px auto 15px;\n        font-size: 18px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web/shared/tv-show-card/tv-show-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvShowCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TvShowCardComponent = /** @class */ (function () {
    function TvShowCardComponent() {
    }
    TvShowCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TvShowCardComponent.prototype, "show", void 0);
    TvShowCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tv-show-card',
            template: __webpack_require__("../../../../../src/app/web/shared/tv-show-card/tv-show-card.component.html"),
            host: { 'class': 'col-6 col-sm-4 col-lg-3' },
            styles: [__webpack_require__("../../../../../src/app/web/shared/tv-show-card/tv-show-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TvShowCardComponent);
    return TvShowCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/shared/tv-shows/poster/poster.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PosterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PosterComponent = /** @class */ (function () {
    function PosterComponent() {
        this.showTitle = '';
        this.showUrl = '';
        this.showImage = '';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PosterComponent.prototype, "showTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PosterComponent.prototype, "showUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PosterComponent.prototype, "showImage", void 0);
    PosterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'show-poster',
            template: "\n    <a \n      class=\"poster-wrapper\"\n      [routerLink]=\"[showUrl]\">\n      <img\n       class=\"img-fluid\" \n       alt=\"{{showTitle}}\" \n       src=\"{{showImage}}\" />\n    </a>\n  ",
            styles: ["\n    .poster-wrapper {\n      display: inline-block;\n      width: 100%;\n      height: 100%;\n    \n      img {\n        width: 100%;\n      }\n    }\n"]
        }),
        __metadata("design:paramtypes", [])
    ], PosterComponent);
    return PosterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/shows/filters/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  categories works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/web/shows/filters/categories/categories.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web/shows/filters/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-categories',
            template: __webpack_require__("../../../../../src/app/web/shows/filters/categories/categories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web/shows/filters/categories/categories.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/shows/filters/filters.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"filters-wrapper\">\n  <p class=\"title\">All TV Shows</p>\n  <ul class=\"sort-menu\">\n    <li\n        *ngFor=\"let sortingFilter of sortingFiltersMap\"\n        [ngClass]=\"{'active': sortingFilter === currentSortingFilter}\"\n        [title]=\"sortingFilter.title\"\n        (click)=\"switchSortingFilter(sortingFilter)\">\n      <i class=\"fa fa-{{sortingFilter.icon}}\"></i>\n    </li>\n    <li\n        class=\"toggle-categories\"\n        title=\"Choose categories\">\n    <span class=\"open-categories ng-scope\">\n      Categories\n      <i class=\"fa fa-chevron-down\"></i>\n    </span>\n    </li>\n  </ul>\n  <hr class=\"divider\"/>\n</div>"

/***/ }),

/***/ "../../../../../src/app/web/shows/filters/filters.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filters-wrapper {\n  text-align: center;\n  -webkit-transition: padding 0.3s ease;\n  transition: padding 0.3s ease; }\n  @media screen and (min-width: 768px) {\n    .filters-wrapper {\n      padding-top: 15px;\n      text-align: left; } }\n  .filters-wrapper .title {\n    margin: 15px auto 10px;\n    color: #FFFFFF;\n    font-size: 28px;\n    font-weight: 500;\n    text-transform: uppercase;\n    -webkit-transition: font 0.3s ease;\n    transition: font 0.3s ease; }\n  @media screen and (min-width: 768px) {\n      .filters-wrapper .title {\n        display: inline-block;\n        font-size: 30px; } }\n  .filters-wrapper .sort-menu {\n    color: #eeeeee;\n    -webkit-transition: margin 0.3s ease;\n    transition: margin 0.3s ease; }\n  @media screen and (min-width: 768px) {\n      .filters-wrapper .sort-menu {\n        float: right;\n        margin-top: 20px; } }\n  .filters-wrapper .sort-menu li {\n      display: inline-block;\n      margin: 0;\n      padding: 3px 10px;\n      line-height: 22px;\n      cursor: pointer; }\n  @media screen and (min-width: 768px) {\n        .filters-wrapper .sort-menu li {\n          margin: 0 3px; } }\n  .filters-wrapper .sort-menu li:not(.toggle-categories) {\n        border: 2px solid transparent;\n        -webkit-transition: border 0.3s ease-in-out;\n        transition: border 0.3s ease-in-out;\n        border-radius: 10px; }\n  .filters-wrapper .sort-menu li:not(.toggle-categories).active {\n          border-color: #eeeeee; }\n  .filters-wrapper .sort-menu li:not(.toggle-categories):hover {\n          color: #FFFFFF;\n          border-bottom-color: #FFFFFF; }\n  .filters-wrapper .sort-menu li.toggle-categories {\n        font-size: 16px; }\n  @media screen and (min-width: 768px) {\n          .filters-wrapper .sort-menu li.toggle-categories {\n            font-size: 20px; } }\n  .filters-wrapper .divider {\n    display: block;\n    width: 100%;\n    margin: 15px auto 40px;\n    border: 0;\n    border-top: 1px solid #eee;\n    -webkit-transition: margin 0.3s ease;\n    transition: margin 0.3s ease; }\n  @media screen and (min-width: 768px) {\n      .filters-wrapper .divider {\n        margin: 0 auto; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web/shows/filters/filters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FiltersComponent = /** @class */ (function () {
    function FiltersComponent() {
        this.sortingFilterChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.sortingFiltersMap = [
            {
                icon: 'sort-alpha-asc',
                criteria: 'title',
                isDescending: false,
                title: 'Sort by title A-Z'
            },
            {
                icon: 'sort-alpha-desc',
                criteria: 'title',
                isDescending: true,
                title: 'Sort by title Z-A'
            },
            {
                icon: 'line-chart',
                criteria: 'imdbRating',
                isDescending: true,
                title: 'Sort by rating'
            },
            {
                icon: 'calendar-o',
                criteria: 'releaseDate',
                isDescending: true,
                title: 'Sort by newest first'
            }
        ];
        this.currentSortingFilter = this.sortingFiltersMap[0];
    }
    FiltersComponent.prototype.ngOnInit = function () {
    };
    FiltersComponent.prototype.switchSortingFilter = function (criteria) {
        this.currentSortingFilter = criteria;
        this.sortingFilterChanged.emit(criteria);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], FiltersComponent.prototype, "sortingFilterChanged", void 0);
    FiltersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'shows-filters',
            template: __webpack_require__("../../../../../src/app/web/shows/filters/filters.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web/shows/filters/filters.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FiltersComponent);
    return FiltersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/shows/filters/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  order works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/web/shows/filters/order/order.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web/shows/filters/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-order',
            template: __webpack_require__("../../../../../src/app/web/shows/filters/order/order.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web/shows/filters/order/order.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/shows/shows.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <shows-filters\n      (sortingFilterChanged)=\"handleSortingCriteriaChange($event)\"></shows-filters>\n  <div class=\"row\">\n    <tv-show-card\n        *ngFor=\"let show of shows\n         | sort:sortingCriteria.criteria:sortingCriteria.isDescending\"\n        [show]=\"show\"></tv-show-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/web/shows/shows.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 1200px) {\n  .container {\n    width: 90%;\n    max-width: 1300px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web/shows/shows.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowsComponent = /** @class */ (function () {
    function ShowsComponent() {
        this.shows = [
            {
                id: '5947862b734d1d59b789b29e',
                title: '13 Reasons Why',
                year: '2017–',
                releaseDate: '31 Mar 2017',
                genre: 'Drama, Mystery',
                plot: 'Thirteen Reasons Why, based on the best-selling books by Jay Asher, follows teenager Clay Jensen (Dylan Minnette) as he returns home from school to find a mysterious box with his name on it lying on his porch. Inside he discovers a group of cassette tapes recorded by Hannah Baker (Katherine Langford) -his classmate and crush-who tragically committed suicide two weeks earlier. On tape, Hannah unfolds an emotional audio diary, detailing the thirteen reasons why she decided to end her life. Through Hannah and Clay\'s dual narratives, Thirteen Reasons Why weaves an intricate and heartrending story of confusion and desperation that will deeply affect viewers.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/gpULvrgvq1Qidu8EpWevrRUfVhw.jpg',
                imdbRating: '8.8',
                releasedDate: '2017-03-31T00:00:00.000Z'
            },
            {
                id: '58fd1439f36d285bbc1307b1',
                title: 'Agent Carter',
                year: '2015–2016',
                releaseDate: '06 Jan 2015',
                genre: 'Action, Adventure, Sci-Fi',
                plot: 'The war is over and almost everyone has experienced a loss. Agent Peggy Carter has lost the love of her life. To top it off, when billionaire Howard Stark is accused of Treason, he secretly employs her to clear his name. With the help of Stark\'s butler, she embarks on a whimsical journey full of deceit, murder and controversy with a side of wise-cracking roommates.',
                poster: 'http://techaeris.com/wp-content/uploads/2016/01/Agent-Carter-Poster.jpg',
                imdbRating: '8.0',
                releasedDate: '2015-01-06T01:00:00.000Z'
            },
            {
                id: '5aaee2d6f36d284c921540a7',
                title: 'Agents of S.H.I.E.L.D.',
                year: '2013–',
                releaseDate: '24 Sep 2013',
                genre: 'Action, Adventure, Drama',
                plot: 'After the Battle of New York, the world has changed. It now knows not only about the Avengers, but also the powerful menaces that require those superheroes and more to face them. In response, Phil Coulson of the Strategic Homeland Intervention, Enforcement and Logistics Division assembles an elite covert team to find and deal with these threats wherever they are found. With a world rapidly becoming more bizarre and dangerous than ever before as the supervillains arise, these agents of S.H.I.E.L.D. are ready to take them on.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/xjm6uVktPuKXNILwjLXwVG5d5BU.jpg',
                imdbRating: '7.5',
                releasedDate: '2013-09-24T00:00:00.000Z'
            },
            {
                id: '594ed9db734d1d776aee3a8e',
                title: 'American Gods',
                year: '2017–',
                releaseDate: '30 Apr 2017',
                genre: 'Fantasy, Mystery',
                plot: 'Shadow is a man with a past. But now he wants nothing more than to live a quiet life with his wife and stay out of trouble. Until he learns that she\'s been killed in a terrible accident. Flying home for the funeral, as a violent storm rocks the plane, he is greeted by a strange man in the seat next to him. The man calls himself Mr. Wednesday, and he knows more about Shadow than is possible. He warns Shadow that a far bigger storm is coming. And from that moment on, nothing will ever be the same.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/ovnH6mQfVembYErJXYhnh6e0R9C.jpg',
                imdbRating: '8.4',
                releasedDate: '2017-04-30T00:00:00.000Z'
            },
            {
                id: '58fd14eff36d285bbc1307d0',
                title: 'Arrow',
                year: '2012–',
                releaseDate: '10 Oct 2012',
                genre: 'Action, Adventure, Crime',
                plot: 'Oliver Queen and his father are lost at sea when their luxury yacht sinks, apparently in a storm. His father dies, but Oliver survives for five years on an uncharted island and eventually returns home. But he wasn\'t alone on the island where he learned not only how to fight and survive but also of his father\'s corruption and unscrupulous business dealings. He returns to civilization a changed man, determined to put things right. He disguises himself with the hood of one of his mysterious island mentors, arms himself with a bow and sets about hunting down the men and women who have corrupted his city.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/kxNiIRlYLLpEOFp2MCeGwdMMUwZ.jpg',
                imdbRating: '7.9',
                releasedDate: '2012-10-10T00:00:00.000Z'
            },
            {
                id: '58fd155ef36d285bbc1307dd',
                title: 'Bitten',
                year: '2014–2016',
                releaseDate: '13 Jan 2014',
                genre: 'Drama, Fantasy, Horror',
                plot: 'When she left Stonehaven - \'for good this time\' - Elena Michaels thought she had left the world of supernatural behind. Until the night she got a mysterious call from her pack leader asking her to come back. So now she is heading back, away from her normal life as a photographer in Toronto and back into the world of werewolves, full of rules about protect the pack and a man she had spent years trying to forget. As if things were not bad enough, Elena also happens to be the only living female werewolf.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/a98Kr3wdnSbK0RSvFh9pb3lfeu6.jpg',
                imdbRating: '7.1',
                releasedDate: '2014-01-13T01:00:00.000Z'
            },
            {
                id: '58fd159df36d285bbc1307e4',
                title: 'Black Sails',
                year: '2014–2017',
                releaseDate: '25 Jan 2014',
                genre: 'Adventure, Drama',
                plot: 'The pirate adventure "Black Sails" centers on the tales of Captain Flint and his men and takes place twenty years prior to Robert Louis Stevenson’s classic “Treasure Island”. Flint, the most brilliant and most feared pirate captain of his day, takes on a fast-talking young addition to his crew who goes by the name John Silver. Threatened with extinction on all sides, they fight for the survival of New Providence Island, the most notorious criminal haven of its day – a debauched paradise teeming with pirates, prostitutes, thieves and fortune seekers, a place defined by both its enlightened ideals and its stunning brutality.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/subOEoL9l6q03Qc4KktIvHpW632.jpg',
                imdbRating: '8.2',
                releasedDate: '2014-01-25T01:00:00.000Z'
            },
            {
                id: '5958aa1df36d287671cd74ec',
                title: 'Daredevil',
                year: '2015–',
                releaseDate: '10 Apr 2015',
                genre: 'Action, Crime, Drama',
                plot: 'As a child Matt Murdock was blinded by a chemical spill in a freak accident. Instead of limiting him it gave him superhuman senses that enabled him to see the world in a unique and powerful way. Now he uses these powers to deliver justice, not only as a lawyer in his own law firm, but also as vigilante at night, stalking the streets of Hell\'s Kitchen as Daredevil, the man without fear.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/yuREgPDprfhoGGfGinOICWMb247.jpg',
                imdbRating: '8.7',
                releasedDate: '2015-04-10T00:00:00.000Z'
            },
            {
                id: '5956ac9af36d286323c66430',
                title: 'Dominion',
                year: '2014–2015',
                releaseDate: '19 Jun 2014',
                genre: 'Action, Drama, Fantasy',
                plot: 'Follows the perilous journey of a rebellious young soldier who discovers he\'s the unlikely savior of humanity.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/czsPQq3YuWQpQARixOBczPbJVlL.jpg',
                imdbRating: '6.8',
                releasedDate: '2014-06-19T00:00:00.000Z'
            },
            {
                id: '58f6fb81734d1d33b3276936',
                title: 'Friends',
                year: '1994-2004',
                releaseDate: '22 Sep 1994',
                genre: 'Comedy, Romance',
                plot: 'Rachel Green, Ross Geller, Monica Geller, Joey Tribbiani, Chandler Bing and Phoebe Buffay are all friends, living off of one another in the heart of New York City. Over the course of ten years, this average group of buddies goes through massive mayhem, family trouble, past and future romances, fights, laughs, tears and surprises as they learn what it really means to be a friend.',
                poster: 'https://image.tmdb.org/t/p/w500/7buCWBTpiPrCF5Lt023dSC60rgS.jpg',
                imdbRating: '9.0',
                releasedDate: '1994-09-22T00:00:00.000Z'
            },
            {
                id: '590cc83ef36d287bf31f71fd',
                title: 'Game of Thrones',
                year: '2011–',
                releaseDate: '17 Apr 2011',
                genre: 'Adventure, Drama, Fantasy',
                plot: 'In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/jIhL6mlT7AblhbHJgEoiBIOUVl1.jpg',
                imdbRating: '9.5',
                releasedDate: '2011-04-17T00:00:00.000Z'
            },
            {
                id: '5aeecf26f36d2837eae68064',
                title: 'Iron Fist',
                year: '2017–',
                releaseDate: '17 Mar 2017',
                genre: 'Action, Adventure, Crime',
                plot: 'Danny Rand returns to New York City after being missing for years, trying to reconnect with his past and his family legacy. He fights against the criminal element corrupting his world around him with his incredible kung-fu mastery and ability to summon the awesome power of the fiery Iron Fist',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/nv4nLXbDhcISPP8C1mgaxKU50KO.jpg',
                imdbRating: '6.8',
                releasedDate: '2017-03-17T01:00:00.000Z'
            },
            {
                id: '5a759d3df36d281a9f55b9e8',
                title: 'Jessica Jones',
                year: '2015–',
                releaseDate: '20 Nov 2015',
                genre: 'Action, Crime, Drama',
                plot: 'Ever since her short-lived stint as a superhero ended in tragedy, Jessica Jones has been rebuilding her personal life and career as a hot-tempered, sardonic private detective in Hell\'s Kitchen, New York City. Plagued by self-loathing and a wicked case of PTSD, Jessica battles demons from within and without, using her extraordinary abilities as an unlikely champion for those in need... especially if they\'re willing to cut her a check.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/dWILlx5a1NnQgE6n4QU3jAv1J64.jpg',
                imdbRating: '8.2',
                releasedDate: '2015-11-20T01:00:00.000Z'
            },
            {
                id: '58fd15e8f36d285bbc1307f3',
                title: 'Legends of Tomorrow',
                year: '2016–',
                releaseDate: '21 Jan 2016',
                genre: 'Action, Adventure, Drama',
                plot: 'When heroes alone are not enough... the world needs legends. Having seen the future, Rip Hunter will desperately try to prevent certain events from happening, by time-traveling; Now Rip Hunter is tasked with assembling a desperate group of heroes and villains to confront an unstoppable threat - not only is the planet at stake, but our timeline itself. The Great Question being asked here is can this ragtag team defeat an immortal threat unlike anything they have ever known?',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/jw0txL021CLRFMlCzC0XcONw9fQ.jpg',
                imdbRating: '7.1',
                releasedDate: '2016-01-21T01:00:00.000Z'
            },
            {
                id: '58ffc3ac734d1d6c1a2cd614',
                title: 'Lucifer',
                year: '2016–',
                releaseDate: '25 Jan 2016',
                genre: 'Crime, Drama, Fantasy',
                plot: 'Lucifer, bored from his sulking life in hell comes to live in Los Angeles only to help humanity with its miseries through his experience and telepathic abilities to bring people\'s deepest desires and thoughts out of them. While meeting with a girl in his nightclub (called Lux), a shootout involving him and the girl leads him to become a LAPD consultant who tries to punish people for their crimes through law and justice.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4tfVjOc5mD0dnakllL8nxyooxmO.jpg',
                imdbRating: '8.3',
                releasedDate: '2016-01-25T01:00:00.000Z'
            },
            {
                id: '5a75a0daf36d281a9f55ba76',
                title: 'Marvel\'s Luke Cage',
                year: '2016–',
                releaseDate: '30 Sep 2016',
                genre: 'Action, Crime, Drama',
                plot: 'When a sabotaged experiment gives him super strength and unbreakable skin, Luke Cage becomes a fugitive attempting to rebuild his life in Harlem and must soon confront his past and fight a battle for the heart of his city.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/9nWZZ1ghE0LuXEWJi7QjCymHygi.jpg',
                imdbRating: '7.6',
                releasedDate: '2016-09-30T00:00:00.000Z'
            },
            {
                id: '594ebc88734d1d776aee33e7',
                title: 'Sherlock',
                year: '2010–',
                releaseDate: '24 Oct 2010',
                genre: 'Crime, Drama, Mystery',
                plot: 'In this modernized version of the Conan Doyle characters, using his detective plots, Sherlock Holmes lives in early 21st century London and acts more cocky towards Scotland Yard\'s detective inspector Lestrade because he\'s actually less confident. Doctor Watson is now a fairly young veteran of the Afghan war, less adoring and more active.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/f9zGxLHGyQB10cMDZNY5ZcGKhZi.jpg',
                imdbRating: '9.2',
                releasedDate: '2010-10-24T00:00:00.000Z'
            },
            {
                id: '5956a7e0f36d286323c660df',
                title: 'Spartacus: Gods of the Arena',
                year: '2011',
                releaseDate: '21 Jan 2011',
                genre: 'Action, Adventure, Biography',
                plot: 'Before Spartacus struck down his first opponent in the arena, there were many gladiators who passed through the gates onto the sand.\'Spartacus: Gods of the Arena\' tells the story of the original Champion of the House of Batiatus: Gannicus in a more ruthless time before Spartacus\' arrival where honor was just finding its way into the arena.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/A1QZOUnWvC5I805Y2q7OrCU4Vm2.jpg',
                imdbRating: '8.6',
                releasedDate: '2011-01-21T01:00:00.000Z'
            },
            {
                id: '58ffc70b734d1d6c1a2cd7a9',
                title: 'Stranger Things',
                year: '2016–',
                releaseDate: '15 Jul 2016',
                genre: 'Drama, Fantasy, Horror',
                plot: 'In a small town where everyone knows everyone, a peculiar incident starts a chain of events that leads to the disappearance of a child - which begins to tear at the fabric of an otherwise peaceful community. Dark government agencies and seemingly malevolent supernatural forces converge on the town while a few locals begin to understand that there\'s more going on than meets the eye.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/esKFbCWAGyUUNshT5HE5BIpvbcL.jpg',
                imdbRating: '9.0',
                releasedDate: '2016-07-15T00:00:00.000Z'
            },
            {
                id: '58ffbd04734d1d6c1a2cd39e',
                title: 'Supergirl',
                year: '2015–',
                releaseDate: '26 Oct 2015',
                genre: 'Action, Adventure, Drama',
                plot: 'Years ago, Krypton was about to explode and Kal-El was sent to Earth to escape that fate. However, his older cousin, Kara, was also intended to accompany the infant as his protector. Unfortunately, Kara was accidentally diverted into the timeless Phantom Zone for years before finally arriving on Earth decades later and found by her cousin who had grown into Superman. Years later, Kara Danvers is a young professional adrift in a thankless job until a fateful crisis ignites a sense of purpose using Kryptonian powers she had long hidden. Inspired, Kara decides to emulate her cousin\'s superheroic ways, only to find her foster sister introducing her to the secret Department of Extra-Normal Operations, dedicated to fighting alien menaces including those Kara inadvertently led to Earth. Now with such help, the Maid of Might takes her place as Earth\'s newest champion with new friends and enemies challenging her world.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/ufoGrTRbItHvqk42yNHcyoE0afM.jpg',
                imdbRating: '6.6',
                releasedDate: '2015-10-26T01:00:00.000Z'
            },
            {
                id: '590dfa36f36d281fc3b9219c',
                title: 'Teen Wolf',
                year: '2011–',
                releaseDate: '05 Jun 2011',
                genre: 'Action, Comedy, Drama',
                plot: 'Scott McCall was just another kid in high school. Until, one night his best friend Stiles brings him to the woods, to look for a dead body, and Scott is bitten by a werewolf. Being a werewolf came with its perks- stronger, faster, new star in the lacrosse team, popularity- but also made it hard to control his anger. Scott has also fallen for the new girl in town, Allison, whose dad is trying to hunt and kill Scott. Scott now has to try and balance his out of control life, figure out how to control his new powers, try not to be killed by the alpha that bit him, and protect Allison- and keep her from finding out his big secret.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/vY2vfAskJTiWsQSv6bdbNCQhPLm.jpg',
                imdbRating: '7.7',
                releasedDate: '2011-06-05T00:00:00.000Z'
            },
            {
                id: '58fd1606f36d285bbc1307fb',
                title: 'Terra Nova',
                year: '2011',
                releaseDate: '26 Sep 2011',
                genre: 'Adventure, Mystery, Sci-Fi',
                plot: 'In 2149, earth is nearly wrecked by pollution. Police detective Jim Shannon is jailed for illegally raising an extra child, Zoe. He\'s sprung from jail just in time to join his family on the latest \'pilgrimage\', through a unique time-space-continuum rip, to Terra Nova, a colony run with modern technology in a dino age forest. Colony commander Nathaniel Taylor soon recruits as security professional Jim, who gradually finds out about some threats, notably from Saurian monsters, the \'sixers\' and his own, bitterly estranged son Lucas. Meanwhile Jim\'s son Josh keeps getting into trouble, mainly due to his girlfriend Skye. His smart sister Maddy is in love with gentleman soldier Mark Reynolds.',
                poster: 'https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/0/104420140426-posters-series-terra-nova-s1-poster-04.jpg',
                imdbRating: '6.8',
                releasedDate: '2011-09-26T00:00:00.000Z'
            },
            {
                id: '58fd162bf36d285bbc130806',
                title: 'The 100',
                year: '2014–',
                releaseDate: '19 Mar 2014',
                genre: 'Drama, Mystery, Sci-Fi',
                plot: 'The series is set 97 years after a devastating nuclear war wiped out almost all life on Earth. The only known survivors are the residents of twelve space stations in Earth\'s orbit prior to the war. The space stations banded together to form a single massive station named "The Ark", where about 2,400 people live. Resources are scarce and all crimes no matter their nature or severity are punishable by death ("floating") unless the perpetrator is under 18 years of age. After the Ark\'s life support systems are found to be critically failing, one hundred juvenile prisoners are declared "expendable" and sent to the surface in a last ditch attempt to determine if Earth is habitable again. However they discover that not all humanity was wiped out. There are people on Earth who survived the war, called "grounders" by the 100.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/uGMbllEELcPdtxxBGDQMLedn1fd.jpg',
                imdbRating: '7.8',
                releasedDate: '2014-03-19T01:00:00.000Z'
            },
            {
                id: '58fd1677f36d285bbc130820',
                title: 'The Blacklist',
                year: '2013–',
                releaseDate: '23 Sep 2013',
                genre: 'Crime, Drama, Mystery',
                plot: 'A highly articulate, erudite and intelligent businessman and mastermind, "Red" Reddington, has allegedly been on the "10 Most Wanted List" of various U.S. law enforcement agencies for over 20 years. The legend is that Red is as elusive as he is clever, controlling a labyrinth of creative enterprises, coupled with uncanny ability to gather and finesse information at the drop of a hat. On the first day at FBI for a new female profiler fresh out of Quantico, Red offers to bandy wits with the FBI. Red promises to deliver various criminals and plots previously unknown to any branch of law enforcement... and all Red requests in return is to choose his muse.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/y3Huzln26zGNW4RCr0h4PTwEpfi.jpg',
                imdbRating: '8.1',
                releasedDate: '2013-09-23T00:00:00.000Z'
            },
            {
                id: '5aeed8ccf36d2837eae68198',
                title: 'The Defenders',
                year: '2017–',
                releaseDate: '18 Aug 2017',
                genre: 'Action, Adventure, Crime',
                plot: '"Marvel\'s The Defenders" follows Daredevil, Jessica Jones, Luke Cage and Iron Fist. A quartet of singular heroes with one common goal - to save New York City. This is the story of four solitary figures, burdened with their own personal challenges, who realize they just might be stronger when teamed together.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/jbKR5H4CyFRn9FjTv0CvGBYyVdA.jpg',
                imdbRating: '7.6',
                releasedDate: '2017-08-18T00:00:00.000Z'
            },
            {
                id: '58fd1696f36d285bbc130831',
                title: 'The Flash',
                year: '2014–',
                releaseDate: '07 Oct 2014',
                genre: 'Action, Adventure, Drama',
                plot: 'Barry Allen is a Central City police forensic scientist with a reasonably happy life, despite the childhood trauma of a mysterious red and yellow lightning killing his mother and framing his father. All that changes when a massive particle accelerator accident leads to Barry being struck by lightning in his lab. Coming out of coma nine months later, Barry and his new friends at S.T.A.R labs find that he now has the ability to move at superhuman speed. Furthermore, Barry learns that he is but one of many affected by that event, most of whom are using their powers for evil. Determined to make a difference, Barry dedicates his life to fighting such threats, as The Flash. While he gains allies he never expected, there are also secret forces determined to aid and manipulate him for their own agenda.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/lUFK7ElGCk9kVEryDJHICeNdmd1.jpg',
                imdbRating: '8.1',
                releasedDate: '2014-10-07T00:00:00.000Z'
            },
            {
                id: '58ffaa96734d1d6c1a2cc9aa',
                title: 'The Originals',
                year: '2013–',
                releaseDate: '03 Oct 2013',
                genre: 'Drama, Fantasy, Horror',
                plot: 'A spin-off from The Vampire Diaries and set in New Orleans, The Originals centers on the Mikaelson siblings, otherwise known as the world\'s original vampires: Klaus (Joseph Morgan), Elijah (Daniel Gillies), and Rebekah (Claire Holt). Now Klaus must take down his protege, Marcel (Charles Michael Davis), who is now in charge of New Orleans, in order to re-take his city, as he originally built New Orleans. Klaus departed from the city after being chased down by his father Mikael, while it was being constructed and Marcel took charge. As Klaus has returned after many years, his ego has provoked him to become the king of the city. "Every King needs an heir" says Klaus, accepting the unborn child. The child is a first to be born to a hybrid (part vampire, part werewolf) and a werewolf (Hayley).',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/EH9i14tYCUgq1LjrLNUVZlRB0i.jpg',
                imdbRating: '8.3',
                releasedDate: '2013-10-03T00:00:00.000Z'
            },
            {
                id: '590d0749f36d2804514b699d',
                title: 'The Tomorrow People',
                year: '2013–2014',
                releaseDate: '09 Oct 2013',
                genre: 'Action, Drama, Sci-Fi',
                plot: 'The story of several young people from around the world who represent the next stage in human evolution, possessing special powers, including the ability to teleport and communicate with each other telepathically. Together they work to defeat the forces of evil.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/wLvXDUn5Xr9d112FhSWIqjS0Dtr.jpg',
                imdbRating: '7.3',
                releasedDate: '2013-10-09T00:00:00.000Z'
            },
            {
                id: '590ceb2ff36d2804514b573b',
                title: 'The Vampire Diaries',
                year: '2009–2017',
                releaseDate: '10 Sep 2009',
                genre: 'Drama, Fantasy, Horror',
                plot: 'The vampire brothers Damon and Stefan Salvatore, eternal adolescents, having been leading "normal" lives, hiding their bloodthirsty condition, for centuries, moving on before their non-aging is noticed. They are back in the Virginia town where they became vampires. Stefan is noble, denying himself blood to avoid killing, and tries to control his evil brother Damon, who promised to Stefan an eternity of misery. Stefan falls in love with schoolgirl Elena, who has an uncanny resemblance to the Salvatore brothers old love, Katherine; and whose best friend Bonnie',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/paubSqWUNgAgHFA0YpIxvcfvCg9.jpg',
                imdbRating: '7.8',
                releasedDate: '2009-09-10T00:00:00.000Z'
            },
            {
                id: '58fd16c4f36d285bbc130839',
                title: 'Under the Dome',
                year: '2013–2015',
                releaseDate: '24 Jun 2013',
                genre: 'Drama, Mystery, Sci-Fi',
                plot: 'An invisible and mysterious force field descends upon a small actual town of Chester\'s Mill, Maine, USA, trapping residents inside, cut off from the rest of civilization. The trapped townspeople must discover the secrets and purpose of the "dome" or "sphere" and its origins, while coming to learn more than they ever knew about each other and animals too.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/iFnCH70twxNDICQlDuCcoEt4Jma.jpg',
                imdbRating: '6.7',
                releasedDate: '2013-06-24T00:00:00.000Z'
            },
            {
                id: '58ffb275734d1d6c1a2cce36',
                title: 'iZombie',
                year: '2015–',
                releaseDate: '17 Mar 2015',
                genre: 'Comedy, Crime, Drama',
                plot: 'Liv Moore, a medical student, gets invited in a party which turns into a macabre zombie arena. Liv wakes up from the dead and becomes a zombie. For maintaining her humanity she must eat human brains so she began working in coroner\'s office to access brains. Eating a brain gives her memories and traits of that person. So she helps detective Clive Babineaux to solve the murder as a psychic.',
                poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/a4AlSl8P3qgPs6cZYgDGLuj4XKb.jpg',
                imdbRating: '8.0',
                releasedDate: '2015-03-17T01:00:00.000Z'
            }
        ];
        this.sortingCriteria = {};
    }
    ShowsComponent.prototype.ngOnInit = function () {
    };
    ShowsComponent.prototype.handleSortingCriteriaChange = function (criteria) {
        this.sortingCriteria = criteria;
        console.log(this.sortingCriteria);
    };
    ShowsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shows',
            template: __webpack_require__("../../../../../src/app/web/shows/shows.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web/shows/shows.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShowsComponent);
    return ShowsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/web-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__web_component__ = __webpack_require__("../../../../../src/app/web/web.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_signin_signin_component__ = __webpack_require__("../../../../../src/app/web/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_signup_signup_component__ = __webpack_require__("../../../../../src/app/web/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/web/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_forgotten_password_forgotten_password_component__ = __webpack_require__("../../../../../src/app/web/auth/forgotten-password/forgotten-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shows_shows_component__ = __webpack_require__("../../../../../src/app/web/shows/shows.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var webRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__web_component__["a" /* WebComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
            { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_3__auth_signin_signin_component__["a" /* SignInComponent */] },
            { path: 'forgotten', component: __WEBPACK_IMPORTED_MODULE_6__auth_forgotten_password_forgotten_password_component__["a" /* ForgottenPasswordComponent */] },
            { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__auth_signup_signup_component__["a" /* SignUpComponent */] },
            { path: 'shows', component: __WEBPACK_IMPORTED_MODULE_7__shows_shows_component__["a" /* ShowsComponent */] }
        ] }
];
var WebRoutingModule = /** @class */ (function () {
    function WebRoutingModule() {
    }
    WebRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(webRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], WebRoutingModule);
    return WebRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/web/web.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'blur-overlay': isModalOpen}\">\r\n  <web-header></web-header>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<ng-template [ngIf]=\"isModalOpen\">\r\n  <app-auth-modal (getModalStateChange)=\"handleModalChange($event)\"></app-auth-modal>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/web/web.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blur-overlay {\n  -webkit-filter: blur(10px);\n          filter: blur(10px);\n  pointer-events: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web/web.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebComponent = /** @class */ (function () {
    function WebComponent() {
        this.isModalOpen = false;
    }
    WebComponent.prototype.ngOnInit = function () {
    };
    WebComponent.prototype.handleModalChange = function (isModalOpen) {
        this.isModalOpen = isModalOpen;
    };
    WebComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-web',
            template: __webpack_require__("../../../../../src/app/web/web.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web/web.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WebComponent);
    return WebComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web/web.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebModule", function() { return WebModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__web_component__ = __webpack_require__("../../../../../src/app/web/web.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__web_routing_module__ = __webpack_require__("../../../../../src/app/web/web-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_signin_signin_component__ = __webpack_require__("../../../../../src/app/web/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_signup_signup_component__ = __webpack_require__("../../../../../src/app/web/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_service__ = __webpack_require__("../../../../../src/app/web/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("../../../../../src/app/web/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_mobile_menu_mobile_menu_component__ = __webpack_require__("../../../../../src/app/web/header/mobile-menu/mobile-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_main_navigation_main_navigation_component__ = __webpack_require__("../../../../../src/app/web/header/main-navigation/main-navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_sub_navigation_sub_navigation_component__ = __webpack_require__("../../../../../src/app/web/header/sub-navigation/sub-navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_navigation_logo_navigation_logo_component__ = __webpack_require__("../../../../../src/app/web/header/navigation-logo/navigation-logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__header_user_navigation_user_navigation_component__ = __webpack_require__("../../../../../src/app/web/header/user-navigation/user-navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_auth_modal_auth_modal_component__ = __webpack_require__("../../../../../src/app/web/auth/auth-modal/auth-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__("../../../../../src/app/web/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__auth_input_with_error_input_with_error_component__ = __webpack_require__("../../../../../src/app/web/auth/input-with-error/input-with-error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_auth_layout_auth_layout_component__ = __webpack_require__("../../../../../src/app/web/auth/auth-layout/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__auth_forgotten_password_forgotten_password_component__ = __webpack_require__("../../../../../src/app/web/auth/forgotten-password/forgotten-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__auth_auth_submit_auth_submit_component__ = __webpack_require__("../../../../../src/app/web/auth/auth-submit/auth-submit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_tv_show_card_tv_show_card_component__ = __webpack_require__("../../../../../src/app/web/shared/tv-show-card/tv-show-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shows_shows_component__ = __webpack_require__("../../../../../src/app/web/shows/shows.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_buttons_link_button_link_button_component__ = __webpack_require__("../../../../../src/app/web/shared/buttons/link-button/link-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_tv_shows_poster_poster_component__ = __webpack_require__("../../../../../src/app/web/shared/tv-shows/poster/poster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_pipes_sort_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/sort.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shows_filters_filters_component__ = __webpack_require__("../../../../../src/app/web/shows/filters/filters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shows_filters_order_order_component__ = __webpack_require__("../../../../../src/app/web/shows/filters/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shows_filters_categories_categories_component__ = __webpack_require__("../../../../../src/app/web/shows/filters/categories/categories.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var WebModule = /** @class */ (function () {
    function WebModule() {
    }
    WebModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_24__shared_pipes_sort_pipe__["a" /* SortPipe */],
                __WEBPACK_IMPORTED_MODULE_3__web_component__["a" /* WebComponent */],
                __WEBPACK_IMPORTED_MODULE_5__auth_signin_signin_component__["a" /* SignInComponent */],
                __WEBPACK_IMPORTED_MODULE_6__auth_signup_signup_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_mobile_menu_mobile_menu_component__["a" /* MobileMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_10__header_main_navigation_main_navigation_component__["a" /* MainNavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__header_sub_navigation_sub_navigation_component__["a" /* SubNavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__header_navigation_logo_navigation_logo_component__["a" /* NavigationLogoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__header_user_navigation_user_navigation_component__["a" /* UserNavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__auth_auth_modal_auth_modal_component__["a" /* AuthModalComponent */],
                __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__auth_input_with_error_input_with_error_component__["a" /* InputWithErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_17__auth_auth_layout_auth_layout_component__["a" /* AuthLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_18__auth_forgotten_password_forgotten_password_component__["a" /* ForgottenPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_19__auth_auth_submit_auth_submit_component__["a" /* AuthSubmitComponent */],
                __WEBPACK_IMPORTED_MODULE_20__shared_tv_show_card_tv_show_card_component__["a" /* TvShowCardComponent */],
                __WEBPACK_IMPORTED_MODULE_21__shows_shows_component__["a" /* ShowsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__shared_buttons_link_button_link_button_component__["a" /* LinkButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_23__shared_tv_shows_poster_poster_component__["a" /* PosterComponent */],
                __WEBPACK_IMPORTED_MODULE_25__shows_filters_filters_component__["a" /* FiltersComponent */],
                __WEBPACK_IMPORTED_MODULE_26__shows_filters_order_order_component__["a" /* OrderComponent */],
                __WEBPACK_IMPORTED_MODULE_27__shows_filters_categories_categories_component__["a" /* CategoriesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__web_routing_module__["a" /* WebRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__auth_auth_service__["a" /* AuthService */]
            ]
        })
    ], WebModule);
    return WebModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map