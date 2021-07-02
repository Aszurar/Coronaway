import { Router } from 'express';
import { getRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import Establishment from '../models/Establishments';
import CreateEstablishmentService from '../services/CreateEstablishmentService';

const establishmentRouter = Router();

establishmentRouter.get('/', ensureAuthenticated, async (req, res) => {
    console.log(req.user);

    const establishmentRepository = getRepository(Establishment);

    const establishments = await establishmentRepository.find();

    return res.json(establishments);
})

establishmentRouter.post('/', async (req, res) => {
        const {
            name,
            cnpj,
            email,
            password,
            latitude,
            longitude
        } = req.body;

        const createEstablishment = new CreateEstablishmentService();
        const establishment = await createEstablishment.execute({
            name,
            cnpj,
            email,
            password,
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
            created_at: establishment.created_at,
            updated_at: establishment.updated_at,
        }

        return res.json(establishmentWithoutPassword);
})

export default establishmentRouter;
