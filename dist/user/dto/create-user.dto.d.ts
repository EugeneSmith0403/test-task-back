import mongoose from 'mongoose';
export declare class CreateUserDto {
    name?: string;
    password: string;
    email: string;
    ruleGroups?: mongoose.Types.ObjectId[];
}
