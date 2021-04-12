import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { RuleGroups } from '../../rule-groups/shemas/ruleGroup.schems';
import * as mongoose from 'mongoose';
export type UserDocument = Users & Document;

@Schema()
export class Users {
  @Prop()
  name: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: true })
  token: string;
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'RuleGroups' })
  ruleGroups: string[];
}

export const UsersSchema = SchemaFactory.createForClass(Users);
