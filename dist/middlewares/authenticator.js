"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_1 = __importDefault(require("../config/errors"));
const authenticator = (req, res, next) => {
    const token = req.header('authorizationapp');
    if (!token)
        return res.status(401).json({ 'error': errors_1.default.token_invalid });
    try {
        jsonwebtoken_1.default.verify(token, '0dise4pptr4v31pr0y3ct');
        next();
    }
    catch (error) {
        res.status(401).json({
            status: errors_1.default.error,
            message: errors_1.default.token_invalid,
            response: error
        });
    }
};
exports.default = authenticator;
