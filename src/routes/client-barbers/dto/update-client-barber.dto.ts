import { PartialType } from '@nestjs/mapped-types';
import { CreateClientBarberDto } from './create-client-barber.dto';

export class UpdateClientBarberDto extends PartialType(CreateClientBarberDto) {}
