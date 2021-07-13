import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Establishment from '../models/Establishments';

interface Request {
    id: string;
    // current_stocking_update: number;
}

class UpdateSubEstablishmentService {
    public async execute({
        id,
        // current_stocking_update,
    }: Request
    ): Promise<Establishment> {

        const establishmentRepository = getRepository(Establishment);

        const establishment = await establishmentRepository.findOne({
            where: { id }
        })

        if (!establishment) {
            throw new AppError(`establishment doesn't exist`);
        }

        const stocking_update = establishment.current_stocking - 1

        const establishmentUpdated = {
            ...establishment,
            current_stocking: stocking_update,
        }

        try {
            await establishmentRepository.update(
                id,
                establishmentUpdated
            )

            return establishmentUpdated;
        } catch (error) {
            throw new AppError("Update Error: establishment doesn't already exist");
        }
    }
}

export default UpdateSubEstablishmentService;
