"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const users_schems_1 = require("./shemas/users.schems");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(createUserDto) {
        const { name, email, password, ruleGroups } = createUserDto;
        const user = new user_entity_1.User(name, email, password, ruleGroups);
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }
    findAll() {
        return this.userModel.find().populate('ruleGroups').exec();
    }
    findOne(_id) {
        return this.userModel.findById({ _id }).exec();
    }
    findUserByQuery(query) {
        return this.userModel.findOne(query).populate('ruleGroups').exec();
    }
    update(_id, updateUserDto) {
        return this.userModel.findOneAndUpdate({ _id }, updateUserDto).exec();
    }
    remove(_id) {
        return this.userModel.remove({ _id });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(users_schems_1.Users.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=user.service.js.map