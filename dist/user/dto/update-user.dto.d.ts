import { CreateUserDto } from './create-user.dto';
import mongoose from 'mongoose';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    _id?: string;
    name?: string;
    email?: string;
    token?: string;
    ruleGroups?: mongoose.Types.ObjectId[];
}
export {};
