"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const database_js_1 = __importDefault(require("../config/database.js"));
// Model Card
let Card = database_js_1.default.define('Cards', {
    idcard: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    iduser: {
        type: sequelize_1.default.INTEGER,
        allowNull: false
    },
    numberCard: {
        type: sequelize_1.default.TEXT,
        allowNull: false
    },
    verificationCode: {
        type: sequelize_1.default.INTEGER,
        allowNull: false
    },
    nameUserCard: {
        type: sequelize_1.default.TEXT,
        allowNull: false
    },
    expiredDate: {
        type: sequelize_1.default.DATEONLY,
        allowNull: true
    },
    typeCard: {
        type: sequelize_1.default.INTEGER,
        allowNull: false
    }
});
// export Card model for use in other files.
exports.default = Card;
