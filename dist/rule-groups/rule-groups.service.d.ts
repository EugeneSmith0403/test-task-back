import { CreateRuleGroupDto } from './dto/create-rule-group.dto';
import { UpdateRuleGroupDto } from './dto/update-rule-group.dto';
import { Model } from 'mongoose';
import { RulerGroupDocument } from './shemas/ruleGroup.schems';
export declare class RuleGroupsService {
    private ruleGroupModel;
    constructor(ruleGroupModel: Model<RulerGroupDocument>);
    create(createRuleGroupDto: CreateRuleGroupDto): Promise<RulerGroupDocument>;
    findAll(): Promise<RulerGroupDocument[]>;
    findOne(_id: string): Promise<RulerGroupDocument>;
    findOneByName(name: string): Promise<RulerGroupDocument>;
    update(_id: number, updateRuleGroupDto: UpdateRuleGroupDto): Promise<RulerGroupDocument>;
    remove(_id: number): import("mongoose").Query<any, RulerGroupDocument, {}>;
}
