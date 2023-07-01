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
const generateJWT_1 = __importDefault(require("../helpers/generateJWT"));
class AuthenticationController extends BaseController_1.default {
    constructor() {
        super();
        this.login = (credentials) => __awaiter(this, void 0, void 0, function* () {
            let user;
            try {
                const { email, password } = credentials;
                user = yield User_1.default.findOne({ where: { email } });
                if (!user)
                    return false;
                let passwordValidate = this.bcrypt.compareSync(password, user.password);
                if (!passwordValidate)
                    return false;
                const token = yield generateJWT_1.default(user.iduser);
                return { user, token };
            }
            catch (error) {
                throw error;
            }
        });
    }
}
//Exports-------------------------------------
exports.default = AuthenticationController;
