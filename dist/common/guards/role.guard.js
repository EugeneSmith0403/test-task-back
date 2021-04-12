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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const roles_enum_1 = require("../enums/roles.enum");
const user_service_1 = require("../../user/user.service");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let RolesGuard = class RolesGuard {
    constructor(userService) {
        this.userService = userService;
    }
    canActivate(context) {
        var _a;
        const { authorization } = (_a = context.switchToHttp().getRequest()) === null || _a === void 0 ? void 0 : _a.headers;
        const token = authorization.replace('Bearer ', '');
        return rxjs_1.from(this.userService.findUserByQuery({ token })).pipe(operators_1.map((user) => {
            var _a;
            return ((_a = user === null || user === void 0 ? void 0 : user.ruleGroups[0]) === null || _a === void 0 ? void 0 : _a.name) === roles_enum_1.Role.Admin;
        }));
    }
};
RolesGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UsersService])
], RolesGuard);
exports.RolesGuard = RolesGuard;
//# sourceMappingURL=role.guard.js.map