"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticator_1 = __importDefault(require("../middlewares/authenticator"));
const modelValidator_1 = __importDefault(require("../middlewares/modelValidator"));
const StopPhoneService_1 = __importDefault(require("../services/StopPhoneService"));
const stopPhoneRoutes = express_1.Router();
const validator = new modelValidator_1.default();
const stopPhoneService = new StopPhoneService_1.default();
stopPhoneRoutes.put('/:idadventure/stop/:idstop/stopphone/create', [authenticator_1.default, validator.stopPhone], stopPhoneService.createStopPhone);
stopPhoneRoutes.put('/:idadventure/stop/:idstop/stopphone/update', authenticator_1.default, stopPhoneService.updateStopPhone);
stopPhoneRoutes.delete('/:idadventure/stop/:idstop/stopphone/:idstopphone', authenticator_1.default, stopPhoneService.deleteStopPhone);
exports.default = stopPhoneRoutes;
