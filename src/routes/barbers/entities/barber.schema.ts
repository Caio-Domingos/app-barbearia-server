import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BarberDocument = HydratedDocument<Barber>;

@Schema({
  collection: 'Barbers',
})
export class Barber {
  @Prop({ required: true })
  name: string;

  @Prop({ unique: true, required: true, lowercase: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const BarberShema = SchemaFactory.createForClass(Barber);
