import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type UserDocument = Users & Document;
export declare class Users {
    name: string;
    email: string;
    password: string;
    token: string;
    ruleGroups: string[];
}
export declare const UsersSchema: mongoose.Schema<Document<Users, {}>, mongoose.Model<any, any>, undefined>;
