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
const User_1 = __importDefault(require("../models/User"));
const sequelize_1 = __importDefault(require("sequelize"));
class UserController extends BaseController_1.default {
    constructor() {
        super();
        this.getUsers = () => __awaiter(this, void 0, void 0, function* () {
            try {
                let users = yield User_1.default.findAll();
                return users;
            }
            catch (err) {
                throw err;
            }
        });
        this.createUser = (user) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield User_1.default.create(Object.assign({}, user));
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.deleteUser = (userId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield User_1.default.destroy({ where: { iduser: userId } });
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.getUser = (userId) => __awaiter(this, void 0, void 0, function* () {
            try {
                let userRes = yield User_1.default.findByPk(userId);
                return userRes;
            }
            catch (err) {
                throw err;
            }
        });
        this.updateToken = (userId, token) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield User_1.default.update({ token }, { where: { iduser: userId } });
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.getToken = (userId) => __awaiter(this, void 0, void 0, function* () {
            try {
                let userToken;
                userToken = yield User_1.default.findByPk(userId);
                return userToken.token;
            }
            catch (err) {
                throw err;
            }
        });
        this.getUserSerialized = (userId) => __awaiter(this, void 0, void 0, function* () {
            try {
                let userRes = yield User_1.default.findByPk(userId, { include: ["bankaccount", "cards"] });
                return this.serializeUser(userRes);
            }
            catch (err) {
                throw err;
            }
        });
        this.getUserBySearch = (param, page) => __awaiter(this, void 0, void 0, function* () {
            try {
                let users = yield User_1.default.findAll({
                    where: {
                        nickname: {
                            [sequelize_1.default.Op.like]: `%${param}%`
                        }
                    },
                    offset: (10 * page),
                    limit: 10
                });
                return users;
            }
            catch (err) {
                throw err;
            }
        });
        this.getUserByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            try {
                let userRes = yield User_1.default.findOne({ where: { email } });
                return userRes;
            }
            catch (err) {
                throw err;
            }
        });
        this.getUserByEmailSerialized = (email) => __awaiter(this, void 0, void 0, function* () {
            try {
                let userRes = yield User_1.default.findOne({ where: { email } });
                return this.serializeUser(userRes);
            }
            catch (err) {
                throw err;
            }
        });
        this.updatePhoto = (userId, pImage) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield User_1.default.update({ image: pImage }, { where: { iduser: userId } });
            }
            catch (err) {
                throw err;
            }
        });
    }
    serializeUser(user) {
        delete user['dataValues']['token'];
        delete user['dataValues']['password'];
        delete user['dataValues']['createdAt'];
        delete user['dataValues']['updatedAt'];
        delete user['_previousDataValues']['token'];
        delete user['_previousDataValues']['password'];
        delete user['_previousDataValues']['createdAt'];
        delete user['_previousDataValues']['updatedAt'];
        return user;
    }
}
exports.default = UserController;
