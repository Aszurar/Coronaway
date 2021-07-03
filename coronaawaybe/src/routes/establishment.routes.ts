import { Router } from 'express';
import { getRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import Establishment from '../models/Establishments';
import CreateEstablishmentService from '../services/CreateEstablishmentService';

interface filteredStablishmentsInterface {
    name: string;
    latitude: string;
    longitude: string;
}

const establishmentRouter = Router();

establishmentRouter.get('/', ensureAuthenticated, async (req, res) => {
    console.log(req.user);

    const establishmentRepository = getRepository(Establishment);

    const establishments = await establishmentRepository.find();

    const filteredStablishments: filteredStablishmentsInterface[] = []

    establishments.forEach((establishment) => {
        let { latitude, longitude, name } = establishment
        filteredStablishments.push({ name, latitude, longitude })
    })

    return res.json(filteredStablishments);
})

establishmentRouter.post('/', async (req, res) => {
    const {
        name,
        cnpj,
        email,
        password,
        capacity,
        current_stocking,
        latitude,
        longitude
    } = req.body;

    const createEstablishment = new CreateEstablishmentService();
    const establishment = await createEstablishment.execute({
        name,
        cnpj,
        email,
        password,
        capacity,
        current_stocking,
        latitude,
        longitude
    })

    const establishmentWithoutPassword = {
        id: establishment.id,
        name: establishment.name,
        cnpj: establishment.cnpj,
        email: establishment.email,
        latitude: establishment.latitude,
        longitude: establishment.latitude,
        capacity: establishment.capacity,
        current_stocking: establishment.current_stocking,
        created_at: establishment.created_at,
        updated_at: establishment.updated_at,
    }

    return res.json(establishmentWithoutPassword);
})

export default establishmentRouter;
