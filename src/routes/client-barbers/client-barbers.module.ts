import { Module } from '@nestjs/common';
import { ClientBarbersService } from './client-barbers.service';
import { ClientBarbersController } from './client-barbers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ClientBarber,
  ClientBarberShema,
} from './entities/client-barber.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ClientBarber.name, schema: ClientBarberShema },
    ]),
  ],
  controllers: [ClientBarbersController],
  providers: [ClientBarbersService],
})
export class ClientBarbersModule {}
