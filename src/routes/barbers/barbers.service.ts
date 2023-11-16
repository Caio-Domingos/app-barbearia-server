import { Injectable } from '@nestjs/common';
import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
import { DefaultService } from 'src/core/defaults/default.service';
import { Barber } from './entities/barber.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BarbersService extends DefaultService<
  Barber,
  CreateBarberDto,
  UpdateBarberDto
> {
  constructor(@InjectModel(Barber.name) private barberModel: Model<Barber>) {
    super(barberModel);
  }
}
