import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ScheduleDocument = HydratedDocument<Schedule>;

@Schema({
  collection: 'Schedules',
})
export class Schedule {
  @Prop()
  date: Date;
}

export const ScheduleShema = SchemaFactory.createForClass(Schedule);
