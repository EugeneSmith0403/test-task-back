import { Injectable } from '@nestjs/common';
import { CreateRuleGroupDto } from './dto/create-rule-group.dto';
import { UpdateRuleGroupDto } from './dto/update-rule-group.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RuleGroups, RulerGroupDocument } from './shemas/ruleGroup.schems';
import { RuleGroupEntity } from './entities/rule-group.entity';

@Injectable()
export class RuleGroupsService {
  constructor(
    @InjectModel(RuleGroups.name)
    private ruleGroupModel: Model<RulerGroupDocument>,
  ) {}
  create(createRuleGroupDto: CreateRuleGroupDto) {
    const { name } = createRuleGroupDto;
    const ruleGroup = new RuleGroupEntity(name);
    const ruleGroupModel = new this.ruleGroupModel(ruleGroup);
    return ruleGroupModel.save();
  }

  findAll() {
    return this.ruleGroupModel.find().exec();
  }

  findOne(_id: string) {
    return this.ruleGroupModel.findById({ _id }).exec();
  }

  findOneByName(name: string) {
    return this.ruleGroupModel.findOne({ name }).exec();
  }

  update(_id: number, updateRuleGroupDto: UpdateRuleGroupDto) {
    return this.ruleGroupModel
      .findOneAndUpdate({ _id }, updateRuleGroupDto)
      .exec();
  }

  remove(_id: number) {
    return this.ruleGroupModel.remove({ _id });
  }
}
