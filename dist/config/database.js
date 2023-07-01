"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dataBase = new sequelize_1.Sequelize('b3qdicdbgjcrnfsptzoj', 'uz7ft17yaof7mrof', 'bvNyFY2vk97jT5XR4pz5', {
    host: 'b3qdicdbgjcrnfsptzoj-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    logging: false
});
dataBase.authenticate()
    .then(() => { console.log('DataBase connection established'); })
    .catch((err) => { console.log('DataBase connection failed', err); });
exports.default = dataBase;
