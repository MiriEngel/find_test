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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_directives/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/_directives/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_directives/dropdown.components.ts":
/*!****************************************************!*\
  !*** ./src/app/_directives/dropdown.components.ts ***!
  \****************************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = /** @class */ (function () {
    function DropdownDirective(el) {
        this.el = el;
    }
    //Binding click to Add show class 
    DropdownDirective.prototype.onclick = function () {
        var parent = this.el.nativeElement; //parent element
        parent.classList.toggle('show');
        var child = [].filter.call(this.el.nativeElement.children, function (ele) {
            return ele.classList.contains('dropdown-menu');
        }); //Identify the child element on dropdown clicked- dropdwon menu
        if (child.length) {
            child[0].classList.toggle('show');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "onclick", null);
    DropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdown]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/_directives/index.ts":
/*!**************************************!*\
  !*** ./src/app/_directives/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
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


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    var body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username or password is incorrect' } });
                }
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username "' + newUser_1.username + '" is already taken' } });
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_models/index.ts":
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/*! exports provided: User, Product, Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/app/_models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["User"]; });

/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "./src/app/_models/product.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _product__WEBPACK_IMPORTED_MODULE_1__["Product"]; });

/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications */ "./src/app/_models/notifications.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _notifications__WEBPACK_IMPORTED_MODULE_2__["Notification"]; });






/***/ }),

/***/ "./src/app/_models/notifications.ts":
/*!******************************************!*\
  !*** ./src/app/_models/notifications.ts ***!
  \******************************************/
/*! exports provided: Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
var Notification = /** @class */ (function () {
    function Notification(message, read) {
        this.message = message;
        this.read = read;
    }
    return Notification;
}());



/***/ }),

/***/ "./src/app/_models/product.ts":
/*!************************************!*\
  !*** ./src/app/_models/product.ts ***!
  \************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/_models/user.ts":
/*!*********************************!*\
  !*** ./src/app/_models/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/authenticate", { email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                _this.user = user;
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(__assign({}, user, { email: email })));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return (!!this.user);
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());

// import 'rxjs/Rx';
// import {Injectable} from '@angular/core';
// import {Http, Response, Headers, RequestOptions} from '@angular/http';
// import {Observable} from 'rxjs/Observable';
// @Injectable()
// export class AuthenticationService {
// 	public user = window['user'];
// 	private _signinURL = 'api/auth/signin';
// 	private _signupURL = 'api/auth/signup';
// 	constructor (private http: Http) {
// 	}
// 	isLoggedIn(): boolean {
// 		return (!!this.user);
// 	}
// 	signin(credentials: any): Observable<any> {
//     	let body = JSON.stringify(credentials);
//     	let headers = new Headers({ 'Content-Type': 'application/json' });
//     	let options = new RequestOptions({ headers: headers });
// 		return this.http.post(this._signinURL, body, options)
//                         .map(res => this.user = res.json())
//                         .catch(this.handleError)
//   	}
//   	signup(user: any): Observable<any> {
//     	let body = JSON.stringify(user);
//     	let headers = new Headers({ 'Content-Type': 'application/json' });
//     	let options = new RequestOptions({ headers: headers });
// 		return this.http.post(this._signupURL, body, options)
//                         .map(res => this.user = res.json())
//                         .catch(this.handleError)
//   	}
// 	private handleError(error: Response) {
// 		console.error(error);
// 		return Observable.throw(error.json().message || 'Server error');
// 	}
// }


/***/ }),

/***/ "./src/app/_services/home.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/home.service.ts ***!
  \*******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { FlightFilter } from './flight-filter';



var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.getRecentNotification = function (userId) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/notifications", { userId: userId });
    };
    HomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/_services/i18n.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/i18n.service.ts ***!
  \*******************************************/
/*! exports provided: extract, I18nService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extract", function() { return extract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nService", function() { return I18nService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Logger } from './logger.service';
// import enUS from '../../translations/en-US.json';
// import frFR from '../../translations/fr-FR.json';
var enUS = __webpack_require__(/*! ../../translations/en-US.json */ "./src/translations/en-US.json");
var frFR = __webpack_require__(/*! ../../translations/fr-FR.json */ "./src/translations/fr-FR.json");
//const log = new Logger('I18nService');
var languageKey = 'language';
/**
 * Pass-through function to mark a string for translation extraction.
 * Running `npm translations:extract` will include the given string by using this.
 * @param {string} s The string to extract for translation.
 * @return {string} The same string.
 */
