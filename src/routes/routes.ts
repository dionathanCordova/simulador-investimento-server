import { Router } from 'express';

import userRoutes from './user.routes';
import authRoutes from './authenticate.routes';
import simulacaoRoutes from './simulacao.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/auth', authRoutes);
routes.use('/simulacao', simulacaoRoutes)

export default routes;