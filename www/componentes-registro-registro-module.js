(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-registro-registro-module"],{

/***/ "./src/app/componentes/registro/registro.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/componentes/registro/registro.module.ts ***!
  \*********************************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.page */ "./src/app/componentes/registro/registro.page.ts");







var routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]
    }
];
var RegistroPageModule = /** @class */ (function () {
    function RegistroPageModule() {
    }
    RegistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
        })
    ], RegistroPageModule);
    return RegistroPageModule;
}());



/***/ }),

/***/ "./src/app/componentes/registro/registro.page.html":
/*!*********************************************************!*\
  !*** ./src/app/componentes/registro/registro.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title text-center>registro</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <img class=\"icon\" src=\"assets/icon/vela.svg\">\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Nombre</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"name\" name=\"name\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Correo electrónico</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"email\" name=\"email\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Contraseña</ion-label>\r\n    <ion-input type=\"password\" [(ngModel)]=\"password\" name=\"password\"></ion-input>\r\n  </ion-item>\r\n  <br>\r\n  <ion-button  expand=\"full\" (click)=\"onsubmitRegister()\">\r\n    Registrarse\r\n  </ion-button>\r\n  <br>\r\n  <p text-center routerLink=\"/login\">Ya tengo cuenta</p>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/componentes/registro/registro.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/componentes/registro/registro.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/componentes/registro/registro.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/componentes/registro/registro.page.ts ***!
  \*******************************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegistroPage = /** @class */ (function () {
    function RegistroPage(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.id = null;
    }
    RegistroPage.prototype.ngOnInit = function () {
    };
    RegistroPage.prototype.onsubmitRegister = function () {
        var _this = this;
        this.afAuth.register(this.email, this.password, this.name).then(function (auth) {
            _this.id = auth['user'].uid;
            _this.router.navigate(['/inicio', _this.id]);
        }).catch(function (err) { return alert(err); });
    };
    RegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.page.html */ "./src/app/componentes/registro/registro.page.html"),
            styles: [__webpack_require__(/*! ./registro.page.scss */ "./src/app/componentes/registro/registro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegistroPage);
    return RegistroPage;
}());



/***/ })

}]);
//# sourceMappingURL=componentes-registro-registro-module.js.map