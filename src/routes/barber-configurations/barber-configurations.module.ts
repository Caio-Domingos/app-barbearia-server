import { Module } from '@nestjs/common';
import { BarberConfigurationsService } from './barber-configurations.service';
import { BarberConfigurationsController } from './barber-configurations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  BarberConfiguration,
  BarberConfigurationShema,
} from './entities/barber-configuration.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BarberConfiguration.name, schema: BarberConfigurationShema },
    ]),
  ],
  controllers: [BarberConfigurationsController],
  providers: [BarberConfigurationsService],
})
export class BarberConfigurationsModule {}
