import { Router } from 'express';
import CreateEstablishmentService from '../services/CreateEstablishmentService';

const establishmentRouter = Router();

establishmentRouter.post('/', async (req, res) => {
    try {
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
    } catch (err) {
        return res.status(400).json({ error: err.message})
    }
})

export default establishmentRouter;
