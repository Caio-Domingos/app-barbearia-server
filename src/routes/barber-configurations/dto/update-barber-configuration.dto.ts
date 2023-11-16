import { PartialType } from '@nestjs/mapped-types';
import { CreateBarberConfigurationDto } from './create-barber-configuration.dto';

export class UpdateBarberConfigurationDto extends PartialType(CreateBarberConfigurationDto) {}
