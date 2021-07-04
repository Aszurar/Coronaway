import { compare } from 'bcryptjs';
import { getRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import auth from '../config/auth';
import AppError from '../errors/AppError';
import Establishment from '../models/Establishments';

interface Request {
    cnpj: string;
    password: string;
}

interface Response {
    establishment: Establishment;
    token: string;
}

class AuthenticateEstablishmentService {
    public async execute({ cnpj, password }: Request): Promise<Response> {
        const establishmentsRepository = getRepository(Establishment);
        const establishment = await establishmentsRepository.findOne({
            where: { cnpj },
        });
        if (!establishment) {
            throw new AppError("Incorrect cnpj/password combination", 401);
        }

        const passwordMatched = await compare(password, establishment.password);

        if (!passwordMatched) {
            throw new AppError("Incorrect cnpj/password combination", 401);
        }
        const { expiresIn, secret } = auth.jwt;
        const token = sign(
            {},
            secret,
            {
                subject: establishment.id,
                expiresIn: expiresIn,
            }
        )

        return {
            establishment,
            token,
        }
    }
}

export default AuthenticateEstablishmentService;
