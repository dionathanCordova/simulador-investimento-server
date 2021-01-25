import { Router } from 'express';

const simulacaoRoutes = Router();

import SimulacaoController from '../Controller/SimulacaoController';
const simulacaoController = new SimulacaoController();

simulacaoRoutes.get('/', simulacaoController.index);
simulacaoRoutes.post('/create', simulacaoController.create);
simulacaoRoutes.get('/find/:user_id', simulacaoController.getSimulacaoByUserId);
simulacaoRoutes.delete('/remove/:id/:user_id', simulacaoController.remove);

export default simulacaoRoutes;