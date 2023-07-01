"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticator_1 = __importDefault(require("../middlewares/authenticator"));
const modelValidator_1 = __importDefault(require("../middlewares/modelValidator"));
const BankAccountService_1 = __importDefault(require("../services/BankAccountService"));
const bankAccountRoutes = express_1.Router();
const authValidator = new modelValidator_1.default();
const bankAccountService = new BankAccountService_1.default();
bankAccountRoutes.put('/create', authenticator_1.default, bankAccountService.createBankAccount);
bankAccountRoutes.put('/update', authenticator_1.default, bankAccountService.updateBankAccount);
bankAccountRoutes.delete('/delete/:idbankaccount', authenticator_1.default, bankAccountService.deleteBankAccount);
exports.default = bankAccountRoutes;
