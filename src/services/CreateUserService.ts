// import { sign } from 'jsonwebtoken';
import { hash } from 'bcryptjs';
import { getRepository } from 'typeorm';
import User from '../models/UserModel';

interface ICreateData {
   email: string;
   telefone: string;
   name: string;
}

export default class CreateUserService {
   public async execute({ email, name, telefone }: ICreateData): Promise<any> {
      const userRepository = getRepository(User);

      if (!email || !name  ) {
         throw new Error("All fiels are required");
      }

      const checkUserExists = await userRepository.findOne({
         where: { email }
      });

      if (checkUserExists) {
         return { user: checkUserExists, status: 'ok', statusCode: "201" }
      }

      const user = userRepository.create({
         email,
         name,
         whatsapp: telefone
      })

      await userRepository.save(user);

      if (user) {
         return { user, status: 'ok', statusCode: "201" }
      } else {
         return { status: 'error', statusCode: "400" }
      }
   }
}