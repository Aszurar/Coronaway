import { hash } from 'bcryptjs';
import { getRepository } from 'typeorm';
import Establishment from '../models/Establishments';

interface Request {
    name: string;
    cnpj: string;
    email: string;
    password: string;
    latitude: string;
    longitude: string;
}


class CreateEstablishmentService{
    public async execute({
        name,
        cnpj,
        email,
        password,
        latitude,
        longitude
    }: Request
    ): Promise<Establishment>{

        const establishmentRepository = getRepository(Establishment);
        const checkEstablishmentExistsByCnpj =
        await establishmentRepository.findOne({
            where: { cnpj },
        });
        const checkEstablishmentExistsByEmail =
        await establishmentRepository.findOne({
            where: { email },
        });
        const checkEstablishmentExistsByLatitude =
        await establishmentRepository.findOne({
            where: { latitude },
        });
        const checkEstablishmentExistsByLongitude =
        await establishmentRepository.findOne({
            where: { longitude },
        });

        const checkEstablishmentExists =
        checkEstablishmentExistsByCnpj || checkEstablishmentExistsByEmail ||
        (checkEstablishmentExistsByLatitude && checkEstablishmentExistsByLongitude)

        if (checkEstablishmentExists) {
            throw new Error('establishment already exist')
        }

        const hashedPassword = await hash(password, 8);

        const establishment = establishmentRepository.create({
            name,
            cnpj,
            email,
            password: hashedPassword,
            latitude,
            longitude,
        })

        establishmentRepository.save(establishment);

        return establishment;
    }
}

export default CreateEstablishmentService;
