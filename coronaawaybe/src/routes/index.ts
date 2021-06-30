import { Router } from 'express';
import establishmentRouter from './establishment.routes';
import sessionsRouter from './sessions.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/establishments', establishmentRouter);
routes.use('/sessions', sessionsRouter);


export default routes;


