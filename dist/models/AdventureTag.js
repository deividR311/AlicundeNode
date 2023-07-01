"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const database_js_1 = __importDefault(require("../config/database.js"));
// Model Card
let AdventureTag = database_js_1.default.define('AdventureTags', {
    idadventure: {
        type: sequelize_1.default.INTEGER,
        allowNull: false
    },
    idtag: {
        type: sequelize_1.default.INTEGER,
        allowNull: false
    }
});
// export Card model for use in other files.
exports.default = AdventureTag;
