"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticator_1 = __importDefault(require("../middlewares/authenticator"));
const modelValidator_1 = __importDefault(require("../middlewares/modelValidator"));
const BuyAdventureService_1 = __importDefault(require("../services/BuyAdventureService"));
const buyAdventureRoutes = express_1.Router();
const validator = new modelValidator_1.default();
const buyAdventureService = new BuyAdventureService_1.default();
buyAdventureRoutes.put('/create', [authenticator_1.default, validator.buyAdventure], buyAdventureService.createBuyAdventure);
buyAdventureRoutes.get('/:iduser/list', authenticator_1.default, buyAdventureService.getBuyAdventures);
buyAdventureRoutes.get('/:idbuyadventure', authenticator_1.default, buyAdventureService.getBuyAdventure);
buyAdventureRoutes.get('/:iduser/buyadventure/:idadventure', authenticator_1.default, buyAdventureService.getBuyAdventureByIds);
buyAdventureRoutes.get('/payment/:price', authenticator_1.default, buyAdventureService.getTotalPaymentPrice);
exports.default = buyAdventureRoutes;
