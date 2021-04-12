import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import mongoose from 'mongoose';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  _id?: string;
  name?: string;
  email?: string;
  token?: string;
  ruleGroups?: mongoose.Types.ObjectId[];
}
