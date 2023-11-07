"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
let AuthMiddleware = class AuthMiddleware {
    use(req, res, next) {
        if (!req.headers.authorization)
            throw new common_1.HttpException('Unauthorised', common_1.HttpStatus.UNAUTHORIZED);
        const bearerToken = req.headers.authorization?.split(' ')[1];
        next();
        try {
            const token = jwt.verify(bearerToken, process.env.JWT_SECRET);
            return token;
        }
        catch (error) {
            throw new common_1.HttpException('Unauthorised', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
};
exports.AuthMiddleware = AuthMiddleware;
exports.AuthMiddleware = AuthMiddleware = __decorate([
    (0, common_1.Injectable)()
], AuthMiddleware);
//# sourceMappingURL=auth.middleware.js.map