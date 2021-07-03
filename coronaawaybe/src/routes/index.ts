import { Router } from 'express';
import establishmentRouter from './establishment.routes';
import userSessionsRouter from './userSessions.routes';
import usersRouter from './users.routes';
import establishmentSessionsRouter from './establishmentSesssions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/establishments', establishmentRouter);
routes.use('/userSessions', userSessionsRouter);
routes.use("/establishmentsSessions", establishmentSessionsRouter);


export default routes;


