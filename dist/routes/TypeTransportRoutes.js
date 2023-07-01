"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticator_1 = __importDefault(require("../middlewares/authenticator"));
const modelValidator_1 = __importDefault(require("../middlewares/modelValidator"));
const TypeTransportService_1 = __importDefault(require("../services/TypeTransportService"));
const transportRoutes = express_1.Router();
const validator = new modelValidator_1.default();
const typeTransportService = new TypeTransportService_1.default();
transportRoutes.put('/:idadventure/stop/:idstop/typetransport/create', [authenticator_1.default, validator.typeTransport], typeTransportService.createTypeTransport);
transportRoutes.put('/:idadventure/stop/:idstop/typetransport/update', authenticator_1.default, typeTransportService.updateTypeTransport);
transportRoutes.delete('/:idadventure/stop/:idstop/typetransport/:idtypetransport', authenticator_1.default, typeTransportService.deleteTypeTransport);
exports.default = transportRoutes;
