import { Router } from "express";
import AuthenticateEstablishmentService from "../services/AuthenticateEstablishmentService";

const establishmentSessionsRouter = Router();

establishmentSessionsRouter.post('/', async (req, res) => {
    const { cnpj, password } = req.body;

    const authenticateEstablishment = new AuthenticateEstablishmentService();
    const { establishment, token } = await authenticateEstablishment.execute({
        cnpj,
        password
    })


    const establishmentWithoutPassword = {
        id: establishment.id,
        cnpj: establishment.cnpj,
        name: establishment.name,
        email: establishment.email,
        capacity: establishment.capacity,
        latitude: establishment.latitude,
        longitude: establishment.longitude,
        current_stocking: establishment.current_stocking,
        created_at: establishment.created_at,
        updated_at: establishment.updated_at,
    }

    return res.json({ establishmentWithoutPassword, token })
})

export default establishmentSessionsRouter;
