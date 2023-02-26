import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Clientes {
    @PrimaryGeneratedColumn()
    codcli: number;

    @Column({ length: 50 })
    nombre: string;

    @Column({ length: 50 })
    direccion: string;

    @Column({ length: 5, nullable: true })
    codpostal?: string;

    @Column({ length: 5 })
    codpue: string;
}
