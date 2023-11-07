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
exports.TransferController = void 0;
const common_1 = require("@nestjs/common");
const transfer_dto_1 = require("../dtos/transfer.dto");
const auth_helper_1 = require("../../../helpers/auth.helper");
const user_resolver_1 = require("../../../resolver/user/user.resolver");
const users_service_1 = require("../../../services/users/users.service");
const history_service_1 = require("../../../services/history/history.service");
let TransferController = class TransferController {
    constructor(usersService, userResolver, historyService) {
        this.usersService = usersService;
        this.userResolver = userResolver;
        this.historyService = historyService;
    }
    async transferMoney(data, req, res) {
        const token = await (0, auth_helper_1.getToken)(req);
        const payload = await (0, auth_helper_1.getTokenPayload)(token);
        const me = await this.userResolver.getUser(payload.email);
        const number = parseInt(data.number);
        const amount = parseInt(data.amount);
        const user = await this.userResolver.getUserByNumber(number);
        const result = await (0, auth_helper_1.compare)(data.pin, me.pin);
        if (!result)
            return res.json({ status: 400, message: 'invalid pin' });
        const aggBal = me.balance + 1000;
        if (amount > aggBal)
            return res.json({ status: 400, message: 'insufficient funds' });
        const receiverAmount = user.balance + amount;
        const giverAmount = user.balance - amount;
        await this.usersService.updateUserBalance(me.id, giverAmount);
        await this.usersService.updateUserBalance(user.id, receiverAmount);
        const date = new Date().toUTCString();
        const message = `Successfully transferred ${data.amount} from ${me.number} to ${data.number} on ${date}`;
        await this.historyService.insertHistory(user.email, message);
        res.json({ status: 200, message: message });
    }
};
exports.TransferController = TransferController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transfer_dto_1.transferDto, Object, Object]),
    __metadata("design:returntype", Promise)
], TransferController.prototype, "transferMoney", null);
exports.TransferController = TransferController = __decorate([
    (0, common_1.Controller)('transfer'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        user_resolver_1.UserResolver,
        history_service_1.HistoryService])
], TransferController);
//# sourceMappingURL=transfer.controller.js.map