"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseController_1 = __importDefault(require("./BaseController"));
const Autor_1 = __importDefault(require("../models/Autor"));
class AuthorController extends BaseController_1.default {
    constructor() {
        super();
        this.getAuthor = (authorId) => __awaiter(this, void 0, void 0, function* () {
            try {
                let author = yield Autor_1.default.findByPk(authorId);
                return author;
            }
            catch (err) {
                throw err;
            }
        });
        this.getAuthors = (page) => __awaiter(this, void 0, void 0, function* () {
            try {
                let authors = yield Autor_1.default.findAll({ offset: (10 * page), limit: 10 });
                return authors;
            }
            catch (err) {
                throw err;
            }
        });
        this.createAuthor = (author) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield Autor_1.default.create(Object.assign({}, author));
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.deleteAuthor = (authorId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield Autor_1.default.destroy({ where: { authorId } });
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.updateAuthor = (author) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield Autor_1.default.update(Object.assign({}, author), { where: { id: author.id } });
                let response = yield this.getAuthor(author.id);
                return response;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = AuthorController;
