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
exports.HistoryController = void 0;
const common_1 = require("@nestjs/common");
const auth_helper_1 = require("../../../helpers/auth.helper");
const history_resolver_1 = require("../../../resolver/history/history.resolver");
let HistoryController = class HistoryController {
    constructor(HistoryResolver) {
        this.HistoryResolver = HistoryResolver;
    }
    async getUserHistory(req, res) {
        const token = await (0, auth_helper_1.getToken)(req);
        const payload = await (0, auth_helper_1.getTokenPayload)(token);
        const history = await this.HistoryResolver.getHistory(payload.email);
        if (history[0]) {
            res.status(200).send(history);
        }
        else {
            res.status(200).send('Nothing in history');
        }
    }
};
exports.HistoryController = HistoryController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Object]),
    __metadata("design:returntype", Promise)
], HistoryController.prototype, "getUserHistory", null);
exports.HistoryController = HistoryController = __decorate([
    (0, common_1.Controller)('history'),
    __metadata("design:paramtypes", [history_resolver_1.HistoryResolver])
], HistoryController);
//# sourceMappingURL=history.controller.js.map