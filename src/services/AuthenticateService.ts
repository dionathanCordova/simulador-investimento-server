import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import User from '../models/UserModel';

interface AuthData {
   email: string;
   name: string;
}

interface IResponse {
   userData: {
      id: string,
      name: string,
      whatsapp: string,
      email: string,
      qtd_simulacoes: number;
   },
   token: string,
}

export default class AuthService{
   public async execute({email, name}: AuthData): Promise<IResponse> {
      const userRepository = getRepository(User);

      const userData = await userRepository.findOne({where: {email}});

      if(!userData) {
         throw new Error('Credentials dont match');
      }

      const token = sign({}, '8889d00d4773aa1c485a26901b89d833', {
         subject: userData.email,
         expiresIn: '1d'
      })

      return {userData, token};
   }
}