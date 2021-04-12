import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
  Header,
  Req,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RuleGroupsService } from '../rule-groups/rule-groups.service';
import { forkJoin, from, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import * as mongoose from 'mongoose';
import { AuthGuard } from '../common/guards/auth.guard';
import { Roles } from '../common/enums/role.decorator';
import { Role } from '../common/enums/roles.enum';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UsersService,
    private readonly ruleGroupsService: RuleGroupsService,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  @Roles(Role.Admin)
  create(@Body() createUserDto: CreateUserDto) {
    return forkJoin([
      from(this.ruleGroupsService.findOneByName('User')),
      from(bcrypt.hash(createUserDto.password, 0)),
    ]).pipe(
      mergeMap((res: any) => {
        createUserDto.ruleGroups = [mongoose.Types.ObjectId(res[0]._id)];
        createUserDto.password = res[1];
        return this.userService.create(createUserDto);
      }),
    );
  }

  @UseGuards(AuthGuard)
  @Post('all')
  findAll() {
    return from(this.userService.findAll()).pipe(
      map((list: any) => {
        return list.map((item) => {
          return {
            _id: item._id,
            name: item.name,
            email: item.email,
            password: item.password,
            token: item.token,
            rules: item.ruleGroups[0].name,
          };
        });
      }),
    );
  }

  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.userService.findOne(_id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') _id: string, @Body() updateUserDto: UpdateUserDto) {
    return from(bcrypt.hash(updateUserDto.password, 0)).pipe(
      mergeMap((password) => {
        return of(this.userService.update(_id, { ...updateUserDto, password }));
      }),
    );
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @Roles(Role.Admin)
  remove(@Param('id') _id: string) {
    return this.userService.remove(_id);
  }

  @Post('login')
  @HttpCode(200)
  login(@Body() data: LoginDto) {
    return from(this.userService.findUserByQuery({ email: data.email })).pipe(
      mergeMap((user: any) => {
        if (user) {
          return from(bcrypt.compare(data.password, user.password)).pipe(
            mergeMap((isMatch) => {
              if (isMatch) {
                return of({
                  id: user?._id,
                  name: user?.name,
                  token: user?.token,
                  rules: user?.ruleGroups[0]?.name,
                });
              }
              return of({});
            }),
          );
        }
        return of({});
      }),
    );
  }
  @Post('auth')
  @UseGuards(AuthGuard)
  findUserByToken(@Req() req) {
    const token = req.headers.authorization.replace('Bearer ', '');
    return from(this.userService.findUserByQuery({ token })).pipe(
      mergeMap((user: any) => {
        if (user) {
          return of({
            _id: user._id,
            name: user?.name,
            token: user?.token,
            rules: user?.ruleGroups[0].name,
            email: user?.email,
          });
        }
      }),
    );
  }
}
