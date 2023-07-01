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
const Stop_1 = __importDefault(require("../models/Stop"));
const StopImage_1 = __importDefault(require("../models/StopImage"));
class StopController extends BaseController_1.default {
    constructor() {
        super();
        this.getStop = (stopId) => __awaiter(this, void 0, void 0, function* () {
            try {
                let stop = yield Stop_1.default.findByPk(stopId, { include: ["images", "recommendations", "cautions", "stopPhones", "typeTransport"] });
                return stop;
            }
            catch (err) {
                throw err;
            }
        });
        this.getStops = (page) => __awaiter(this, void 0, void 0, function* () {
            try {
                let stops = yield Stop_1.default.findAll({ offset: (10 * page), limit: 10, include: ["images"] });
                return stops;
            }
            catch (err) {
                throw err;
            }
        });
        this.createStop = (stop) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield Stop_1.default.create(Object.assign({}, stop));
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.deleteStop = (stopId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield Stop_1.default.destroy({ where: { idstop: stopId } });
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.updateStop = (stop, stopId) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield Stop_1.default.update(Object.assign({}, stop), { where: { idstop: stopId } });
                const response = this.getStop(stopId);
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.setImage = (stopId, pname) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield StopImage_1.default.create({
                    idstop: stopId,
                    name: pname
                });
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.deleteImage = (stopImageId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield StopImage_1.default.destroy({ where: { idstopimage: stopImageId } });
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.deleteAllImages = (stopId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield StopImage_1.default.destroy({ where: { idstop: stopId } });
                return response;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = StopController;
