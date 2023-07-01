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
const Recommendation_1 = __importDefault(require("../models/Recommendation"));
/**
 * RecommendationController
 */
class RecommendationController extends BaseController_1.default {
    constructor() {
        super();
        this.getRecommendations = () => __awaiter(this, void 0, void 0, function* () {
            try {
                let recommendations = yield Recommendation_1.default.findAll();
                return recommendations;
            }
            catch (err) {
                throw err;
            }
        });
        this.createRecommendation = (recommendation) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield Recommendation_1.default.create(Object.assign({}, recommendation));
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.updateRecommendation = (recommendation, recommendationId) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield Recommendation_1.default.update(Object.assign({}, recommendation), { where: { idrecommendation: recommendationId } });
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.deleteRecommendation = (recommendationId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield Recommendation_1.default.destroy({ where: { idrecommendation: recommendationId } });
                return response;
            }
            catch (err) {
                throw err;
            }
        });
    }
    getRecommendation(recommendationId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let recommendation = yield Recommendation_1.default.findByPk(recommendationId);
                return recommendation;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = RecommendationController;
