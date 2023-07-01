"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const database_js_1 = __importDefault(require("../config/database.js"));
// Model BuyAdventure
let BuyAdventure = database_js_1.default.define('BuyAdventure', {
    idbuyadventure: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    iduser: {
        type: sequelize_1.default.INTEGER,
    },
    idadventure: {
        type: sequelize_1.default.INTEGER,
    },
    waytopay: {
        type: sequelize_1.default.STRING(255),
        allowNull: false,
    },
    state: {
        type: sequelize_1.default.STRING(100),
        allowNull: false
    },
    codeFacturation: {
        type: sequelize_1.default.STRING(255),
        allowNull: false,
        unique: true
    }
});
// export BuyAdventure model for use in other files.
exports.default = BuyAdventure;
