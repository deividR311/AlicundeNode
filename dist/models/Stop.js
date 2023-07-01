"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const database_js_1 = __importDefault(require("../config/database.js"));
// Model Stop
let Stop = database_js_1.default.define('Stops', {
    idstop: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idadventure: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
    },
    nameStop: {
        type: sequelize_1.default.STRING(200),
        allowNull: true,
    },
    nameLocationStop: {
        type: sequelize_1.default.STRING(200),
        allowNull: true,
    },
    latitude: {
        type: sequelize_1.default.STRING(20),
        allowNull: true
    },
    longitude: {
        type: sequelize_1.default.STRING(20),
        allowNull: true
    },
    description: {
        type: sequelize_1.default.TEXT,
        allowNull: true
    },
    cost: {
        type: sequelize_1.default.DOUBLE,
        allowNull: true
    },
    wheather: {
        type: sequelize_1.default.STRING(50),
        allowNull: true
    },
    order: {
        type: sequelize_1.default.INTEGER,
        allowNull: true
    },
    isPointStart: {
        type: sequelize_1.default.BOOLEAN,
        allowNull: true
    }
});
// export User model for use in other files.
exports.default = Stop;
