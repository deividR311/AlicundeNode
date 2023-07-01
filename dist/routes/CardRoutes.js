"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticator_1 = __importDefault(require("../middlewares/authenticator"));
const modelValidator_1 = __importDefault(require("../middlewares/modelValidator"));
const CardService_1 = __importDefault(require("../services/CardService"));
const cardRoutes = express_1.Router();
const validator = new modelValidator_1.default();
const cardService = new CardService_1.default();
cardRoutes.get('/', authenticator_1.default, cardService.getCards);
cardRoutes.put('/create', [authenticator_1.default, validator.card], cardService.createCard);
cardRoutes.put('/update', authenticator_1.default, cardService.updateCard);
cardRoutes.delete('/delete/:idcard', authenticator_1.default, cardService.deleteCard);
exports.default = cardRoutes;
