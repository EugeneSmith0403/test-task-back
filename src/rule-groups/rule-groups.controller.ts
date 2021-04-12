import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RuleGroupsService } from './rule-groups.service';
import { CreateRuleGroupDto } from './dto/create-rule-group.dto';
import { UpdateRuleGroupDto } from './dto/update-rule-group.dto';
import { AuthGuard } from '../common/guards/auth.guard';
import { Roles } from '../common/enums/role.decorator';
import { Role } from '../common/enums/roles.enum';

@Controller('rule-groups')
export class RuleGroupsController {
  constructor(private readonly ruleGroupsService: RuleGroupsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Roles(Role.Admin)
  create(@Body() createRuleGroupDto: CreateRuleGroupDto) {
    return this.ruleGroupsService.create(createRuleGroupDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  @Roles(Role.Admin)
  findAll() {
    return this.ruleGroupsService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @Roles(Role.Admin)
  findOne(@Param('id') _id: string) {
    return this.ruleGroupsService.findOne(_id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @Roles(Role.Admin)
  update(
    @Param('id') id: string,
    @Body() updateRuleGroupDto: UpdateRuleGroupDto,
  ) {
    return this.ruleGroupsService.update(+id, updateRuleGroupDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @Roles(Role.Admin)
  remove(@Param('id') id: string) {
    return this.ruleGroupsService.remove(+id);
  }
}
