import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Client } from './entities/client.schema';
import { Model } from 'mongoose';
import { DefaultService } from 'src/core/defaults/default.service';

@Injectable()
export class ClientsService extends DefaultService<
  Client,
  CreateClientDto,
  UpdateClientDto
> {
  constructor(@InjectModel(Client.name) private clientModel: Model<Client>) {
    super(clientModel);
  }
}
