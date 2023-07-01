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
const TypeTransport_1 = __importDefault(require("../models/TypeTransport"));
class TypeTransportController extends BaseController_1.default {
    constructor() {
        super();
        this.getTypeTransports = () => __awaiter(this, void 0, void 0, function* () {
            try {
                let transports = yield TypeTransport_1.default.findAll();
                return transports;
            }
            catch (err) {
                throw err;
            }
        });
        this.createTypeTransport = (transport) => __awaiter(this, void 0, void 0, function* () {
            try {
                let typeTransport = yield TypeTransport_1.default.create(Object.assign({}, transport));
                return typeTransport;
            }
            catch (err) {
                throw err;
            }
        });
        this.deleteTypeTransport = (transportId) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield TypeTransport_1.default.destroy({ where: { idtypetransport: transportId } });
            }
            catch (err) {
                throw err;
            }
        });
    }
    updateTypeTransport(transport, transportId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let typeTransport = yield TypeTransport_1.default.update(Object.assign({}, transport), { where: { idtypetransport: transportId } });
                return typeTransport;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = TypeTransportController;
