import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DefaultService } from 'src/core/defaults/default.service';
import { CreateBarberConfigurationDto } from './dto/create-barber-configuration.dto';
import { UpdateBarberConfigurationDto } from './dto/update-barber-configuration.dto';
import { BarberConfiguration } from './entities/barber-configuration.entity';

@Injectable()
export class BarberConfigurationsService extends DefaultService<
  BarberConfiguration,
  CreateBarberConfigurationDto,
  UpdateBarberConfigurationDto
> {
  constructor(
    @InjectModel(BarberConfiguration.name)
    private barberConfigurationModel: Model<BarberConfiguration>,
  ) {
    super(barberConfigurationModel);
  }
}