function extract(s) {
    return s;
}
var I18nService = /** @class */ (function () {
    function I18nService(translateService) {
        this.translateService = translateService;
        // Embed languages to avoid extra HTTP requests
        translateService.setTranslation('en-US', enUS);
        translateService.setTranslation('fr-FR', frFR);
    }
    /**
     * Initializes i18n for the application.
     * Loads language from local storage if present, or sets default language.
     * @param {!string} defaultLanguage The default language to use.
     * @param {Array.<String>} supportedLanguages The list of supported languages.
     */
    I18nService.prototype.init = function (defaultLanguage, supportedLanguages) {
        this.defaultLanguage = defaultLanguage;
        this.supportedLanguages = supportedLanguages;
        this.language = '';
        this.translateService.onLangChange.subscribe(function (event) {
            localStorage.setItem(languageKey, event.lang);
        });
    };
    Object.defineProperty(I18nService.prototype, "language", {
        /**
         * Gets the current language.
         * @return {string} The current language code.
         */
        get: function () {
            return this.translateService.currentLang;
        },
        /**
         * Sets the current language.
         * Note: The current language is saved to the local storage.
         * If no parameter is specified, the language is loaded from local storage (if present).
         * @param {string} language The IETF language code to set.
         */
        set: function (language) {
            language = language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang();
            var isSupportedLanguage = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["includes"])(this.supportedLanguages, language);
            // If no exact match is found, search without the region
            if (language && !isSupportedLanguage) {
                language = language.split('-')[0];
                language = this.supportedLanguages.find(function (supportedLanguage) { return supportedLanguage.startsWith(language); }) || '';
                isSupportedLanguage = Boolean(language);
            }
            // Fallback if language is not supported
            if (!isSupportedLanguage) {
                language = this.defaultLanguage;
            }
            //log.debug(`Language set to ${language}`);
            this.translateService.use(language);
        },
        enumerable: true,
        configurable: true
    });
    I18nService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], I18nService);
    return I18nService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: extract, I18nService, AlertService, AuthenticationService, UserService, LogLevel, Logger, HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });

/* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n.service */ "./src/app/_services/i18n.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extract", function() { return _i18n_service__WEBPACK_IMPORTED_MODULE_3__["extract"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nService", function() { return _i18n_service__WEBPACK_IMPORTED_MODULE_3__["I18nService"]; });

/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger.service */ "./src/app/_services/logger.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_4__["LogLevel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_4__["Logger"]; });

/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.service */ "./src/app/_services/home.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return _home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]; });









/***/ }),

/***/ "./src/app/_services/logger.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/logger.service.ts ***!
  \*********************************************/
/*! exports provided: LogLevel, Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.service';
 *
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */
/**
 * The possible log levels.
 * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Off"] = 0] = "Off";
    LogLevel[LogLevel["Error"] = 1] = "Error";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger(source) {
        this.source = source;
    }
    /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     */
    Logger.enableProductionMode = function () {
        Logger.level = LogLevel.Warning;
    };
    /**
     * Logs messages or objects  with the debug level.
     * Works the same as console.log().
     */
    Logger.prototype.debug = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.log, LogLevel.Debug, objects);
    };
    /**
     * Logs messages or objects  with the info level.
     * Works the same as console.log().
     */
    Logger.prototype.info = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.info, LogLevel.Info, objects);
    };
    /**
     * Logs messages or objects  with the warning level.
     * Works the same as console.log().
     */
    Logger.prototype.warn = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.warn, LogLevel.Warning, objects);
    };
    /**
     * Logs messages or objects  with the error level.
     * Works the same as console.log().
     */
    Logger.prototype.error = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.error, LogLevel.Error, objects);
    };
    Logger.prototype.log = function (func, level, objects) {
        var _this = this;
        if (level <= Logger.level) {
            var log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
            func.apply(console, log);
            Logger.outputs.forEach(function (output) { return output.apply(output, [_this.source, level].concat(objects)); });
        }
    };
    /**
     * Current logging level.
     * Set it to LogLevel.Off to disable logs completely.
     */
    Logger.level = LogLevel.Debug;
    /**
     * Additional log outputs.
     */
    Logger.outputs = [];
    return Logger;
}());



/***/ }),

/***/ "./src/app/_services/product.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/product.service.ts ***!
  \**********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { FlightFilter } from './flight-filter';



