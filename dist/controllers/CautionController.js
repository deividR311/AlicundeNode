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
const Caution_1 = __importDefault(require("../models/Caution"));
class CautionController extends BaseController_1.default {
    constructor() {
        super();
        this.getCautions = () => __awaiter(this, void 0, void 0, function* () {
            try {
                let cautions = yield Caution_1.default.findAll();
                return cautions;
            }
            catch (err) {
                throw err;
            }
        });
        this.createCaution = (caution) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield Caution_1.default.create(Object.assign({}, caution));
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.updateCaution = (caution, cautionId) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield Caution_1.default.update(Object.assign({}, caution), { where: { idcaution: cautionId } });
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.deleteCaution = (cautionId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield Caution_1.default.destroy({ where: { idcaution: cautionId } });
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.getCaution = (cautionId) => __awaiter(this, void 0, void 0, function* () {
            try {
                let caution = yield Caution_1.default.findByPk(cautionId);
                return caution;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = CautionController;
