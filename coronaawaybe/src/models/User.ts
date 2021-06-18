import {v4 as uuid} from 'uuid';

class User {
    id: string;

    name: string;

    email: string;

    cpf: string;

    password: string;

    constructor
    (
        {
            cpf,
            name, 
            email, 
            password
        } : Omit<User, 'id'>
        ) {

        this.id = uuid();
        this.cpf = cpf;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

export default User;