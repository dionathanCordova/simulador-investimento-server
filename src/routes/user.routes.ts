import { Router } from 'express';

import UserController from '../Controller/UserController';
const userController = new UserController();

const userRoutes = Router();

userRoutes.get('/', userController.index);
userRoutes.post('/create', userController.create);
userRoutes.post('/find-by-id', userController.findById);

export default userRoutes;