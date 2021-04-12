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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const rule_groups_service_1 = require("../rule-groups/rule-groups.service");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const bcrypt = require("bcrypt");
const login_dto_1 = require("./dto/login.dto");
const mongoose = require("mongoose");
const auth_guard_1 = require("../common/guards/auth.guard");
const role_decorator_1 = require("../common/enums/role.decorator");
const roles_enum_1 = require("../common/enums/roles.enum");
let UserController = class UserController {
    constructor(userService, ruleGroupsService) {
        this.userService = userService;
        this.ruleGroupsService = ruleGroupsService;
    }
    create(createUserDto) {
        return rxjs_1.forkJoin([
            rxjs_1.from(this.ruleGroupsService.findOneByName('User')),
            rxjs_1.from(bcrypt.hash(createUserDto.password, 0)),
        ]).pipe(operators_1.mergeMap((res) => {
            createUserDto.ruleGroups = [mongoose.Types.ObjectId(res[0]._id)];
            createUserDto.password = res[1];
            return this.userService.create(createUserDto);
        }));
    }
    findAll() {
        return rxjs_1.from(this.userService.findAll()).pipe(operators_1.map((list) => {
            return list.map((item) => {
                return {
                    _id: item._id,
                    name: item.name,
                    email: item.email,
                    password: item.password,
                    token: item.token,
                    rules: item.ruleGroups[0].name,
                };
            });
        }));
    }
    findOne(_id) {
        return this.userService.findOne(_id);
    }
    update(_id, updateUserDto) {
        return rxjs_1.from(bcrypt.hash(updateUserDto.password, 0)).pipe(operators_1.mergeMap((password) => {
            return rxjs_1.of(this.userService.update(_id, Object.assign(Object.assign({}, updateUserDto), { password })));
        }));
    }
    remove(_id) {
        return this.userService.remove(_id);
    }
    login(data) {
        return rxjs_1.from(this.userService.findUserByQuery({ email: data.email })).pipe(operators_1.mergeMap((user) => {
            if (user) {
                return rxjs_1.from(bcrypt.compare(data.password, user.password)).pipe(operators_1.mergeMap((isMatch) => {
                    var _a;
                    if (isMatch) {
                        return rxjs_1.of({
                            id: user === null || user === void 0 ? void 0 : user._id,
                            name: user === null || user === void 0 ? void 0 : user.name,
                            token: user === null || user === void 0 ? void 0 : user.token,
                            rules: (_a = user === null || user === void 0 ? void 0 : user.ruleGroups[0]) === null || _a === void 0 ? void 0 : _a.name,
                        });
                    }
                    return rxjs_1.of({});
                }));
            }
            return rxjs_1.of({});
        }));
    }
    findUserByToken(req) {
        const token = req.headers.authorization.replace('Bearer ', '');
        return rxjs_1.from(this.userService.findUserByQuery({ token })).pipe(operators_1.mergeMap((user) => {
            if (user) {
                return rxjs_1.of({
                    _id: user._id,
                    name: user === null || user === void 0 ? void 0 : user.name,
                    token: user === null || user === void 0 ? void 0 : user.token,
                    rules: user === null || user === void 0 ? void 0 : user.ruleGroups[0].name,
                    email: user === null || user === void 0 ? void 0 : user.email,
                });
            }
        }));
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    role_decorator_1.Roles(roles_enum_1.Role.Admin),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    common_1.UseGuards(auth_guard_1.AuthGuard),
    common_1.Post('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    role_decorator_1.Roles(roles_enum_1.Role.Admin),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
__decorate([
    common_1.Post('login'),
    common_1.HttpCode(200),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "login", null);
__decorate([
    common_1.Post('auth'),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findUserByToken", null);
UserController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [user_service_1.UsersService,
        rule_groups_service_1.RuleGroupsService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map