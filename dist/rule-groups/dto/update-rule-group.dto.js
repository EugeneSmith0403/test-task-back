"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRuleGroupDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_rule_group_dto_1 = require("./create-rule-group.dto");
class UpdateRuleGroupDto extends mapped_types_1.PartialType(create_rule_group_dto_1.CreateRuleGroupDto) {
}
exports.UpdateRuleGroupDto = UpdateRuleGroupDto;
//# sourceMappingURL=update-rule-group.dto.js.map