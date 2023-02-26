import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Clientes } from './cliente.entity';

@Controller('clientes')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) { }

    @Get()
    findAll(): Promise<Clientes[]> {
        return this.clienteService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Clientes> {
        return this.clienteService.findOne(+id);
    }

    @Post()
    create(@Body() cliente: Clientes): Promise<Clientes> {
        return this.clienteService.create(cliente);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() cliente: Clientes): Promise<Clientes> {
        return this.clienteService.update(+id, cliente);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.clienteService.remove(+id);
    }
}
