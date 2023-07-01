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
const BaseService_1 = __importDefault(require("./BaseService"));
const BankAccountController_1 = __importDefault(require("../controllers/BankAccountController"));
class BankAccountService extends BaseService_1.default {
    constructor() {
        super();
        this.createBankAccount = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.bankAccountController.createBankAccount(req.body);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    response
                });
            }
            catch (err) {
                this.logger.error("createBankAccount@BankAccountService " + JSON.stringify(err));
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.bankAccountController = new BankAccountController_1.default;
    }
    updateBankAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.bankAccountController.updateBankAccount(req.body);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    response
                });
            }
            catch (err) {
                this.logger.error("updateBankAccount@BankAccountService " + JSON.stringify(err));
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
    }
    deleteBankAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.bankAccountController.deleteBankAccount(req.params.idbankaccount);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    response
                });
            }
            catch (err) {
                this.logger.error("createBankAccount@BankAccountService " + JSON.stringify(err));
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
    }
}
exports.default = BankAccountService;
