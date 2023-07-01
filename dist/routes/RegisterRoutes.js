"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticator_1 = __importDefault(require("../middlewares/authenticator"));
const modelValidator_1 = __importDefault(require("../middlewares/modelValidator"));
const RegisterService_1 = __importDefault(require("../services/RegisterService"));
const registerRoutes = express_1.Router();
const authValidator = new modelValidator_1.default();
const registerService = new RegisterService_1.default();
registerRoutes.post('/signup', authenticator_1.default, registerService.signUp);
exports.default = registerRoutes;
