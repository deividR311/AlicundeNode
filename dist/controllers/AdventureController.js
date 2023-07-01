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
const sequelize_1 = __importDefault(require("sequelize"));
const BaseController_1 = __importDefault(require("./BaseController"));
const Book_1 = __importDefault(require("../models/Book"));
const Stop_1 = __importDefault(require("../models/Stop"));
const AdventureTag_1 = __importDefault(require("../models/AdventureTag"));
class AdventureController extends BaseController_1.default {
    constructor() {
        super();
        this.getAdventure = (idadventure) => __awaiter(this, void 0, void 0, function* () {
            try {
                let adventure = yield Book_1.default.findByPk(idadventure, { include: ["user"] });
                return adventure;
            }
            catch (err) {
                throw err;
            }
        });
        this.getAdventureWithInfo = (idadventure) => __awaiter(this, void 0, void 0, function* () {
            try {
                let adventure = yield Book_1.default.findByPk(idadventure, { include: [
                        "user",
                        {
                            model: Stop_1.default,
                            as: 'stops',
                            include: ['images', 'recommendations', 'cautions', 'stopPhones', 'typeTransport']
                        }
                    ],
                    order: [
                        [{ model: Stop_1.default, as: 'stops' }, 'createdAt', 'asc']
                    ]
                });
                return adventure;
            }
            catch (err) {
                throw err;
            }
        });
        this.getAdventures = (page) => __awaiter(this, void 0, void 0, function* () {
            try {
                let adventures = yield Book_1.default.findAll({ offset: (10 * page), limit: 10, include: ["user"], order: [['idadventure', 'desc']] });
                return adventures;
            }
            catch (err) {
                throw err;
            }
        });
        this.createAdventure = (adventure) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield Book_1.default.create(Object.assign({}, adventure));
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.deleteAdventure = (adventureId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield Book_1.default.destroy({ where: { idadventure: adventureId } });
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.updateAdventure = (adventure) => __awaiter(this, void 0, void 0, function* () {
            let transaction;
            try {
                transaction = yield this.sequelize.transaction();
                yield Book_1.default.update(Object.assign({}, adventure), { where: { idadventure: adventure.idadventure } });
                let response = yield this.getAdventure(adventure.idadventure);
                yield transaction.commit();
                return response;
            }
            catch (err) {
                yield transaction.rollback();
                throw err;
            }
        });
        this.setTags = (adventureId, tags) => __awaiter(this, void 0, void 0, function* () {
            try {
                for (let tag of tags) {
                    yield AdventureTag_1.default.create({
                        idadventure: adventureId,
                        idtag: tag
                    });
                }
                return true;
            }
            catch (err) {
                throw err;
            }
        });
        this.getAdventureByUser = (userId, page) => __awaiter(this, void 0, void 0, function* () {
            try {
                let adventures = yield Book_1.default.findAll({
                    where: { iduser: userId },
                    offset: (10 * page), limit: 10,
                    order: [['idadventure', 'desc']]
                });
                return adventures;
            }
            catch (err) {
                throw err;
            }
        });
        this.getAdventuresByFilterAnd = (adventureSource, adventureDestination, page) => __awaiter(this, void 0, void 0, function* () {
            try {
                let adventures = yield Book_1.default.findAll({
                    where: { adventureSource: adventureSource, adventureDestination: adventureDestination },
                    offset: (10 * page), limit: 10,
                    order: [['idadventure', 'desc']]
                });
                return adventures;
            }
            catch (err) {
                throw err;
            }
        });
        this.getAdventuresByFilterOr = (tags, page) => __awaiter(this, void 0, void 0, function* () {
            try {
                let adventureTags = yield AdventureTag_1.default.findAll({
                    attributes: [
                        [sequelize_1.default.fn('DISTINCT', sequelize_1.default.col('idadventure')), 'idadventure'],
                    ],
                    where: {
                        idtag: {
                            [sequelize_1.default.Op.or]: tags
                        }
                    }
                });
                adventureTags.map((adventureTag) => { return adventureTag.idadventure; });
                let adventures = yield Book_1.default.findAll({
                    where: {
                        idadventure: {
                            [sequelize_1.default.Op.or]: adventureTags
                        }
                    },
                    offset: (10 * page), limit: 10,
                });
                return adventures;
            }
            catch (err) {
                throw err;
            }
        });
        const Op = sequelize_1.default.Op;
    }
}
exports.default = AdventureController;
