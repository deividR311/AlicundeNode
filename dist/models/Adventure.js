"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const database_js_1 = __importDefault(require("../config/database.js"));
// Model Adventure
let Adventure = database_js_1.default.define('Adventure', {
    idadventure: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    iduser: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
    },
    nameAdventure: {
        type: sequelize_1.default.STRING(200),
        allowNull: false,
    },
    transports: {
        type: sequelize_1.default.TEXT,
        allowNull: true,
    },
    generalInfo: {
        type: sequelize_1.default.TEXT,
        allowNull: true
    },
    citySource: {
        type: sequelize_1.default.STRING(100),
        allowNull: true
    },
    countrySource: {
        type: sequelize_1.default.STRING(100),
        allowNull: true
    },
    cityDestination: {
        type: sequelize_1.default.STRING(100),
        allowNull: true
    },
    countryDestination: {
        type: sequelize_1.default.STRING(100),
        allowNull: true
    },
    adventureSource: {
        type: sequelize_1.default.STRING(100),
        allowNull: true
    },
    adventureDestination: {
        type: sequelize_1.default.STRING(100),
        allowNull: true
    },
    distance: {
        type: sequelize_1.default.DOUBLE,
        allowNull: true
    },
    totalCost: {
        type: sequelize_1.default.DOUBLE,
        allowNull: true
    },
    price: {
        type: sequelize_1.default.DOUBLE,
        allowNull: true
    },
    bestPhoto: {
        type: sequelize_1.default.TEXT,
        allowNull: true
    },
    typeTravel: {
        type: sequelize_1.default.STRING(200),
        allowNull: true
    },
    durationDays: {
        type: sequelize_1.default.INTEGER,
        allowNull: true
    },
    isVisible: {
        type: sequelize_1.default.BOOLEAN,
        allowNull: false
    },
    baggage: {
        type: sequelize_1.default.TEXT,
        allowNull: true
    },
    weather: {
        type: sequelize_1.default.STRING(50),
        allowNull: true
    }
});
// export User model for use in other files.
exports.default = Adventure;
