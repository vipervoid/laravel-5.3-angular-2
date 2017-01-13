"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var users_service_1 = require('./users.service');
var UsersComponent = (function () {
    function UsersComponent(usersService) {
        this.usersService = usersService;
        this.users = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.usersService.getUsers().subscribe(function (users) { return _this.users = users; }, function (err) { return console.log(err); });
    };
    UsersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-users',
            template: "\n    <table width=\"100%\">\n        <tr>\n            <th>ID</th>\n            <th>Name</th>\n            <th>Email</th>\n        </tr>\n        <tr *ngFor=\"let user of users\">\n            <td>{{user.id}}</td>\n            <td>{{user.name}}</td>\n            <td>{{user.email}}</td>\n        </tr>\n    </table>\n    "
        }), 
        __metadata('design:paramtypes', [users_service_1.UsersService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map