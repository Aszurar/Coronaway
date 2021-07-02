import { compare } from 'bcryptjs';
import { getRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import auth from '../config/auth';
import User from '../models/Users';
import AppError from '../errors/AppError';

interface Request {
    cpf: string;
    password: string;
}

interface Response {
    user: User;
    token: string;
}

class AuthenticateUserService {
    public async execute({ cpf, password}: Request): Promise<Response> {
        const usersRepository = getRepository(User);
        const user = await usersRepository.findOne({
            where: { cpf },
        });
        if (!user) {
            throw new AppError("Incorrect cpf/password combination", 401);
        }

        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw new AppError("Incorrect cpf/password combination", 401);
        }
        const { expiresIn, secret } = auth.jwt;
        const token = sign(
            {},
            secret,
            {
                subject: user.id,
                expiresIn: expiresIn,
            }
        )

        return {
            user,
            token,
        }
    }
}

export default AuthenticateUserService;
