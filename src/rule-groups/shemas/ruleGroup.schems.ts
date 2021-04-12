import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type RulerGroupDocument = RuleGroups & Document;

@Schema()
export class RuleGroups {
  @Prop({ required: true, unique: true })
  name: string;
}

export const RuleGroupsSchema = SchemaFactory.createForClass(RuleGroups);
