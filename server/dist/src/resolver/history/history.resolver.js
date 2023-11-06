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
exports.HistoryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const history_service_1 = require("../../services/history/history.service");
let HistoryResolver = class HistoryResolver {
    constructor(HistoryService) {
        this.HistoryService = HistoryService;
    }
    async getHistory(email) {
        return await this.HistoryService.getHistory(email);
    }
    async insertHistory(email, message) {
        return await this.HistoryService.insertHistory(email, message);
    }
};
exports.HistoryResolver = HistoryResolver;
__decorate([
    (0, graphql_1.Query)(),
    __param(0, (0, graphql_1.Args)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HistoryResolver.prototype, "getHistory", null);
__decorate([
    (0, graphql_1.Mutation)(),
    __param(0, (0, graphql_1.Args)('email')),
    __param(1, (0, graphql_1.Args)('message')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], HistoryResolver.prototype, "insertHistory", null);
exports.HistoryResolver = HistoryResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [history_service_1.HistoryService])
], HistoryResolver);
//# sourceMappingURL=history.resolver.js.map