"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const upload_1 = __importDefault(require("./config/upload"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = express_1.default();
app.use(express_1.default.static('public'));
app.use('/files', express_1.default.static(upload_1.default.directory));
app.use(cors_1.default({
    origin: 'http://localhost:3000'
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(routes_1.default);
app.listen(process.env.PORT || 3333, () => {
    console.log('Server started at port: 3333');
});
