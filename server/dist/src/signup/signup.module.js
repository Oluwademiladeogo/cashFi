"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../services/users/users.service");
const signup_controller_1 = require("./controller/signup/signup.controller");
const auth_middleware_1 = require("../middlewares/auth/auth.middleware");
let SignupModule = class SignupModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes({
            path: 'withdraw',
            method: common_1.RequestMethod.POST,
        }, { path: 'deposit', method: common_1.RequestMethod.POST }, { path: 'history', method: common_1.RequestMethod.GET });
    }
};
exports.SignupModule = SignupModule;
exports.SignupModule = SignupModule = __decorate([
    (0, common_1.Module)({
        controllers: [signup_controller_1.SignupController],
        providers: [users_service_1.UsersService],
    })
], SignupModule);
//# sourceMappingURL=signup.module.js.map