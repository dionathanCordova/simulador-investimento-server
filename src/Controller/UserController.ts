import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/UserModel';

import CreateUserService from '../services/CreateUserService';

export default class UserController {
   public async index(request: Request, response: Response): Promise<Response> {

      const userRepository = getRepository(User);

      const users = await userRepository.find();

      return response.json({ users });
   }

   public async create(request: Request, response: Response): Promise<Response> {
      try {
         const { email, telefone, name } = request.body;

         const createUserservice = new CreateUserService();
         const user = await createUserservice.execute({ email, telefone, name});

         return response.json({ user, status: 'ok', statusCode: 200 })
      } catch (error) {
         return response.status(400).json({ error: error.message, status: false, statusCode: 400 })
      }
   }

   public async findById(request: Request, response: Response): Promise<Response> {
      const { id } = request.body;

      const userRepository = getRepository(User);
      const user = await userRepository.findOne({ id });

      if (user) {
         return response.json(user);
      }

      return response.status(404).json({ error: 'User not found' });
   }
}