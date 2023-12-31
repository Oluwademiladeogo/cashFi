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
exports.LoginController = void 0;
const common_1 = require("@nestjs/common");
const login_dto_1 = require("../dtos/login.dto");
const auth_helper_1 = require("../../../helpers/auth.helper");
const user_resolver_1 = require("../../../resolver/user/user.resolver");
let LoginController = class LoginController {
    constructor(UserResolver) {
        this.UserResolver = UserResolver;
    }
    keepUp(res) {
        res.send("login");
    }
    async loginUser(user, res) {
        const dbRes = await this.UserResolver.getUser(user.email);
        const dbUser = {
            username: dbRes.username,
            email: dbRes.email,
            number: dbRes.number,
        };
        const token = await (0, auth_helper_1.generateToken)(dbUser);
        if (!token)
            return res.json({ status: 401, message: 'unauthorized' });
        res.json({ status: 200, message: 'Login successful', client_token: token });
    }
};
exports.LoginController = LoginController;
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "keepUp", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.loginDto, Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "loginUser", null);
exports.LoginController = LoginController = __decorate([
    (0, common_1.Controller)('login'),
    __param(0, (0, common_1.Inject)(user_resolver_1.UserResolver)),
    __metadata("design:paramtypes", [user_resolver_1.UserResolver])
], LoginController);
//# sourceMappingURL=login.controller.js.map