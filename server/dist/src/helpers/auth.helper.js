"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = exports.encrypt = exports.generateToken = void 0;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authorization = process.env.JWT_SECRET;
const generateToken = async (user) => {
    console.log(authorization, 'auth');
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
//# sourceMappingURL=auth.helper.js.map