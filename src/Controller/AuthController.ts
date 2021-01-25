import { Request, Response } from 'express';
import Simulacao from '../models/Simulacao';
import { getRepository } from 'typeorm';
import AuthService from '../services/AuthenticateService';

export default class AuthenticateController{
   public async create(request: Request, response: Response): Promise<Response> {
      try {
         const { email, name } = request.body;

         const authService = new AuthService();
         const { userData, token } = await authService.execute({email, name});

         const user = {
            id: userData.id,
            name: userData.name,
            email: userData.email,
            telefone: userData.whatsapp,
            qtd_simulacoes: userData.qtd_simulacoes
         };

         return response.status(200).json({user, token, status: 'ok', statusCode: 200});
      } catch (error) {
         return response.status(400).json({error: error.message, status: false, statusCode: 400, countsimulations: 0});
      }
   }
}