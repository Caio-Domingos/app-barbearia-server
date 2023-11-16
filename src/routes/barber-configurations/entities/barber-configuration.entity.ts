import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BarberConfigurationDocument = HydratedDocument<BarberConfiguration>;

interface HoursBarber {
  Segunda: any;
  Terca: any;
  Quarta: any;
  Quinta: any;
  Sexta: any;
  Sabado: any;
  Domingo: any;
}

interface TimeBreaksBarber {
  start: Date;
  end: Date;
}

interface Services {
  service: string;
  value: string;
}

@Schema({
  collection: 'BarberConfigurations',
})
export class BarberConfiguration {
  @Prop({ type: Object })
  hours: HoursBarber;
  @Prop({ type: [Object] })
  timeBreaks: TimeBreaksBarber[];
  @Prop({ type: [Object] })
  services: Services[];
}

export const BarberConfigurationShema =
  SchemaFactory.createForClass(BarberConfiguration);
