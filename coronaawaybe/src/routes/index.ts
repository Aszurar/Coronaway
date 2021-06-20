import { Router } from 'express';
import establishmentRouter from './establishment.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/establishments', establishmentRouter);

export default routes;


