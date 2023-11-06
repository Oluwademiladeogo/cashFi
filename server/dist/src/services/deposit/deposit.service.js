"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositService = void 0;
const common_1 = require("@nestjs/common");
const userschema_1 = require("../../../models/userschema");
let DepositService = class DepositService {
    async depositData(data) {
        const account = await userschema_1.userModel.findOne({ number: data.number });
        if (!account)
            throw new common_1.HttpException('Account not found', common_1.HttpStatus.BAD_REQUEST);
        account.balance += data.amount;
        await account.save();
        return true;
    }
};
exports.DepositService = DepositService;
exports.DepositService = DepositService = __decorate([
    (0, common_1.Injectable)()
], DepositService);
//# sourceMappingURL=deposit.service.js.map