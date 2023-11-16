import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BarberDocument = HydratedDocument<Barber>;

@Schema({
  collection: 'Barbers',
})
export class Barber {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const BarberShema = SchemaFactory.createForClass(Barber);
