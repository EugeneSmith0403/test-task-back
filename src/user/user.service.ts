import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, Users } from './shemas/users.schems';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private userModel: Model<UserDocument>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const { name, email, password, ruleGroups } = createUserDto;
    const user = new User(name, email, password, ruleGroups);
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  findAll() {
    return this.userModel.find().populate('ruleGroups').exec();
  }

  findOne(_id: string) {
    return this.userModel.findById({ _id }).exec();
  }

  findUserByQuery(query) {
    return this.userModel.findOne(query).populate('ruleGroups').exec();
  }

  update(_id: string, updateUserDto: any) {
    return this.userModel.findOneAndUpdate({ _id }, updateUserDto).exec();
  }

  remove(_id: string) {
    return this.userModel.remove({ _id });
  }
}
