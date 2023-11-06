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
exports.DepositController = void 0;
const common_1 = require("@nestjs/common");
const deposit_dto_1 = require("../dtos/deposit.dto");
const history_resolver_1 = require("../../../resolver/history/history.resolver");
const deposit_resolver_1 = require("../../../resolver/deposit/deposit.resolver");
const user_resolver_1 = require("../../../resolver/user/user.resolver");
let DepositController = class DepositController {
    constructor(depositResolver, HistoryResolver, UserResolver) {
        this.depositResolver = depositResolver;
        this.HistoryResolver = HistoryResolver;
        this.UserResolver = UserResolver;
    }
    async depositMoney(data, res) {
        const user = await this.UserResolver.getUserByNumber(data.number);
        const email = user.email;
        await this.depositResolver.depositData(data);
        const date = new Date().toUTCString();
        const message = `Successfully deposited ${data.amount} in ${user.number} on ${date}`;
        await this.HistoryResolver.insertHistory(email, message);
        res.status(200).send(true);
    }
};
exports.DepositController = DepositController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deposit_dto_1.depositDto, Object]),
    __metadata("design:returntype", Promise)
], DepositController.prototype, "depositMoney", null);
exports.DepositController = DepositController = __decorate([
    (0, common_1.Controller)('deposit'),
    __metadata("design:paramtypes", [deposit_resolver_1.DepositResolver,
        history_resolver_1.HistoryResolver,
        user_resolver_1.UserResolver])
], DepositController);
//# sourceMappingURL=deposit.controller.js.map