"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const auth_helper_1 = require("../../helpers/auth.helper");
const userschema_1 = require("../../../models/userschema");
let UsersService = class UsersService {
    async newUser(user) {
        const passwordData = await (0, auth_helper_1.encrypt)(user.password);
        const pinData = await (0, auth_helper_1.encrypt)(user.pin);
        const createUser = new userschema_1.userModel({
            username: user.username,
            email: user.email,
            number: user.number,
            pin: pinData.result,
            pinSalt: pinData.salt,
            password: passwordData.result,
            passwordSalt: passwordData.salt,
            balance: 0,
        });
        await createUser.save();
    }
    async getUser(email) {
        return await userschema_1.userModel.findOne({ email: email });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map