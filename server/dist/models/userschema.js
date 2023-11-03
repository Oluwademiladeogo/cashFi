"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose = require("mongoose");
const userModel = mongoose.model('users', new mongoose.Schema({
    username: {
        type: String,
        min: 3,
        max: 200,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        minlength: 5,
        maxlength: 255,
        required: true,
    },
    number: {
        type: Number,
        minlength: 5,
        maxlength: 20,
        required: true,
    },
    password: {
        type: String,
        minlength: 5,
        maxlength: 1024,
        required: true,
    },
    passwordSalt: {
        type: String,
        required: true,
    },
    pin: {
        type: String,
        minlength: 5,
        maxlength: 1024,
        required: true,
    },
    pinSalt: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    },
    history: [String]
}));
exports.userModel = userModel;
//# sourceMappingURL=userschema.js.map