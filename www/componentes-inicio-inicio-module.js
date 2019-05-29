(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-inicio-inicio-module"],{

/***/ "./src/app/componentes/inicio/inicio.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/componentes/inicio/inicio.module.ts ***!
  \*****************************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio.page */ "./src/app/componentes/inicio/inicio.page.ts");







var routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]
    }
];
var InicioPageModule = /** @class */ (function () {
    function InicioPageModule() {
    }
    InicioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
        })
    ], InicioPageModule);
    return InicioPageModule;
}());



/***/ }),

/***/ "./src/app/componentes/inicio/inicio.page.html":
/*!*****************************************************!*\
  !*** ./src/app/componentes/inicio/inicio.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"first\"></ion-menu-button>\n      </ion-buttons>\n    <ion-title text-center>inicio</ion-title>\n    <ion-button slot=\"end\" fill=\"clear\" (click)=\"presentActionSheet()\">\n        <ion-icon style=\"color: white;\" name=\"more\"></ion-icon>\n      </ion-button>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n    \n      <ion-item>\n          <ion-label>Servicios Disponibles</ion-label>\n          <ion-icon name=\"information-circle\" size=\"large\" slot=\"end\"></ion-icon>\n        </ion-item>\n\n      <ion-list>\n            <ion-card *ngFor=\"let item of items\">\n                <ion-item color=\"tertiary\">\n                  <ion-icon slot=\"start\" [name]=\"item.icon\"></ion-icon>\n                  <ion-label>{{ item.nombre }}</ion-label>\n                </ion-item>\n                <ion-card-content>\n                  <h3>Precio</h3>\n                  <p>{{ item.precio }}</p>\n                  <ion-button expand=\"full\" (click)=\"openForm(id,item.nombre,item.precio)\">\n                    Realizar pedido\n                  </ion-button>\n                </ion-card-content>\n              </ion-card>\n      </ion-list>\n      \n</ion-content>\n"

/***/ }),

/***/ "./src/app/componentes/inicio/inicio.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/componentes/inicio/inicio.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2luaWNpby9pbmljaW8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/componentes/inicio/inicio.page.ts":
/*!***************************************************!*\
  !*** ./src/app/componentes/inicio/inicio.page.ts ***!
  \***************************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../formulario/formulario.component */ "./src/app/componentes/formulario/formulario.component.ts");







;
var InicioPage = /** @class */ (function () {
    function InicioPage(actionSheetController, auth, activeRouter, modal) {
        this.actionSheetController = actionSheetController;
        this.auth = auth;
        this.activeRouter = activeRouter;
        this.modal = modal;
        this.id = null;
        this.items = [
            {
                icon: 'pin',
                nombre: 'Servicio 1',
                precio: 3000
            },
            {
                icon: 'pin',
                nombre: 'Servicio 2',
                precio: 4000
            },
            {
                icon: 'pin',
                nombre: 'Servicio 3',
                precio: 5000
            },
            {
                icon: 'pin',
                nombre: 'Servicio 4',
                precio: 20000
            },
            {
                icon: 'pin',
                nombre: 'Servicio 5',
                precio: 7000
            },
            {
                icon: 'pin',
                nombre: 'Servicio 6',
                precio: 10000
            },
            {
                icon: 'pin',
                nombre: 'Servicio 7',
                precio: 100000
            },
            {
                icon: 'pin',
                nombre: 'Servicio 8',
                precio: 13000
            },
            {
                icon: 'pin',
                nombre: 'Servicio 9',
                precio: 30000
            }
        ];
    }
    InicioPage.prototype.ngOnInit = function () {
        this.id = this.activeRouter.snapshot.paramMap.get('id');
    };
    InicioPage.prototype.openForm = function (id, servicio, precio) {
        this.modal.create({
            component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["FormularioComponent"],
            componentProps: {
                id: id,
                servicio: servicio,
                precio: precio
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    InicioPage.prototype.onlogout = function () {
        this.auth.logout();
    };
    InicioPage.prototype.presentActionSheet = function () {
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
    InicioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.page.html */ "./src/app/componentes/inicio/inicio.page.html"),
            styles: [__webpack_require__(/*! ./inicio.page.scss */ "./src/app/componentes/inicio/inicio.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], InicioPage);
    return InicioPage;
}());



/***/ })

}]);
//# sourceMappingURL=componentes-inicio-inicio-module.js.map