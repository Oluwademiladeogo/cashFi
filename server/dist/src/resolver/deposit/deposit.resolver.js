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
exports.DepositResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const deposit_service_1 = require("../../services/deposit/deposit.service");
let DepositResolver = class DepositResolver {
    constructor(DepositService) {
        this.DepositService = DepositService;
    }
    async depositData(data) {
        return await this.DepositService.depositData(data);
    }
};
exports.DepositResolver = DepositResolver;
__decorate([
    (0, graphql_1.Mutation)(),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DepositResolver.prototype, "depositData", null);
exports.DepositResolver = DepositResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [deposit_service_1.DepositService])
], DepositResolver);
//# sourceMappingURL=deposit.resolver.js.map