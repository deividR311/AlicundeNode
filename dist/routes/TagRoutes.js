"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticator_1 = __importDefault(require("../middlewares/authenticator"));
const modelValidator_1 = __importDefault(require("../middlewares/modelValidator"));
const TagService_1 = __importDefault(require("../services/TagService"));
const tagRoutes = express_1.Router();
const validator = new modelValidator_1.default();
const tagService = new TagService_1.default();
tagRoutes.put('/create', [authenticator_1.default, validator.tag], tagService.createTag);
tagRoutes.put('/update', authenticator_1.default, tagService.updateTag);
tagRoutes.delete('/delete/:idcaution', authenticator_1.default, tagService.deleteTag);
tagRoutes.get('/list', authenticator_1.default, tagService.listTag);
tagRoutes.post('/listbynames', authenticator_1.default, tagService.listTagsByNames);
exports.default = tagRoutes;
