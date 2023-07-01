"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = __importDefault(require("./Book"));
const Autor_1 = __importDefault(require("./Autor"));
Book_1.default.belongsToMany(Autor_1.default, { as: 'Autor', through: 'BookAuthors', foreignKey: 'id', sourceKey: 'id' });
Autor_1.default.belongsToMany(Book_1.default, { as: 'Book', through: 'BookAuthors', foreignKey: 'id', sourceKey: 'id' });
