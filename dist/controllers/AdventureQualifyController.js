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
const UserController_1 = __importDefault(require("./UserController"));
const AdventureQualify_1 = __importDefault(require("../models/AdventureQualify"));
class AdventureQualifyController extends BaseController_1.default {
    constructor() {
        super();
        this.userController = new UserController_1.default;
    }
    /**
     * Get AdventureQualify by id
     * @param {*} idadventurequalify
     */
    getAdventureQualify(adventureId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let adventureQualify = yield AdventureQualify_1.default.findByPk(adventureId);
                return adventureQualify;
            }
            catch (err) {
                throw err;
            }
        });
    }
    /**
     * This method return the
     */
    getAdventuresQualifies(userId, page) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let adventuresQualifies = yield AdventureQualify_1.default.findAll({ where: { iduser: userId }, offset: (10 * page), limit: 10 });
                return adventuresQualifies;
            }
            catch (err) {
                throw err;
            }
        });
    }
    /**
     * Create AdventureQualify with require
     */
    createAdventureQualify(userId, adventureId, pqualify) {
        return __awaiter(this, void 0, void 0, function* () {
            let transaction;
            try {
                transaction = yield this.sequelize.transaction();
                let adventureQualify = yield AdventureQualify_1.default.create({
                    iduser: userId,
                    idadventure: adventureId,
                    qualify: pqualify
                }, { transaction: transaction });
                yield transaction.commit();
                return adventureQualify;
            }
            catch (err) {
                yield transaction.rollback();
                throw err;
            }
        });
    }
}
exports.default = AdventureQualifyController;
