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
exports.RuleGroupsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const ruleGroup_schems_1 = require("./shemas/ruleGroup.schems");
const rule_group_entity_1 = require("./entities/rule-group.entity");
let RuleGroupsService = class RuleGroupsService {
    constructor(ruleGroupModel) {
        this.ruleGroupModel = ruleGroupModel;
    }
    create(createRuleGroupDto) {
        const { name } = createRuleGroupDto;
        const ruleGroup = new rule_group_entity_1.RuleGroupEntity(name);
        const ruleGroupModel = new this.ruleGroupModel(ruleGroup);
        return ruleGroupModel.save();
    }
    findAll() {
        return this.ruleGroupModel.find().exec();
    }
    findOne(_id) {
        return this.ruleGroupModel.findById({ _id }).exec();
    }
    findOneByName(name) {
        return this.ruleGroupModel.findOne({ name }).exec();
    }
    update(_id, updateRuleGroupDto) {
        return this.ruleGroupModel
            .findOneAndUpdate({ _id }, updateRuleGroupDto)
            .exec();
    }
    remove(_id) {
        return this.ruleGroupModel.remove({ _id });
    }
};
RuleGroupsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(ruleGroup_schems_1.RuleGroups.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RuleGroupsService);
exports.RuleGroupsService = RuleGroupsService;
//# sourceMappingURL=rule-groups.service.js.map