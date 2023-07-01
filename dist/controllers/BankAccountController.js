"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseController_1 = __importDefault(require("./BaseController"));
const BankAccount_1 = __importDefault(require("../models/BankAccount"));
class BankAccountController extends BaseController_1.default {
    constructor() {
        super();
        this.getBankAccount = (idbankaccount) => __awaiter(this, void 0, void 0, function* () {
            try {
                let bankAccount = yield BankAccount_1.default.findByPk(idbankaccount);
                return bankAccount;
            }
            catch (err) {
                throw err;
            }
        });
        this.getBankAccounts = (page) => __awaiter(this, void 0, void 0, function* () {
            try {
                let bankAccounts = yield BankAccount_1.default.findAll({ offset: (10 * page), limit: 10 });
                return bankAccounts;
            }
            catch (err) {
                throw err;
            }
        });
        this.createBankAccount = (bankAccount) => __awaiter(this, void 0, void 0, function* () {
            try {
                let bankAccountNew = yield BankAccount_1.default.create(Object.assign({}, bankAccount));
                return bankAccountNew;
            }
            catch (err) {
                throw err;
            }
        });
        this.deleteBankAccount = (bankAccountId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield BankAccount_1.default.destroy({ where: { idbankaccount: bankAccountId } });
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.updateBankAccount = (bankAccount) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield BankAccount_1.default.update(Object.assign({}, bankAccount), { where: { idbankaccount: bankAccount.idbankaccount } });
                return response;
            }
            catch (err) {
                throw err;
            }
        });
    }
    getBankAccountByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let bankAccounts = yield BankAccount_1.default.findAll({ where: { iduser: userId } });
                return bankAccounts;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = BankAccountController;
