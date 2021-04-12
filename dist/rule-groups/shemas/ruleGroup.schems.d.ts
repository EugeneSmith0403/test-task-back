import { Document } from 'mongoose';
export declare type RulerGroupDocument = RuleGroups & Document;
export declare class RuleGroups {
    name: string;
}
export declare const RuleGroupsSchema: import("mongoose").Schema<Document<RuleGroups, {}>, import("mongoose").Model<any, any>, undefined>;
