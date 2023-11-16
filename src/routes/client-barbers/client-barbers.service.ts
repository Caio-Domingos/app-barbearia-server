import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DefaultService } from 'src/core/defaults/default.service';
import { CreateClientBarberDto } from './dto/create-client-barber.dto';
import { UpdateClientBarberDto } from './dto/update-client-barber.dto';
import { ClientBarber } from './entities/client-barber.schema';

@Injectable()
export class ClientBarbersService extends DefaultService<
  ClientBarber,
  CreateClientBarberDto,
  UpdateClientBarberDto
> {
  constructor(
    @InjectModel(ClientBarber.name)
    private clientBarberModel: Model<ClientBarber>,
  ) {
    super(clientBarberModel);
  }
}
