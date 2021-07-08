import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const userSessionsRouter = Router();

userSessionsRouter.post('/', async (req, res) => {
    const { cpf, password } = req.body;
    const authenticateUser = new AuthenticateUserService();
    const { user, token } = await authenticateUser.execute({
        cpf,
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

    return res.json({ userWithoutPassword, token });
})

export default userSessionsRouter;
