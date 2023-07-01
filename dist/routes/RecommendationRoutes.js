"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticator_1 = __importDefault(require("../middlewares/authenticator"));
const modelValidator_1 = __importDefault(require("../middlewares/modelValidator"));
const RecommendationService_1 = __importDefault(require("../services/RecommendationService"));
const recommendationRoutes = express_1.Router();
const validator = new modelValidator_1.default();
const recommendationService = new RecommendationService_1.default();
recommendationRoutes.put('/:idadventure/stop/:idstop/recommendation/create', [authenticator_1.default, validator.recommendation], recommendationService.createRecommendation);
recommendationRoutes.put('/:idadventure/stop/:idstop/recommendation/update', authenticator_1.default, recommendationService.updateRecommendation);
recommendationRoutes.delete('/:idadventure/stop/:idstop/recommendation/:idrecommendation', authenticator_1.default, recommendationService.deleteRecommendation);
exports.default = recommendationRoutes;
