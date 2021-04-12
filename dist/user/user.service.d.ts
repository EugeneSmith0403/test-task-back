import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { UserDocument } from './shemas/users.schems';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(createUserDto: CreateUserDto): Promise<UserDocument>;
    findAll(): Promise<UserDocument[]>;
    findOne(_id: string): Promise<UserDocument>;
    findUserByQuery(query: any): Promise<UserDocument>;
    update(_id: string, updateUserDto: any): Promise<UserDocument>;
    remove(_id: string): import("mongoose").Query<any, UserDocument, {}>;
}
