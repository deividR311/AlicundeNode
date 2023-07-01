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
const Tag_1 = __importDefault(require("../models/Tag"));
const sequelize_1 = __importDefault(require("sequelize"));
class TagController extends BaseController_1.default {
    constructor() {
        super();
        this.getTags = (page) => __awaiter(this, void 0, void 0, function* () {
            try {
                let tags = yield Tag_1.default.findAll({ offset: (10 * page), limit: 10 });
                return tags;
            }
            catch (err) {
                throw err;
            }
        });
        this.getTagsByNames = (names) => __awaiter(this, void 0, void 0, function* () {
            try {
                let tags = yield Tag_1.default.findAll({
                    where: { name: { [sequelize_1.default.Op.or]: names } }
                });
                return tags;
            }
            catch (err) {
                throw err;
            }
        });
        this.createTag = (name, description) => __awaiter(this, void 0, void 0, function* () {
            try {
                let tag = yield Tag_1.default.create({ name: name, description: description });
                return tag;
            }
            catch (err) {
                throw err;
            }
        });
        this.deleteTag = (tagId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield Tag_1.default.destroy({ where: { idtag: tagId } });
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.updateTag = (tagId, name, description) => __awaiter(this, void 0, void 0, function* () {
            try {
                let tag = yield Tag_1.default.update({
                    name: name,
                    description: description
                }, { where: { idtag: tagId } });
                return tag;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = TagController;
