"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleGroupsModule = void 0;
const common_1 = require("@nestjs/common");
const rule_groups_service_1 = require("./rule-groups.service");
const rule_groups_controller_1 = require("./rule-groups.controller");
const mongoose_1 = require("@nestjs/mongoose");
const ruleGroup_schems_1 = require("./shemas/ruleGroup.schems");
let RuleGroupsModule = class RuleGroupsModule {
};
RuleGroupsModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: ruleGroup_schems_1.RuleGroups.name, schema: ruleGroup_schems_1.RuleGroupsSchema },
            ]),
        ],
        controllers: [rule_groups_controller_1.RuleGroupsController],
        providers: [rule_groups_service_1.RuleGroupsService],
        exports: [rule_groups_service_1.RuleGroupsService],
    })
], RuleGroupsModule);
exports.RuleGroupsModule = RuleGroupsModule;
//# sourceMappingURL=rule-groups.module.js.map