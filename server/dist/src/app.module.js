"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const signup_controller_1 = require("./signup/controller/signup/signup.controller");
const signup_module_1 = require("./signup/signup.module");
const index_controller_1 = require("./index/controller/index/index.controller");
const users_service_1 = require("./services/users/users.service");
const login_controller_1 = require("./login/controller/login/login.controller");
const withdraw_controller_1 = require("./withdraw/controller/withdraw/withdraw.controller");
const history_controller_1 = require("./history/controller/history/history.controller");
const deposit_controller_1 = require("./deposit/controller/deposit/deposit.controller");
const deposit_service_1 = require("./services/deposit/deposit.service");
const history_service_1 = require("./services/history/history.service");
const user_resolver_1 = require("./resolver/user/user.resolver");
const deposit_resolver_1 = require("./resolver/deposit/deposit.resolver");
const history_resolver_1 = require("./resolver/history/history.resolver");
const config_1 = require("@nestjs/config");
const dashboard_controller_1 = require("./dashboard/controller/dashboard/dashboard.controller");
const transfer_controller_1 = require("./transfer/controller/transfer/transfer.controller");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI).then(() => {
    console.log('Connected to Mongodb');
});
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            signup_module_1.SignupModule,
        ],
        controllers: [
            signup_controller_1.SignupController,
            index_controller_1.IndexController,
            login_controller_1.LoginController,
            withdraw_controller_1.WithdrawController,
            history_controller_1.HistoryController,
            deposit_controller_1.DepositController,
            dashboard_controller_1.DashboardController,
            transfer_controller_1.TransferController,
        ],
        providers: [
            users_service_1.UsersService,
            deposit_service_1.DepositService,
            history_service_1.HistoryService,
            user_resolver_1.UserResolver,
            deposit_resolver_1.DepositResolver,
            history_resolver_1.HistoryResolver,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map