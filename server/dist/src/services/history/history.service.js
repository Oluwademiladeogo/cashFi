"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryService = void 0;
const common_1 = require("@nestjs/common");
const userschema_1 = require("../../../models/userschema");
let HistoryService = class HistoryService {
    async getHistory(email) {
        try {
            const user = await userschema_1.userModel.findOne({ email: email });
            if (!user)
                return false;
            return user.history;
        }
        catch (error) {
            throw new common_1.HttpException('Error getting user details', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async insertHistory(email, message) {
        try {
            const user = await userschema_1.userModel.findOne({ email: email });
            if (!user)
                throw new common_1.HttpException('Error getting user details', common_1.HttpStatus.BAD_REQUEST);
            const history = user.history;
            history.push(message);
            user.history = history;
            await user.save();
            return true;
        }
        catch (error) {
            throw new common_1.HttpException('Error with history', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.HistoryService = HistoryService;
exports.HistoryService = HistoryService = __decorate([
    (0, common_1.Injectable)()
], HistoryService);
//# sourceMappingURL=history.service.js.map