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
exports.WithdrawController = void 0;
const common_1 = require("@nestjs/common");
const withdraw_dto_1 = require("../dtos/withdraw.dto");
const users_service_1 = require("../../../services/users/users.service");
const history_service_1 = require("../../../services/history/history.service");
const auth_helper_1 = require("../../../helpers/auth.helper");
const user_resolver_1 = require("../../../resolver/user/user.resolver");
let WithdrawController = class WithdrawController {
    constructor(usersService, historyService, userResolver) {
        this.usersService = usersService;
        this.historyService = historyService;
        this.userResolver = userResolver;
    }
    async doWithdraw(data, res) {
        const user = await this.userResolver.getUserByNumber(data.number);
        const result = await (0, auth_helper_1.compare)(data.pin, user.pin);
        if (!result)
            throw new common_1.HttpException('Invalid pin', common_1.HttpStatus.BAD_REQUEST);
        const aggBal = user.balance + 1000;
        if (data.amount > aggBal)
            throw new common_1.HttpException('insufficient funds', common_1.HttpStatus.BAD_REQUEST);
        const amount = user.balance - data.amount;
        await this.usersService.updateUserBalance(user.id, amount);
        const date = new Date().toUTCString();
        const message = `Successfully withdrew ${amount} from ${user.number} on ${date}`;
        await this.historyService.insertHistory(user.email, message);
        res.status(200).send(true);
    }
};
exports.WithdrawController = WithdrawController;
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [withdraw_dto_1.withdrawMoneyDto, Object]),
    __metadata("design:returntype", Promise)
], WithdrawController.prototype, "doWithdraw", null);
exports.WithdrawController = WithdrawController = __decorate([
    (0, common_1.Controller)('withdraw'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        history_service_1.HistoryService,
        user_resolver_1.UserResolver])
], WithdrawController);
//# sourceMappingURL=withdraw.controller.js.map