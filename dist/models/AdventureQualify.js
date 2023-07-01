"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const database_js_1 = __importDefault(require("../config/database.js"));
// Model AdventureQualify
let AdventureQualify = database_js_1.default.define('AdventuresQualifies', {
    idadventurequalify: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    iduser: {
        type: sequelize_1.default.INTEGER
    },
    idadventure: {
        type: sequelize_1.default.INTEGER
    },
    qualify: {
        type: sequelize_1.default.STRING(2),
        allowNull: false,
    }
});
// export AdventureQualify model for use in other files.
exports.default = AdventureQualify;
