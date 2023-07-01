"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const database_js_1 = __importDefault(require("../config/database.js"));
// Model Stop
let StopImage = database_js_1.default.define('StopsImages', {
    idstopimage: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idstop: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
    },
    name: {
        type: sequelize_1.default.TEXT,
        allowNull: false,
    }
});
// export User model for use in other files.
exports.default = StopImage;
