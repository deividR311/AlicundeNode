"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const modelValidator_1 = __importDefault(require("../middlewares/modelValidator"));
const authenticationService_1 = __importDefault(require("../services/authenticationService"));
const authRoutes = express_1.Router();
const authValidator = new modelValidator_1.default();
const authenticationService = new authenticationService_1.default();
authRoutes.post('/login', authValidator.login, authenticationService.login);
exports.default = authRoutes;
