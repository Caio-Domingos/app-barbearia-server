import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { BarbersService } from './barbers.service';
import { BarbersController } from './barbers.controller';
import { Barber, BarberShema } from './entities/barber.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Barber.name, schema: BarberShema }]),
  ],
  controllers: [BarbersController],
  providers: [BarbersService],
})
export class BarbersModule {}
