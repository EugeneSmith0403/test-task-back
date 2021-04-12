import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RuleGroupsModule } from './rule-groups/rule-groups.module';
import { AuthGuard } from './common/guards/auth.guard';
import { RolesGuard } from './common/guards/role.guard';
import { APP_GUARD } from '@nestjs/core';
import { Users, UsersSchema } from './user/shemas/users.schems';

const connection =
  'mongodb://Eka:1234@cluster0-shard-00-00.sguz1.mongodb.net:27017,cluster0-shard-00-01.sguz1.mongodb.net:27017,cluster0-shard-00-02.sguz1.mongodb.net:27017/test-task?ssl=true&replicaSet=atlas-jts9bo-shard-0&authSource=admin&retryWrites=true&w=majority';
@Module({
  imports: [
    MongooseModule.forRoot(connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
    UserModule,
    RuleGroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthGuard],
})
export class AppModule {}
