import Simulacao from '../models/Simulacao';
import { getRepository } from 'typeorm';
import User from '../models/UserModel';

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

export default class SimulacaoService{
   public async execute(data: SimulacaoProps): Promise<any> {
      const userRepository = getRepository(User);

      const findUser = await userRepository.findOne({where: {id: data.user_id}});

      if(!findUser) {
         throw new Error("User not found");
      }

      const simulacaoRepository = getRepository(Simulacao);

      const createSimulacao = simulacaoRepository.create({
         valor_inicial: data.valor_inicial,
         meses_investimento: data.meses_investimento,
         taxa_DI: data.taxa_DI,
         taxa_percentual_CDI: data.taxa_percentual_CDI,
         taxa_poupanca: data.taxa_poupanca,
         total_investido: data.total_investido,
         taxa_selid: data.taxa_selid,
         total_rendimento_cdb: data.total_rendimento_cdb,
         total_rendimento_poupanca: data.total_rendimento_poupanca,
         valor_mensal: data.valor_mensal,
         user_id: findUser?.id
      })

      console.log(data);

      await simulacaoRepository.save(createSimulacao);

      if (createSimulacao) {
         return { createSimulacao, status: 'ok', statusCode: "201" }
      } else {
         return { status: 'error', statusCode: "400" }
      }
   }
}