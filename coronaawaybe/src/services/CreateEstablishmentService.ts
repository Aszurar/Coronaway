import { hash } from 'bcryptjs';
import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Establishment from '../models/Establishments';

interface Request {
    name: string;
    cnpj: string;
    email: string;
    password: string;
    capacity: number;
    current_stocking: number;
    latitude: string;
    longitude: string;
}

class CreateEstablishmentService{
    public async execute({
        name,
        cnpj,
        email,
        password,
        capacity,
        current_stocking,
        latitude,
        longitude
    }: Request
    ): Promise<Establishment>{

        const establishmentRepository = getRepository(Establishment);

        const checkEstablishmentExistsByLatitude =
        await establishmentRepository.findOne({
            where: { latitude },
        });

        const checkEstablishmentExistsByLongitude =
        await establishmentRepository.findOne({
            where: { longitude },
        });

        const checkEstablishmentExists = (checkEstablishmentExistsByLatitude && checkEstablishmentExistsByLongitude)

        if (checkEstablishmentExists) {
            throw new AppError('establishment already exist');
        }

        const hashedPassword = await hash(password, 8);

        try {
            const establishment = establishmentRepository.create({
                name,
                cnpj,
                email,
                password: hashedPassword,
                capacity,
                current_stocking,
                latitude,
                longitude,
            })

            await establishmentRepository.save(establishment);

            return establishment;
        } catch (error) {
            throw new AppError("establishment already exist");
        }
    }
}

export default CreateEstablishmentService;
