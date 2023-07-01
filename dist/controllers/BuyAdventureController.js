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
const BuyAdventure_1 = __importDefault(require("../models/BuyAdventure"));
const Book_1 = __importDefault(require("../models/Book"));
class BuyAdventureController extends BaseController_1.default {
    constructor() {
        super();
        this.getBuyAdventure = (adventureId) => __awaiter(this, void 0, void 0, function* () {
            try {
                let buyAdventure = yield BuyAdventure_1.default.findByPk(adventureId);
                return buyAdventure;
            }
            catch (err) {
                throw err;
            }
        });
        this.getBuyAdventures = (userId, page) => __awaiter(this, void 0, void 0, function* () {
            try {
                let buyAdventures = yield BuyAdventure_1.default.findAll({
                    where: { iduser: userId },
                    offset: (10 * page),
                    limit: 10,
                    include: ["boughtAdventure"]
                });
                return buyAdventures;
            }
            catch (err) {
                throw err;
            }
        });
        this.getBuyAdventureByIds = (userId, adventureId) => __awaiter(this, void 0, void 0, function* () {
            try {
                let adventures = yield BuyAdventure_1.default.findAll({
                    where: { iduser: userId, idadventure: adventureId }
                });
                return adventures;
            }
            catch (err) {
                throw err;
            }
        });
        this.createBuyAdventure = (buyAdventure) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield BuyAdventure_1.default.create(Object.assign({}, buyAdventure));
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.userController = new UserController_1.default;
    }
    getPaymentPrice(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let adventure;
                let price = 0;
                const { ids } = query;
                const idsArray = JSON.parse(ids);
                for (let i = 0; i < idsArray.length; i++) {
                    adventure = yield Book_1.default.findByPk(idsArray[i]);
                    price += adventure.price;
                }
                return price;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
//Exports-------------------------------------
exports.default = BuyAdventureController;
