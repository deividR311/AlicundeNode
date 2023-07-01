"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const database_js_1 = __importDefault(require("../config/database.js"));
// Model Tag
let Tag = database_js_1.default.define('Tags', {
    idtag: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.default.STRING(255),
        allowNull: false,
    },
    description: {
        type: sequelize_1.default.STRING(255),
        allowNull: false,
    }
});
// export User model for use in other files.
exports.default = Tag;
