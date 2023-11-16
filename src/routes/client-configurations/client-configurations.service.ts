import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DefaultService } from 'src/core/defaults/default.service';
import { CreateClientConfigurationDto } from './dto/create-client-configuration.dto';
import { UpdateClientConfigurationDto } from './dto/update-client-configuration.dto';
import { ClientConfiguration } from './entities/client-configuration.entity';

@Injectable()
export class ClientConfigurationsService extends DefaultService<
  ClientConfiguration,
  CreateClientConfigurationDto,
  UpdateClientConfigurationDto
> {
  constructor(
    @InjectModel(ClientConfiguration.name)
    private clientConfigurationModel: Model<ClientConfiguration>,
  ) {
    super(clientConfigurationModel);
  }
}
