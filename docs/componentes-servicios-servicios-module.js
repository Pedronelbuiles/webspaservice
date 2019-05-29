(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-servicios-servicios-module"],{

/***/ "./src/app/componentes/servicios/servicios.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/componentes/servicios/servicios.module.ts ***!
  \***********************************************************/
/*! exports provided: ServiciosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosPageModule", function() { return ServiciosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicios.page */ "./src/app/componentes/servicios/servicios.page.ts");







var routes = [
    {
        path: '',
        component: _servicios_page__WEBPACK_IMPORTED_MODULE_6__["ServiciosPage"]
    }
];
var ServiciosPageModule = /** @class */ (function () {
    function ServiciosPageModule() {
    }
    ServiciosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_servicios_page__WEBPACK_IMPORTED_MODULE_6__["ServiciosPage"]]
        })
    ], ServiciosPageModule);
    return ServiciosPageModule;
}());



/***/ }),

/***/ "./src/app/componentes/servicios/servicios.page.html":
/*!***********************************************************!*\
  !*** ./src/app/componentes/servicios/servicios.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button menu=\"first\"></ion-menu-button>\n        </ion-buttons>\n    <ion-title text-center>servicios</ion-title>\n    <ion-button slot=\"end\" fill=\"clear\" (click)=\"presentActionSheet()\">\n        <ion-icon style=\"color: white;\" name=\"more\"></ion-icon>\n      </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list *ngIf=\"arrayTest != null\">\n    <ion-card *ngFor=\"let item of arrayTest\">\n      <ion-item color=\"#472d9a\">\n          <ion-icon slot=\"start\" name=\"analytics\"></ion-icon>\n          <ion-label>Servicio solicitado{{ item.servicio }}</ion-label>\n        </ion-item>\n          <ion-card-content>\n            <h5>El servicio es para  {{ item.nombre }}</h5>\n            \n            <p>Dirección para el servicio {{ item.direccion }}</p>\n            \n            <h4>El valor del servicio es de ${{ item.precio }}</h4>\n          </ion-card-content>\n    </ion-card>\n  </ion-list>\n  <ion-item *ngIf=\"arrayTest === null\">\n    <ion-label>Usted no ha solitado Servicios</ion-label>\n  </ion-item>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/componentes/servicios/servicios.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/componentes/servicios/servicios.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3NlcnZpY2lvcy9zZXJ2aWNpb3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/componentes/servicios/servicios.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/componentes/servicios/servicios.page.ts ***!
  \*********************************************************/
/*! exports provided: ServiciosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosPage", function() { return ServiciosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_datos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/datos.service */ "./src/app/servicios/datos.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");






var ServiciosPage = /** @class */ (function () {
    function ServiciosPage(activeRouter, dataService, actionSheetController, auth) {
        this.activeRouter = activeRouter;
        this.dataService = dataService;
        this.actionSheetController = actionSheetController;
        this.auth = auth;
    }
    ServiciosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.idLocal = '';
        this.id = this.activeRouter.snapshot.paramMap.get('id');
        this.dataService.getUsers().subscribe(function (datos) {
            _this.datosFire = datos;
            _this.leerData(_this.id);
        });
    };
    ServiciosPage.prototype.leerData = function (id) {
        for (var index = 0; index < this.datosFire.length; index++) {
            var element = this.datosFire[index];
            if (id == element.uid) {
                if (element.servicio != null) {
                    this.arrayTest = element.servicio;
                }
                else {
                    this.arrayTest = null;
                }
            }
        }
    };
    ServiciosPage.prototype.onlogout = function () {
        this.auth.logout();
    };
    ServiciosPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Opciones',
                            buttons: [{
                                    text: 'Salir',
                                    role: 'destructive',
                                    icon: 'log-out',
                                    handler: function () {
                                        _this.onlogout();
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServiciosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicios',
            template: __webpack_require__(/*! ./servicios.page.html */ "./src/app/componentes/servicios/servicios.page.html"),
            styles: [__webpack_require__(/*! ./servicios.page.scss */ "./src/app/componentes/servicios/servicios.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _servicios_datos_service__WEBPACK_IMPORTED_MODULE_3__["DatosService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ServiciosPage);
    return ServiciosPage;
}());



/***/ })

}]);
//# sourceMappingURL=componentes-servicios-servicios-module.js.map