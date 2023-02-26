import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clientes } from './cliente.entity';

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(Clientes)
        private readonly clienteRepository: Repository<Clientes>,
    ) { }

    findAll(): Promise<Clientes[]> {
        return this.clienteRepository.find();
    }

    async findOne(id: number): Promise<Clientes> {
        return this.clienteRepository.findOne({
            where: { codcli: id },
        });
    }


    create(cliente: Clientes): Promise<Clientes> {
        return this.clienteRepository.save(cliente);
    }

    async update(id: number, cliente: Clientes): Promise<Clientes> {
        const clienteToUpdate = await this.clienteRepository.findOne({where:{ codcli: id }});
        clienteToUpdate.nombre = cliente.nombre;
        clienteToUpdate.direccion = cliente.direccion;
        clienteToUpdate.codpostal = cliente.codpostal;
        clienteToUpdate.codpue = cliente.codpue;
        return this.clienteRepository.save(clienteToUpdate);
    }

    remove(id: number): Promise<void> {
        return this.clienteRepository.delete(id).then(() => undefined);
    }
}
