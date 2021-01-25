import { Request, Response } from 'express';
import SimulacaoService from '../services/CreateSimulacao';
import { getRepository } from 'typeorm';

import Simulacao from '../models/Simulacao';
import User from '../models/UserModel';
import simulacaoRoutes from 'routes/simulacao.routes';

interface SimulacaoProps {
   valor_inicial: number;
	valor_mensal: number;
	meses_investimento: number;
	total_investido: number;
	total_rendimento_cdb: number;
	taxa_percentual_CDI: number;
	taxa_DI: number;
	total_rendimento_poupanca: number;
	taxa_poupanca: number;
	taxa_selid: number;
	user_id: number;
}

export default class SimulacaoController {
   public async index(request: Request, response: Response): Promise<Response> {
      const simulacaoRepository = getRepository(Simulacao);

      const simulacao = await simulacaoRepository.find();

      return response.status(200).json(simulacao);
   }

   public async getSimulacaoByUserId(request: Request, response: Response): Promise<Response> {
      const { user_id } = request.params;

      const simulacaoRepository = getRepository(Simulacao);

      const simulacao = await simulacaoRepository.find({where: {user_id}})

      return response.json(simulacao);
   }

   public async create(request: Request, response: Response): Promise<Response> {
      try {
         const {  
            valor_inicial,
            valor_mensal,
            meses_investimento,
            total_investido,
            total_rendimento_cdb,
            taxa_percentual_CDI,
            taxa_DI,
            total_rendimento_poupanca,
            taxa_poupanca,
            taxa_selid,
            user_id
         } = request.body;

         console.log(valor_inicial,
            valor_mensal,
            meses_investimento,
            total_investido,
            total_rendimento_cdb,
            taxa_percentual_CDI,
            taxa_DI,
            total_rendimento_poupanca,
            taxa_poupanca,
            taxa_selid,
            user_id)
   
         const simuladorService = new SimulacaoService();
         const simulador = await simuladorService.execute({
            valor_inicial,
            valor_mensal,
            meses_investimento,
            total_investido,
            total_rendimento_cdb,
            taxa_percentual_CDI,
            taxa_DI,
            total_rendimento_poupanca,
            taxa_poupanca,
            taxa_selid,
            user_id
         });

         const userRepository = getRepository(User);
         const user = await userRepository.findOne({where: {id: user_id} });

         if(user) {
            user.qtd_simulacoes++;
            await userRepository.save(user);
         }

         return response.json({ simulador, status: 'ok', statusCode: 200, user })
      } catch (error) {
         return response.status(400).json({ error: error.message, status: false, statusCode: 400 })
      }
   }

   public async remove(request: Request, response: Response): Promise<Response> {
      try {
         const { id, user_id } = request.params;
   
         const simulacaoRepository = getRepository(Simulacao);
         const find = await simulacaoRepository.findOne({where: {id, user_id}});
   
         if(!find) {
            throw new Error('Simulacao não encontrada!');
         }
   
         await simulacaoRepository.delete(id);
   
         return response.status(200).json({message: 'ok', statusCode: '200'});
      } catch (error) {
         return response.status(400).json({statusCode: '400', message: error.message});
      }
   }
}