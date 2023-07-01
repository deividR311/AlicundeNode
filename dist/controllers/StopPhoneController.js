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
const StopPhone_1 = __importDefault(require("../models/StopPhone"));
class StopPhoneController extends BaseController_1.default {
    constructor() {
        super();
        this.getStopPhones = () => __awaiter(this, void 0, void 0, function* () {
            try {
                let stopPhones = yield StopPhone_1.default.findAll();
                return stopPhones;
            }
            catch (err) {
                throw err;
            }
        });
        this.createStopPhone = (phone) => __awaiter(this, void 0, void 0, function* () {
            try {
                let stopPhone = yield StopPhone_1.default.create(Object.assign({}, phone));
                return stopPhone;
            }
            catch (err) {
                throw err;
            }
        });
        this.updateStopPhone = (phone, phoneId) => __awaiter(this, void 0, void 0, function* () {
            try {
                let stopPhone = yield StopPhone_1.default.update(Object.assign({}, phone), { where: { idstopphone: phoneId } });
                return stopPhone;
            }
            catch (err) {
                throw err;
            }
        });
        this.deleteStopPhone = (phoneId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield StopPhone_1.default.destroy({ where: { idstopphone: phoneId } });
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.getStopPhone = (phoneId) => __awaiter(this, void 0, void 0, function* () {
            try {
                let stopPhone = yield StopPhone_1.default.findByPk(phoneId);
                return stopPhone;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = StopPhoneController;
