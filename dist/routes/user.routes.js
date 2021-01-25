"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../Controller/UserController"));
const userController = new UserController_1.default();
const userRoutes = express_1.Router();
userRoutes.get('/', userController.index);
exports.default = userRoutes;
