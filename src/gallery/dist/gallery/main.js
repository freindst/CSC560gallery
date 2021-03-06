(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yimingliao/Projects/restful/gallery/src/gallery/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'gallery';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xs-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _input_photo_form_input_photo_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-photo-form/input-photo-form.component */ "szs5");
/* harmony import */ var _display_photo_display_photo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display-photo/display-photo.component */ "gIdD");
/* harmony import */ var _photo_thumb_photo_thumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photo-thumb/photo-thumb.component */ "lCTO");
/* harmony import */ var _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./photo-gallery/photo-gallery.component */ "ae+E");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _input_photo_form_input_photo_form_component__WEBPACK_IMPORTED_MODULE_3__["InputPhotoFormComponent"],
        _display_photo_display_photo_component__WEBPACK_IMPORTED_MODULE_4__["DisplayPhotoComponent"],
        _photo_thumb_photo_thumb_component__WEBPACK_IMPORTED_MODULE_5__["PhotoThumbComponent"],
        _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_6__["PhotoGalleryComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "ae+E":
/*!**********************************************************!*\
  !*** ./src/app/photo-gallery/photo-gallery.component.ts ***!
  \**********************************************************/
/*! exports provided: PhotoGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoGalleryComponent", function() { return PhotoGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PhotoGalleryComponent {
    constructor() { }
    ngOnInit() {
    }
}
PhotoGalleryComponent.??fac = function PhotoGalleryComponent_Factory(t) { return new (t || PhotoGalleryComponent)(); };
PhotoGalleryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PhotoGalleryComponent, selectors: [["app-photo-gallery"]], decls: 2, vars: 0, template: function PhotoGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "photo-gallery works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaG90by1nYWxsZXJ5LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "gIdD":
/*!**********************************************************!*\
  !*** ./src/app/display-photo/display-photo.component.ts ***!
  \**********************************************************/
/*! exports provided: DisplayPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayPhotoComponent", function() { return DisplayPhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DisplayPhotoComponent {
    constructor() { }
    ngOnInit() {
    }
}
DisplayPhotoComponent.??fac = function DisplayPhotoComponent_Factory(t) { return new (t || DisplayPhotoComponent)(); };
DisplayPhotoComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DisplayPhotoComponent, selectors: [["app-display-photo"]], decls: 2, vars: 0, template: function DisplayPhotoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "display-photo works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNwbGF5LXBob3RvLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "lCTO":
/*!******************************************************!*\
  !*** ./src/app/photo-thumb/photo-thumb.component.ts ***!
  \******************************************************/
/*! exports provided: PhotoThumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoThumbComponent", function() { return PhotoThumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PhotoThumbComponent {
    constructor() { }
    ngOnInit() {
    }
}
PhotoThumbComponent.??fac = function PhotoThumbComponent_Factory(t) { return new (t || PhotoThumbComponent)(); };
PhotoThumbComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PhotoThumbComponent, selectors: [["app-photo-thumb"]], decls: 2, vars: 0, template: function PhotoThumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "photo-thumb works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaG90by10aHVtYi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "szs5":
/*!****************************************************************!*\
  !*** ./src/app/input-photo-form/input-photo-form.component.ts ***!
  \****************************************************************/
/*! exports provided: InputPhotoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPhotoFormComponent", function() { return InputPhotoFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class InputPhotoFormComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            _id: [''],
            filename: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            descripton: [''],
            location: [''],
            people: [''],
            datetime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            path: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
}
InputPhotoFormComponent.??fac = function InputPhotoFormComponent_Factory(t) { return new (t || InputPhotoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
InputPhotoFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: InputPhotoFormComponent, selectors: [["app-input-photo-form"]], decls: 44, vars: 1, consts: [[1, "form-group"], ["for", "_id", 1, "control-label"], ["type", "text", "id", "_id", "name", "_id", 1, "form-control"], ["for", "filename", 1, "control-label"], ["type", "text", "id", "filename", "name", "filename", 1, "form-control"], ["for", "type", 1, "control-label"], ["type", "text", "id", "type", "name", "type", 1, "form-control"], ["for", "title", 1, "control-label"], ["type", "text", "id", "title", "name", "title", 1, "form-control"], ["for", "description", 1, "control-label"], ["type", "text", "id", "description", "name", "description", 1, "form-control"], ["for", "location", 1, "control-label"], ["type", "text", "id", "location", "name", "location", 1, "form-control"], ["for", "people", 1, "control-label"], ["type", "text", "id", "people", "name", "people", 1, "form-control"], ["for", "datetime", 1, "control-label"], ["type", "text", "id", "datetime", "name", "datetime", 1, "form-control"], ["for", "comment", 1, "control-label"], ["type", "text", "id", "comment", "name", "comment", 1, "form-control"], ["for", "path", 1, "control-label"], ["type", "text", "id", "path", "name", "path", "readonly", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]], template: function InputPhotoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Filename");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Desciption");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "People");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Datetime");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](32, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](36, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "Path");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](40, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.buttonText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC1waG90by1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _display_photo_display_photo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-photo/display-photo.component */ "gIdD");
/* harmony import */ var _input_photo_form_input_photo_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-photo-form/input-photo-form.component */ "szs5");
/* harmony import */ var _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo-gallery/photo-gallery.component */ "ae+E");
/* harmony import */ var _photo_thumb_photo_thumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photo-thumb/photo-thumb.component */ "lCTO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        component: _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_3__["PhotoGalleryComponent"]
    },
    {
        path: 'photo/create',
        component: _input_photo_form_input_photo_form_component__WEBPACK_IMPORTED_MODULE_2__["InputPhotoFormComponent"]
    },
    {
        path: 'photo/:id',
        component: _display_photo_display_photo_component__WEBPACK_IMPORTED_MODULE_1__["DisplayPhotoComponent"]
    },
    {
        path: 'thumb/:id',
        component: _photo_thumb_photo_thumb_component__WEBPACK_IMPORTED_MODULE_4__["PhotoThumbComponent"]
    },
    {
        path: 'photo/update/:id',
        component: _input_photo_form_input_photo_form_component__WEBPACK_IMPORTED_MODULE_2__["InputPhotoFormComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map