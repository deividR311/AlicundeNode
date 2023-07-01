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
const Card_1 = __importDefault(require("../models/Card"));
class CardController extends BaseController_1.default {
    constructor() {
        super();
        this.getCards = (userId) => __awaiter(this, void 0, void 0, function* () {
            try {
                let cards = yield Card_1.default.findAll({ where: { iduser: userId } });
                return cards;
            }
            catch (err) {
                throw err;
            }
        });
        this.createCard = (card) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield Card_1.default.create(Object.assign({}, card));
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.updateCard = (card, cardId) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield Card_1.default.update(Object.assign({}, card), { where: { idcard: cardId } });
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.deleteCard = (cardId) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield Card_1.default.destroy({ where: { idcard: cardId } });
            }
            catch (err) {
                throw err;
            }
        });
        this.getCard = (cardId) => __awaiter(this, void 0, void 0, function* () {
            try {
                let cardRes = yield Card_1.default.findByPk(cardId);
                return cardRes;
            }
            catch (err) {
                throw err;
            }
        });
        this.getCardByUser = (cardId) => __awaiter(this, void 0, void 0, function* () {
            try {
                let cardRes = yield Card_1.default.findAll({ where: { iduser: cardId } });
                return cardRes;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = CardController;
