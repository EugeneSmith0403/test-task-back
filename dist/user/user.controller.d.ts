import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RuleGroupsService } from '../rule-groups/rule-groups.service';
import { LoginDto } from './dto/login.dto';
import * as mongoose from 'mongoose';
export declare class UserController {
    private readonly userService;
    private readonly ruleGroupsService;
    constructor(userService: UsersService, ruleGroupsService: RuleGroupsService);
    create(createUserDto: CreateUserDto): import("rxjs").Observable<import("./shemas/users.schems").UserDocument>;
    findAll(): import("rxjs").Observable<any>;
    findOne(_id: string): Promise<import("./shemas/users.schems").UserDocument>;
    update(_id: string, updateUserDto: UpdateUserDto): import("rxjs").Observable<Promise<import("./shemas/users.schems").UserDocument>>;
    remove(_id: string): mongoose.Query<any, import("./shemas/users.schems").UserDocument, {}>;
    login(data: LoginDto): import("rxjs").Observable<{}>;
    findUserByToken(req: any): import("rxjs").Observable<{
        _id: any;
        name: any;
        token: any;
        rules: any;
        email: any;
    }>;
}
