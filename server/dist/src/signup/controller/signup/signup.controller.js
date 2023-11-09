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
exports.SignupController = void 0;
const common_1 = require("@nestjs/common");
const NewUser_dto_1 = require("./dtos/NewUser.dto");
const user_resolver_1 = require("../../../resolver/user/user.resolver");
let SignupController = class SignupController {
    constructor(UsersResolver) {
        this.UsersResolver = UsersResolver;
    }
    async SignupUser(user, res) {
        const userObject = await this.UsersResolver.getUser(user.email);
        if (userObject)
            res.json({ status: 409, message: 'User already registered' });
        await this.UsersResolver.newUser(user);
        res.json({ status: 201, message: 'User added successfully' });
    }
};
exports.SignupController = SignupController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NewUser_dto_1.NewUserDto, Object]),
    __metadata("design:returntype", Promise)
], SignupController.prototype, "SignupUser", null);
exports.SignupController = SignupController = __decorate([
    (0, common_1.Controller)('signup'),
    __metadata("design:paramtypes", [user_resolver_1.UserResolver])
], SignupController);
//# sourceMappingURL=signup.controller.js.map