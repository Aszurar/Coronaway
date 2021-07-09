import { Router } from 'express';
import { getRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import Establishment from '../models/Establishments';
import CreateEstablishmentService from '../services/CreateEstablishmentService';
import UpdateEstablishmentService from '../services/UpdateEstablishmentService';
import UpdateSubEstablishmentService from '../services/UpdateSubEstablishmentService';

interface filteredStablishmentsInterface {
    id: string;
    name: string;
    latitude: string;
    longitude: string;
    capacity: number;
    current_stocking: number;
}

const establishmentRouter = Router();

establishmentRouter.get('/', ensureAuthenticated, async (req, res) => {
    console.log(req.user);

    const establishmentRepository = getRepository(Establishment);
    const establishments = await establishmentRepository.find();
    const filteredStablishments: filteredStablishmentsInterface[] = []

    establishments.forEach((establishment) => {
        let { id, latitude, longitude, name, capacity, current_stocking } = establishment
        filteredStablishments.push({ id, name, latitude, longitude, capacity, current_stocking });
    })

    return res.json(filteredStablishments);
})

establishmentRouter.patch('/add/:id', ensureAuthenticated, async (req, res) => {
    const { id } = req.params;

    const updateAddEstablishment = new UpdateEstablishmentService();
    const establishment = await updateAddEstablishment.execute({
        id,
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

establishmentRouter.patch('/sub/:id', ensureAuthenticated, async (req, res) => {
    const { id } = req.params;

    const updateSubEstablishment = new UpdateSubEstablishmentService();
    const establishment = await updateSubEstablishment.execute({
        id,
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
