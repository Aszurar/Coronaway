import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('establishments')
class Establishment {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    cnpj: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    latitude: string;

    @Column()
    longitude: string;

    @Column()
    capacity: number;

    @Column()
    current_stocking: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Establishment;
