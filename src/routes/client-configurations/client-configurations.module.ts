import { Module } from '@nestjs/common';
import { ClientConfigurationsService } from './client-configurations.service';
import { ClientConfigurationsController } from './client-configurations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ClientConfiguration,
  ClientConfigurationShema,
} from './entities/client-configuration.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ClientConfiguration.name, schema: ClientConfigurationShema },
    ]),
  ],
  controllers: [ClientConfigurationsController],
  providers: [ClientConfigurationsService],
})
export class ClientConfigurationsModule {}
