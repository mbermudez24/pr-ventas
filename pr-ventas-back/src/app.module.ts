import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clientes } from './cliente.entity';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'manael123.',
      database: 'ventas',
      entities: [Clientes],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Clientes]),
  ],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class AppModule {}
