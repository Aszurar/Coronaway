import { hash } from "bcryptjs"; 
import User from "../models/User";
import { getRepository } from "typeorm";
interface Request {
    cpf: string;
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({
        cpf, 
        name, 
        email, 
        password
    }: Request): Promise<User>{

        const usersRepository = getRepository(User);
        const checkUserExistsByEmail = await usersRepository.findOne({
            where: { email },    
        });
        const checkUserExistsByCpf = await usersRepository.findOne({
            where: { cpf }
        });

        if (checkUserExistsByEmail || checkUserExistsByCpf) {
            throw new Error("Email/address already used.");
            
        }

        const hashedPassword = await hash(password, 8);

        const user = usersRepository.create({
            cpf,
            name,
            email,
            password: hashedPassword,
        });

        await usersRepository.save(user);
        return user;
    }
}

export default CreateUserService;