var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getAll = function (userId) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/products", { userId: userId });
    };
    ProductService.prototype.getById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/products/" + id);
    };
    ProductService.prototype.update = function (product) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/products/" + product._id, product);
    };
    ProductService.prototype.delete = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/products/" + id);
    };
    ProductService.prototype.add = function (product, userId) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/products/" + userId, product);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + id);
    };
    UserService.prototype.register = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/register", user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + id);
    };
    UserService.prototype.addImei = function (imei, id) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/imei/" + id, { imei: imei });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"\" style=\"margin:0px;padding:0px\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <header></header>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n                <side></side>\r\n            </div>\r\n            <div class=\"col-sm-10\">\r\n                <alert></alert>\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n            </div>\r\n    </div>\r\n"

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
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
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
    function AppComponent(i18nService) {
        this.i18nService = i18nService;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            // Logger.enableProductionMode();
        }
        // Setup translations
        this.i18nService.init(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].defaultLanguage, _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].supportedLanguages);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_app_services__WEBPACK_IMPORTED_MODULE_2__["I18nService"]]
        }),
        __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_2__["I18nService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.module */ "./src/app/product/product.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _directives_dropdown_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_directives/dropdown.components */ "./src/app/_directives/dropdown.components.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_directives */ "./src/app/_directives/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _sideBar_sideBar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sideBar/sideBar.component */ "./src/app/sideBar/sideBar.component.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';
// used to create fake backend
//import { fakeBackendProvider } from './_helpers';














//import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
//let config: SocketIoConfig;
// let user = <any>localStorage.getItem('currentUser');
// if (user) {
//     user = JSON.parse(user);
//     if ('token' in user)
//         config = { url: 'http://' + window.location.hostname + ':4000', options: { query: "token=" + user.token + '&iemi=' + user.imei } };
// }
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["routing"],
                _agm_core__WEBPACK_IMPORTED_MODULE_19__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDm3MIEQgeB21x6llnIX-76fvpxC3eqw0Q',
                    libraries: ['places']
                }),
                _product_product_module__WEBPACK_IMPORTED_MODULE_5__["ProductModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot(),
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _directives__WEBPACK_IMPORTED_MODULE_10__["AlertComponent"],
                _directives_dropdown_components__WEBPACK_IMPORTED_MODULE_9__["DropdownDirective"],
                _home__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _login__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _register__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"], _sideBar_sideBar_component__WEBPACK_IMPORTED_MODULE_16__["SideComponent"]
            ],
            providers: [
                _guards__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
                _services__WEBPACK_IMPORTED_MODULE_13__["AlertService"],
                _services__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
                _services__WEBPACK_IMPORTED_MODULE_13__["UserService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_12__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_12__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");





var appRoutes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"logged\" [ngClass] = \"''\"> <!--[ngClass] = \"toggledClass?'sidebar-toggled':''\" -->\r\n    \r\n\r\n<nav class=\"navbar navbar-expand navbar-dark bg-dark static-top\">\r\n        \r\n         \r\n\r\n              <a class=\"navbar-brand mr-1\" href=\"\">moveProtect  </a>\r\n        \r\n            <!-- <div class=\"navbar-brand mr-1\">    Hi {{currentUser.firstName}}!</div>div> -->\r\n              <!-- Navbar Search -->\r\n              <form class=\"d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0\">\r\n                <div class=\"input-group\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-primary\" type=\"button\">\r\n                      <i class=\"fas fa-search\"></i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n        \r\n              <!-- Navbar -->\r\n              <ul class=\"navbar-nav ml-auto ml-md-0\">\r\n      \r\n                  <!-- <li class=\"nav-item dropdown\" appDropdown>\r\n                      <a class=\"nav-link dropdown-toggle\"  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Username\r\n                      </a>\r\n                      <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                         <a class=\"dropdown-item\" >Profile 2</a>\r\n                         <a class=\"dropdown-item\" >Logout 2</a>\r\n                      </div>\r\n                    </li> -->\r\n                    <li class=\"nav-item\"  placement=\"bottom-right\" appDropdown>\r\n                        <a id=\"language-dropdown\" class=\"nav-link\" >{{currentLanguage}}</a>\r\n                        <div  class=\"dropdown-menu dropdown-menu-right \" aria-labelledby=\"language-dropdown\">\r\n                          <a class=\"dropdown-item\" *ngFor=\"let language of languages\" (click)=\"setLanguage(language)\">\r\n                            {{language}}\r\n                          </a>\r\n                        </div>\r\n                      </li>\r\n                <li class=\"nav-item dropdown no-arrow mx-1\" appDropdown>\r\n                  <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"alertsDropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"fas fa-bell fa-fw\"></i>\r\n                    <span class=\"badge badge-danger\" style=\"margin-left:-0.25rem!important\">{{countNewMessages}}</span>\r\n                  </a>\r\n                  <div  class=\"dropdown-menu dropdown-menu-right \" aria-labelledby=\"alertsDropdown\">\r\n                    <a class=\"dropdown-item\" href=\"#\"><span translate>About</span></a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                  </div>\r\n                </li>\r\n                <li class=\"nav-item dropdown no-arrow mx-1\" appDropdown>\r\n                  <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"messagesDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"fas fa-envelope fa-fw\"></i>\r\n                    <span class=\"badge badge-danger\" style=\"margin-left:-0.25rem!important\">7</span>\r\n                  </a>\r\n                  <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"messagesDropdown\">\r\n                    <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                  </div>\r\n                </li>\r\n                <li class=\"nav-item dropdown no-arrow\" appDropdown>\r\n                  <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"fas fa-user-circle fa-fw\"></i>\r\n                  </a>\r\n                  <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"userDropdown\">\r\n                    <a class=\"dropdown-item\" href=\"#\">Settings</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Activity Log</a>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <a class=\"dropdown-item\"  [routerLink]=\"['/login']\">Logout</a>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n        \r\n            </nav>\r\n          </div>  \r\n      <!-- <div id=\"wrapper\"> -->\r\n        \r\n    "

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_i18n_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/i18n.service */ "./src/app/_services/i18n.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/first */ "./node_modules/rxjs/internal/operators/first.js");
/* harmony import */ var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(i18nService, homeService /*private _authenticationService: AuthenticationService*/) {
        var _this = this;
        this.i18nService = i18nService;
        this.messages = [];
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        if (this.user) {
            if ('token' in this.user)
                this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__["connect"]("http://" + window.location.hostname + ":4000?token=" + this.user.token + "&iemi=" + this.user.imei);
            //  config = { url: 'http://' + window.location.hostname + ':4000', options: { query: "token=" + user.token + '&iemi=' + user.imei } };
        }
        homeService.getRecentNotification(this.user._id).pipe(Object(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (notifications) {
            return _this.messages = notifications;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.on('alert', function (msg) {
            _this.messages.push(new _models__WEBPACK_IMPORTED_MODULE_2__["Notification"](msg, false));
        });
    };
    HeaderComponent.prototype.setLanguage = function (language) {
        this.i18nService.language = language;
    };
    Object.defineProperty(HeaderComponent.prototype, "currentLanguage", {
        get: function () {
            return this.i18nService.language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "languages", {
        get: function () {
            return this.i18nService.supportedLanguages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "logged", {
        get: function () {
            this.user = localStorage.getItem('currentUser');
            if (this.user) {
                this.user = JSON.parse(this.user);
                if ('token' in this.user)
                    return true;
                //this.user = _authenticationService.;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "countNewMessages", {
        get: function () {
            return this.messages.filter(function (msg) { return msg.read == false; }).length;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            providers: [_services__WEBPACK_IMPORTED_MODULE_3__["HomeService"]]
        }),
        __metadata("design:paramtypes", [_services_i18n_service__WEBPACK_IMPORTED_MODULE_1__["I18nService"], _services__WEBPACK_IMPORTED_MODULE_3__["HomeService"] /*private _authenticationService: AuthenticationService*/])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<body id=\"page-top\" >\r\n\r\n <!-- <div class=\"container page\">\r\n        <div class=\"row\">\r\n        \r\n              <div id=\"content-wrapper\"> -->\r\n    \r\n               \r\n<!--         \r\n<h1>Hi {{currentUser.firstName}}!</h1>\r\n\r\n\r\n<div>\r\n   add iemei:\r\n   <input #box (keyup.enter)=\"addIemei(box.value)\">\r\n\r\n<button  (click)=\"addIemei(box.value)\">save</button>>\r\n\r\n    <ul>\r\n        <li *ngFor=\"let user of users\">{{user.firstName}} {{user.lastName}}</li>\r\n    </ul>\r\n</div> -->\r\n\r\n<!-- <div class=\"container\" fxLayout=\"column\" style=\"margin:0px\">\r\n    <div class=\"map\" fxFlex=\"1 1 100%\" #map>\r\n      <agm-map [style.height.px]=\"map.offsetHeight\" [latitude]=\"lat\" [longitude]=\"lng\"></agm-map>\r\n    </div>\r\n  </div> -->\r\n  <div class=\"\" fxLayout=\"column\" style=\"margin:0px;padding:0px\">\r\n  <agm-map  [zoom]=\"12\" [latitude]=\"lat\" [longitude]=\"lng\">\r\n  <!-- <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker> -->\r\n  <!-- [iconUrl]=\"customIcon\" -->\r\n  <agm-marker \r\n  *ngFor=\"let marker of markers; let i = index\"\r\n  (markerClick)=\"markerClick(infoWindow, marker)\"\r\n  \r\n  [latitude]=\"marker.lat\"\r\n  [longitude]=\"marker.long\">\r\n\r\n<agm-info-window #infoWindow>\r\n  <strong>info window</strong>\r\n</agm-info-window>\r\n\r\n</agm-marker>\r\n</agm-map>  \r\n</div>\r\n <!-- </div>\r\n</div>\r\n</div> \r\n         -->\r\n</body>\r\n<style>\r\n     agm-map {\r\n    height:100vh;\r\n    width:100%;\r\n} \r\n</style>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <script src=\"https://unpkg.com/@reactivex/rxjs@6.1.0/dist/global/rxjs.umd.js\"></script>\r\n<script>\r\n    const { WebSocketSubject } = rxjs.webSocket;\r\n    const socket$ = new WebSocketSubject('ws://localhost:4000');\r\n    socket$.subscribe(\r\n        \r\n            (data) => console.log(data),\r\n            (err) => console.error(err),\r\n            () => console.warn('Completed!')\r\n        );\r\n    socket$.next({\r\n        event: 'events',\r\n        data: 'test',\r\n    });\r\n    console.log('here')\r\n</script> -->\r\n\r\n<!-- <h1>Hi {{currentUser.firstName}}!</h1>\r\n<p>You're logged in with Angular 6!!</p>\r\n<h3>All registered users:</h3>\r\n<ul>\r\n    <li *ngFor=\"let user of users\">\r\n        {{user.imei}} ({{user.firstName}} {{user.lastName}})\r\n        - <a (click)=\"deleteUser(user.id)\" class=\"text-danger\">Delete</a>\r\n    </li>\r\n</ul>\r\n<p><a [routerLink]=\"['/login']\">Logout</a></p> -->\r\n\r\n\r\n\r\n<!-- <script src=\"https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js\"></script>\r\n\r\n<h1>HELLLPPPPP</h1>\r\n\r\n<body>\r\n  <div id=\"map\"></div>\r\n  <script>\r\n    var map;\r\n    var marker;\r\n  \r\n    var pos = { lat: 32.086397, lng: 34.788485 }\r\n    let socket = io.connect('http://localhost:4000');\r\n    socket.on('news', function (data) {\r\n      console.log(data);\r\n      socket.emit('my other event', { my: 'data' });\r\n    });\r\n\r\n    socket.on('position', function (data) {\r\n      console.log(data);\r\n      var latlng = new google.maps.LatLng(data.lat, data.lng)//Object.values(data));\r\n      marker.setPosition(latlng);\r\n\r\n    });\r\n\r\n    socket.on('data', function (data) {\r\n      console.log(data)\r\n      try{\r\n      if(data.data.data.latitude){\r\n        var latlng = new google.maps.LatLng(data.data.data.latitude, data.data.data.longitude)//Object.values(data));\r\n      marker.setPosition(latlng);\r\n      map.setCenter(latlng);\r\n      }\r\n    }catch(err){}\r\n\r\n\r\n      if(_.get(data,'data.data.latitude_raw'))\r\n     alert('dattt in console');\r\n\r\n    });\r\n\r\n    function initMap() {\r\n\r\n      map = new google.maps.Map(document.getElementById('map'), {\r\n        center: { lat: 32.086397, lng: 34.788485 },\r\n        zoom: 17\r\n      });\r\n\r\n      marker = new google.maps.Marker({\r\n        position: pos,\r\n        map: map,\r\n        title: 'Hello World!'\r\n      });\r\n    }\r\n  </script>\r\n  <script src=\"https://raw.githubusercontent.com/lodash/lodash/4.17.10-npm/core.js\"></script>\r\n\r\n  \r\n</body>\r\n\r\n<style>\r\n  /* Always set the map height explicitly to define the size of the div\r\n   * element that contains the map. */\r\n\r\n  #map {\r\n    height: 100%;\r\n  }\r\n\r\n  /* Optional: Makes the sample page fill the window. */\r\n\r\n  html,\r\n  body {\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n</style> -->\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: Marker, HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Marker = /** @class */ (function () {
    function Marker(lat, long, imei) {
        this.lat = lat;
        this.long = long;
        this.imei = imei;
    }
    return Marker;
}());

var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService
    // private dropdownDirective:DropdownDirective
    /*private chatService: ChatService*/ ) {
        //  this.markers.push(new Marker(this.lat+0.8,this.lng,'hghj'))
        //  this.markers.push( new Marker(this.lat+0.1,this.lng,'333'))
        //  setTimeout(() => {
        //       this.testSocket({data:{imei:'1234',latitude:this.lat+0.3,longitude:this.lng}})
        //  }, 5000);
        this.userService = userService;
        this.title = 'My first AGM project';
        this.lat = 43.678418;
        this.lng = -79.809007;
        this.toggledClass = true;
        this.users = [];
        this.markers = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var user = localStorage.getItem('currentUser');
        if (user) {
            user = JSON.parse(user);
            if ('token' in user)
                this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__["connect"]("http://" + window.location.hostname + ":4000?token=" + user.token + "&iemi=" + user.imei);
            //  config = { url: 'http://' + window.location.hostname + ':4000', options: { query: "token=" + user.token + '&iemi=' + user.imei } };
        }
        // chatService.getMessage().subscribe(msg => {
        //     console.log("Response from websocket: ", msg);
        //     if (msg.data.latitude) {
        //         this.lat = msg.data.latitude;
        //         this.lng = msg.data.longitude;
        //     }
        // });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAllUsers();
        this.socket.emit('init');
        this.socket.on('message', function (data) {
            console.log(data.msg);
        });
        this.socket.on('data', function (msg) {
            console.log("Response from websocket: ", msg);
            if (msg.data.imei && msg.data.latitude) {
                var index = _this.markers.findIndex(function (el) { return el.imei === msg.data.imei; });
                if (index >= 0)
                    _this.markers[index] = new Marker(msg.data.latitude, msg.data.longitude, msg.data.imei);
                else
                    _this.markers.push(new Marker(msg.data.latitude, msg.data.longitude, msg.data.imei));
            }
            // if (msg.data.latitude) {
            //     this.lat = msg.data.latitude;
            //     this.lng = msg.data.longitude;
            // }
        });
    };
    HomeComponent.prototype.testSocket = function (msg) {
        if (msg.data.imei && msg.data.latitude) {
            var index = this.markers.findIndex(function (el) { return el.imei === msg.data.imei; });
            if (index >= 0)
                this.markers[index] = new Marker(msg.data.latitude, msg.data.longitude, msg.data.imei);
            else
                this.markers.push(new Marker(msg.data.latitude, msg.data.longitude, msg.data.imei));
        }
    };
    HomeComponent.prototype.markerClick = function (infoWin, marker) {
        alert('clicked');
    };
    HomeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function () {
            _this.loadAllUsers();
        });
    };
    HomeComponent.prototype.addIemei = function (imei) {
        this.userService.addImei(imei, this.currentUser._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            //this.users = users;
            alert('imei saved!');
        });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            _this.users = users;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
            // private dropdownDirective:DropdownDirective
            /*private chatService: ChatService*/ ])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: Marker, HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["Marker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\r\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n        <label for=\"email\">email</label>\r\n        <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.email.errors.required\">email is required</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n        <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/product/edit/product.edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product/edit/product.edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container page\">\r\n        <div class=\"row\">\r\n        \r\n              <div id=\"content-wrapper\"> \r\n    \r\n\r\n<div class=\"card\">\r\n    <div class=\"header\">\r\n        <h1 class=\"title\">product Detail</h1>\r\n    </div>\r\n    <div class=\"content\">\r\n    \r\n        <p *ngIf=\"errors\">{{ errors }}</p>\r\n    \r\n        <form >\r\n                \r\n            <!-- <div class=\"form-group\">\r\n                <label>Id:</label>\r\n                <input [(ngModel)]=\"product.id\" name=\"_id\" class=\"form-control\">\r\n            </div> -->\r\n            <div class=\"form-group\">\r\n                    <label>name:</label>\r\n                    <input [(ngModel)]=\"product.name\" name=\"name\" class=\"form-control\">\r\n                </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>imei:</label>\r\n                <input [(ngModel)]=\"product.imei\" name=\"imei\" class=\"form-control\">\r\n            </div>\r\n                \r\n            <div class=\"form-group\">\r\n                <label>details:</label>\r\n                <input [(ngModel)]=\"product.details\" name=\"details\" class=\"form-control\">\r\n            </div>\r\n                \r\n            <div class=\"form-group\">\r\n                <label>Created:</label>\r\n                <input [(ngModel)]=\"product.created\" name=\"date\" class=\"form-control\">\r\n            </div>\r\n        \r\n            <div class=\"form-group\">\r\n                <button\r\n                (click)=\"save(product)\"\r\n                class=\"btn btn-default\">Save</button>\r\n            </div>\r\n\r\n        </form>\r\n    \r\n    </div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/product/edit/product.edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product/edit/product.edit.component.ts ***!
  \********************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services/product.service */ "./src/app/_services/product.service.ts");
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_models */ "./src/app/_models/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(route, productService) {
        this.route = route;
        this.productService = productService;
        this.isNew = false;
        var u = localStorage.getItem('currentUser');
        if (u) {
            this.user = JSON.parse(u);
        }
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return p['id']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            if (id === 'new') {
                _this.isNew = true;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _app_models__WEBPACK_IMPORTED_MODULE_3__["Product"]());
            }
            return _this.productService.getById(id);
        }))
            .subscribe(function (product) {
            _this.product = new _app_models__WEBPACK_IMPORTED_MODULE_3__["Product"]();
            _this.errors = '';
        }, function (err) {
            _this.errors = 'Error loading';
        });
    };
    ProductEditComponent.prototype.save = function () {
        var _this = this;
        if (this.isNew) {
            this.productService.add(this.product, this.user._id).subscribe(function (prod) {
                //  this.product = prod; 
                _this.errors = 'Save was successful!';
            }, function (err) {
                _this.errors = 'Error saving';
            });
        }
        else {
            this.productService.update(this.product).subscribe(function (prod) {
                //  this.product = prod; 
                _this.errors = 'Save was successful!';
            }, function (err) {
                _this.errors = 'Error saving';
            });
        }
    };
    ProductEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product.edit',
            template: __webpack_require__(/*! ./product.edit.component.html */ "./src/app/product/edit/product.edit.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/product/list/product.list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product/list/product.list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container page\">\r\n        <div class=\"row\">\r\n        \r\n              <div id=\"content-wrapper\"> \r\n    \r\n      <div class=\"header\">\r\n        <h2 class=\"title\">Products: </h2>\r\n      </div>\r\n     <div >\r\n    \r\n        <form #f=\"ngForm\">\r\n\r\n          <!-- <div class=\"form-group\">\r\n            <label>From:</label>\r\n            <input [(ngModel)]=\"filter.from\" name=\"from\" class=\"form-control\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>To:</label>\r\n            <input [(ngModel)]=\"filter.to\" name=\"to\" class=\"form-control\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-default\">\r\n              Search\r\n            </button> -->\r\n            <a [routerLink]=\"['../product','new']\" class=\"btn btn-default\">\r\n                New\r\n            </a>\r\n  \r\n          <!-- </div> -->\r\n          \r\n        </form>\r\n    \r\n      </div> \r\n\r\n\r\n    </div>\r\n    \r\n    <div class=\"card\" >\r\n    \r\n      <table class=\"table table-contensed\" >\r\n        <thead>\r\n        <tr>            \r\n            <th>Name</th>            \r\n            <th>Details</th>            \r\n            <th>imei</th>            \r\n            <th>Created</th>\r\n        </tr>\r\n        </thead>\r\n        <tr *ngFor=\"let item of products\">\r\n            <td>{{item.name}}</td>\r\n            <td>{{item.details}}</td>\r\n            <td>{{item.imei}}</td>\r\n            <td>{{item.created | date}}</td>\r\n            <td>\r\n                \r\n                <a [routerLink]=\"['../product', item.id ]\">Details</a> |           \r\n                <a (click)=\"select(item)\">Select</a>\r\n            </td>\r\n        </tr>\r\n      </table>\r\n    \r\n  \r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product/list/product.list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product/list/product.list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/product.service */ "./src/app/_services/product.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { FlightFilter } from '../flight-filter';


var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
        var u = localStorage.getItem('currentUser');
        if (u) {
            this.user = JSON.parse(u);
        }
        this.productList();
    }
    ProductListComponent.prototype.productList = function () {
        var _this = this;
        try {
            this.productService.getAll(this.user._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (products) {
                _this.products = products;
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent.prototype.search = function () {
        //this.flightService.load(this.filter);
    };
    ProductListComponent.prototype.select = function (selected) {
        this.selectedProduct = selected;
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product',
            template: __webpack_require__(/*! ./product.list.component.html */ "./src/app/product/list/product.list.component.html")
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/product.list.component */ "./src/app/product/list/product.list.component.ts");
/* harmony import */ var _edit_product_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/product.edit.component */ "./src/app/product/edit/product.edit.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/product.service */ "./src/app/_services/product.service.ts");
/* harmony import */ var _product_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product.routes */ "./src/app/product/product.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_product_routes__WEBPACK_IMPORTED_MODULE_7__["ProductRoutes"])
            ],
            declarations: [
                _list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"],
                _edit_product_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProductEditComponent"]
            ],
            providers: [
                _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]
            ],
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/product/product.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.routes.ts ***!
  \*******************************************/
/*! exports provided: ProductRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutes", function() { return ProductRoutes; });
/* harmony import */ var _list_product_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/product.list.component */ "./src/app/product/list/product.list.component.ts");
/* harmony import */ var _edit_product_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/product.edit.component */ "./src/app/product/edit/product.edit.component.ts");


