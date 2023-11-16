import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DefaultService } from 'src/core/defaults/default.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule } from './entities/schedule.entity';

@Injectable()
export class SchedulesService extends DefaultService<
  Schedule,
  CreateScheduleDto,
  UpdateScheduleDto
> {
  constructor(@InjectModel(Schedule.name) private scheduleModel: Model<Schedule>) {
    super(scheduleModel);
  }
}
