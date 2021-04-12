/// <reference types="mongoose" />
import { RuleGroupsService } from './rule-groups.service';
import { CreateRuleGroupDto } from './dto/create-rule-group.dto';
import { UpdateRuleGroupDto } from './dto/update-rule-group.dto';
export declare class RuleGroupsController {
    private readonly ruleGroupsService;
    constructor(ruleGroupsService: RuleGroupsService);
    create(createRuleGroupDto: CreateRuleGroupDto): Promise<import("./shemas/ruleGroup.schems").RulerGroupDocument>;
    findAll(): Promise<import("./shemas/ruleGroup.schems").RulerGroupDocument[]>;
    findOne(_id: string): Promise<import("./shemas/ruleGroup.schems").RulerGroupDocument>;
    update(id: string, updateRuleGroupDto: UpdateRuleGroupDto): Promise<import("./shemas/ruleGroup.schems").RulerGroupDocument>;
    remove(id: string): import("mongoose").Query<any, import("./shemas/ruleGroup.schems").RulerGroupDocument, {}>;
}
