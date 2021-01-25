"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user.routes"));
const route = express_1.Router();
route.use('/users', user_routes_1.default);
exports.default = route;
// var express = require('express');
// var app = express();
// // respond with "hello world" when a GET request is made to the homepage
// app.get('/users', (request: Request, response: Response) => {
//    response.send('hello world');
// });
