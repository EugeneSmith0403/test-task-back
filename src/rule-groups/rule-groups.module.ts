import { Global, Module } from '@nestjs/common';
import { RuleGroupsService } from './rule-groups.service';
import { RuleGroupsController } from './rule-groups.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RuleGroups, RuleGroupsSchema } from './shemas/ruleGroup.schems';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RuleGroups.name, schema: RuleGroupsSchema },
    ]),
  ],
  controllers: [RuleGroupsController],
  providers: [RuleGroupsService],
  exports: [RuleGroupsService],
})
export class RuleGroupsModule {}
