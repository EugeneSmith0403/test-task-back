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
exports.RuleGroupsController = void 0;
const common_1 = require("@nestjs/common");
const rule_groups_service_1 = require("./rule-groups.service");
const create_rule_group_dto_1 = require("./dto/create-rule-group.dto");
const update_rule_group_dto_1 = require("./dto/update-rule-group.dto");
const auth_guard_1 = require("../common/guards/auth.guard");
const role_decorator_1 = require("../common/enums/role.decorator");
const roles_enum_1 = require("../common/enums/roles.enum");
let RuleGroupsController = class RuleGroupsController {
    constructor(ruleGroupsService) {
        this.ruleGroupsService = ruleGroupsService;
    }
    create(createRuleGroupDto) {
        return this.ruleGroupsService.create(createRuleGroupDto);
    }
    findAll() {
        return this.ruleGroupsService.findAll();
    }
    findOne(_id) {
        return this.ruleGroupsService.findOne(_id);
    }
    update(id, updateRuleGroupDto) {
        return this.ruleGroupsService.update(+id, updateRuleGroupDto);
    }
    remove(id) {
        return this.ruleGroupsService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    role_decorator_1.Roles(roles_enum_1.Role.Admin),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rule_group_dto_1.CreateRuleGroupDto]),
    __metadata("design:returntype", void 0)
], RuleGroupsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    role_decorator_1.Roles(roles_enum_1.Role.Admin),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RuleGroupsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    role_decorator_1.Roles(roles_enum_1.Role.Admin),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RuleGroupsController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    role_decorator_1.Roles(roles_enum_1.Role.Admin),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_rule_group_dto_1.UpdateRuleGroupDto]),
    __metadata("design:returntype", void 0)
], RuleGroupsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    role_decorator_1.Roles(roles_enum_1.Role.Admin),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RuleGroupsController.prototype, "remove", null);
RuleGroupsController = __decorate([
    common_1.Controller('rule-groups'),
    __metadata("design:paramtypes", [rule_groups_service_1.RuleGroupsService])
], RuleGroupsController);
exports.RuleGroupsController = RuleGroupsController;
//# sourceMappingURL=rule-groups.controller.js.map