var ProductRoutes = [
    {
        path: 'product',
        component: _list_product_list_component__WEBPACK_IMPORTED_MODULE_0__["ProductListComponent"]
    },
    {
        path: 'product/:id',
        component: _edit_product_edit_component__WEBPACK_IMPORTED_MODULE_1__["ProductEditComponent"]
    }
];


/***/ }),

/***/ "./src/app/register/index.ts":
/*!***********************************!*\
  !*** ./src/app/register/index.ts ***!
  \***********************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });




/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Register</h2>\r\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n        <label for=\"firstName\">First Name</label>\r\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\r\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"lastName\">Last Name</label>\r\n        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\r\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"email\">email</label>\r\n        <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.email.errors.required\">email is required</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\r\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n        <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/sideBar/sideBar.component.html":
/*!************************************************!*\
  !*** ./src/app/sideBar/sideBar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    \r\n           \r\n     <div *ngIf=\"logged\"> \r\n        \r\n                <!-- Sidebar -->\r\n                \r\n                <!-- [ngClass] = \"toggledClass?'toggled':''\" -->\r\n                <ul class=\"sidebar navbar-nav\" [ngClass] = \"''\">\r\n                    <button class=\"btn btn-link btn-sm text-white order-1 order-sm-0\" id=\"sidebarToggle\" (click) = \"toggledClass = !toggledClass\"><!--  -->\r\n                        <i class=\"fas fa-bars\"></i>\r\n                      </button>\r\n                  <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['/product']\">\r\n                      <i class=\"fas fa-fw fa-tachometer-alt\"></i>\r\n                      <span>Products</span>\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"pagesDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                      <i class=\"fas fa-fw fa-folder\"></i>\r\n                      <span>Pages</span>\r\n                    </a>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"pagesDropdown\">\r\n                      <h6 class=\"dropdown-header\">Login Screens:</h6>\r\n                      <a class=\"dropdown-item\" href=\"login.html\">Login</a>\r\n                      <a class=\"dropdown-item\" href=\"register.html\">Register</a>\r\n                      <a class=\"dropdown-item\" href=\"forgot-password.html\">Forgot Password</a>\r\n                      <div class=\"dropdown-divider\"></div>\r\n                      <h6 class=\"dropdown-header\">Other Pages:</h6>\r\n                      <a class=\"dropdown-item\" href=\"404.html\">404 Page</a>\r\n                      <a class=\"dropdown-item\" href=\"blank.html\">Blank Page</a>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"charts.html\">\r\n                      <i class=\"fas fa-fw fa-chart-area\"></i>\r\n                      <span>Charts</span></a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"tables.html\">\r\n                      <i class=\"fas fa-fw fa-table\"></i>\r\n                      <span>Tables</span></a>\r\n                  </li>\r\n                </ul>\r\n                </div>\r\n          \r\n"

/***/ }),

