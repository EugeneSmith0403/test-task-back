import mongoose from 'mongoose';
export declare class User {
    private name?;
    private email?;
    private password?;
    private ruleGroups?;
    private token;
    constructor(name?: string, email?: string, password?: string, ruleGroups?: mongoose.Types.ObjectId[]);
}
