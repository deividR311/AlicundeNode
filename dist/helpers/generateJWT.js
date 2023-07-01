"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_1 = __importDefault(require("../config/errors"));
const generateJWT = (id) => {
    console.log(id);
    return new Promise((resolve, reject) => {
        const userId = `${id}`;
        jsonwebtoken_1.default.sign({ data: userId }, '0dise4pptr4v31pr0y3ct', { expiresIn: '30 days' }, (err, token) => {
            if (err) {
                console.log(err);
                reject(errors_1.default.token_failed);
            }
            else {
                resolve(token);
            }
            ;
        });
    });
};
exports.default = generateJWT;
