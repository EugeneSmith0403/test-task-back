"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
class User {
    constructor(name, email, password, ruleGroups) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.ruleGroups = ruleGroups;
        this.password = password;
        this.token = uuid_1.v4();
        this.ruleGroups = ruleGroups;
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map