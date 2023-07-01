"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticator_1 = __importDefault(require("../middlewares/authenticator"));
const modelValidator_1 = __importDefault(require("../middlewares/modelValidator"));
const StopService_1 = __importDefault(require("../services/StopService"));
const stopRoutes = express_1.Router();
const validator = new modelValidator_1.default();
const stopService = new StopService_1.default();
stopRoutes.put('/:idadventure/stop/create', [authenticator_1.default, validator.stop], stopService.createStop);
stopRoutes.put('/:idadventure/stop/update', authenticator_1.default, stopService.updateStop);
stopRoutes.delete('/:idadventure/stop/:idstop', authenticator_1.default, stopService.deleteStop);
// stopRoutes.post('/:idadventure/stop/:idstop/uploadimages', authenticator, stopService.uploadStopImages);
stopRoutes.get('/:idadventure/stop/:idstop', authenticator_1.default, stopService.getStop);
stopRoutes.get('/:idadventure/stops', authenticator_1.default, stopService.getStops);
exports.default = stopRoutes;