/***/ "./src/app/sideBar/sideBar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sideBar/sideBar.component.ts ***!
  \**********************************************/
/*! exports provided: SideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideComponent", function() { return SideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideComponent = /** @class */ (function () {
    function SideComponent(authenticationService
    /*private _authenticationService: AuthenticationService*/ ) {
        //authenticationService.isLoggedIn()
    }
    SideComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SideComponent.prototype, "logged", {
        get: function () {
            var user = localStorage.getItem('currentUser');
            if (user) {
                user = JSON.parse(user);
                if ('token' in user)
                    return true;
                //this.user = _authenticationService.;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    SideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'side',
            template: __webpack_require__(/*! ./sideBar.component.html */ "./src/app/sideBar/sideBar.component.html"),
            providers: [_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
            /*private _authenticationService: AuthenticationService*/ ])
    ], SideComponent);
    return SideComponent;
}());



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
    production: false,
    apiUrl: 'http://' + window.location.hostname + ':4000',
    defaultLanguage: 'en-US',
    supportedLanguages: ['en-US', 'fr-FR']
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

/***/ "./src/translations/en-US.json":
/*!*************************************!*\
  !*** ./src/translations/en-US.json ***!
  \*************************************/
/*! exports provided: APP_NAME, About, Hello world !, Home, Logged in as, Login, Logout, Password, Password is required, Username, Username is required, Username or password incorrect., Remember me, Version, default */
/***/ (function(module) {

module.exports = {"APP_NAME":"ngX-Rocket","About":"About","Hello world !":"Hello world !","Home":"Home","Logged in as":"Logged in as","Login":"Login","Logout":"Logout","Password":"Password","Password is required":"Password is required","Username":"Username","Username is required":"Username is required","Username or password incorrect.":"Username or password incorrect.","Remember me":"Remember me","Version":"Version"};

/***/ }),

/***/ "./src/translations/fr-FR.json":
/*!*************************************!*\
  !*** ./src/translations/fr-FR.json ***!
  \*************************************/
/*! exports provided: APP_NAME, About, Hello world !, Home, Logged in as, Login, Logout, Password, Password is required, Username, Username is required, Username or password incorrect., Remember me, Version, default */
/***/ (function(module) {

module.exports = {"APP_NAME":"ngX-Rocket","About":"A propos","Hello world !":"Bonjour le monde !","Home":"Accueil","Logged in as":"Connecté en tant que","Login":"Connexion","Logout":"Déconnexion","Password":"Mot de passe","Password is required":"Mot de passe requis","Username":"Identifiant","Username is required":"Identifiant requis","Username or password incorrect.":"Identifiant ou mot de passe incorrect.","Remember me":"Rester connecté","Version":"Version"};

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\move_protect\public\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map