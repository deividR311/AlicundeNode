"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticator_1 = __importDefault(require("../middlewares/authenticator"));
const modelValidator_1 = __importDefault(require("../middlewares/modelValidator"));
const CautionService_1 = __importDefault(require("../services/CautionService"));
const cautionRoutes = express_1.Router();
const validator = new modelValidator_1.default();
const cautionService = new CautionService_1.default();
//Routes of Cautions
cautionRoutes.put('/:idadventure/stop/:idstop/caution/create', [authenticator_1.default, validator.caution], cautionService.createCaution);
cautionRoutes.put('/:idadventure/stop/:idstop/caution/update', authenticator_1.default, cautionService.updateCaution);
cautionRoutes.delete('/:idadventure/stop/:idstop/caution/:idcaution', authenticator_1.default, cautionService.deleteCaution);
exports.default = cautionRoutes;
