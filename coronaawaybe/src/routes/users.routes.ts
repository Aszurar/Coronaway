import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
        const { name, cpf, password, email } = req.body;

        const createUser = new CreateUserService();
        const user = await createUser.execute({
            cpf,
            name,
            email,
            password,
        });

        const userWithoutPassword = {
            id: user.id,
            cpf: user.cpf,
            name: user.name,
            email: user.email,
            created_at: user.created_at,
            updated_at: user.updated_at,
        }

        return res.json(userWithoutPassword);
});

export default usersRouter;
