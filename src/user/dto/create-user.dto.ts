import { ObjectId } from 'mongoose';
import mongoose from 'mongoose';

export class CreateUserDto {
  name?: string;
  password: string;
  email: string;
  ruleGroups?: mongoose.Types.ObjectId[];
}
