"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    async index(request, response) {
        return response.json('teste');
    }
}
exports.default = UserController;
