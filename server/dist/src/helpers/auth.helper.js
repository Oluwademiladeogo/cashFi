"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenPayload = exports.getToken = exports.compare = exports.encrypt = exports.generateToken = void 0;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const common_1 = require("@nestjs/common");
dotenv.config();
const authorization = process.env.JWT_SECRET;
const generateToken = async (user) => {
    const payload = {
        id: user.id,
        name: user.username,
        email: user.email,
        number: user.number,
    };
    const token = await jwt.sign(payload, authorization);
    return token;
};
exports.generateToken = generateToken;
const encrypt = async (password) => {
    const salt = await bcrypt.genSalt(13);
    const result = await bcrypt.hash(password, salt);
    return { salt, result };
};
exports.encrypt = encrypt;
const compare = async (enteredValue, hashedValue) => {
    return await bcrypt.compare(enteredValue, hashedValue);
};
exports.compare = compare;
const getToken = async (req) => {
    try {
        if (!req.headers || !req.headers['authorization'])
            throw new common_1.HttpException('Unauthorised', common_1.HttpStatus.UNAUTHORIZED);
        const bearerToken = req.headers['authorization']?.split(' ')[1];
        return bearerToken;
    }
    catch (error) {
        throw new common_1.HttpException('Internal Server Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
};
exports.getToken = getToken;
const getTokenPayload = async (bearerToken) => {
    try {
        const payload = await jwt.verify(bearerToken, process.env.JWT_SECRET);
        return payload;
    }
    catch (error) {
        throw new common_1.HttpException('Internal Server Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
};
exports.getTokenPayload = getTokenPayload;
//# sourceMappingURL=auth.helper.js.map