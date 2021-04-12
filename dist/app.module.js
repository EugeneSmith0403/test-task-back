"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const rule_groups_module_1 = require("./rule-groups/rule-groups.module");
const auth_guard_1 = require("./common/guards/auth.guard");
const users_schems_1 = require("./user/shemas/users.schems");
const connection = 'mongodb://Eka:1234@cluster0-shard-00-00.sguz1.mongodb.net:27017,cluster0-shard-00-01.sguz1.mongodb.net:27017,cluster0-shard-00-02.sguz1.mongodb.net:27017/test-task?ssl=true&replicaSet=atlas-jts9bo-shard-0&authSource=admin&retryWrites=true&w=majority';
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot(connection, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
            }),
            mongoose_1.MongooseModule.forFeature([{ name: users_schems_1.Users.name, schema: users_schems_1.UsersSchema }]),
            user_module_1.UserModule,
            rule_groups_module_1.RuleGroupsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, auth_guard_1.AuthGuard],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map