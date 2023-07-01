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
const BuyAdventureController_1 = __importDefault(require("../controllers/BuyAdventureController"));
class BuyAdventureService extends BaseService_1.default {
    constructor() {
        super();
        this.getBuyAdventure = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { idbuyadventure } = req.params;
                const response = yield this.buyAdventureController.getBuyAdventure(idbuyadventure);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    response
                });
            }
            catch (err) {
                this.logger.error("setTags@AdventureService " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.getBuyAdventures = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { iduser } = req.params;
                const { page } = req.query;
                const response = yield this.buyAdventureController.getBuyAdventures(iduser, Number(page) || 0);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    response
                });
            }
            catch (err) {
                this.logger.error("setTags@AdventureService " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.getBuyAdventureByIds = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { iduser, idadventure } = req.params;
                const response = yield this.buyAdventureController.getBuyAdventureByIds(iduser, idadventure);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    response
                });
            }
            catch (err) {
                this.logger.error("setTags@AdventureService " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.createBuyAdventure = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.buyAdventureController.createBuyAdventure(req.body);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    response
                });
            }
            catch (err) {
                this.logger.error("setTags@AdventureService " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.getTotalPaymentPrice = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.buyAdventureController.getPaymentPrice(req.query);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    response
                });
            }
            catch (err) {
                this.logger.error("setTags@AdventureService " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.buyAdventureController = new BuyAdventureController_1.default;
    }
}
exports.default = BuyAdventureService;
