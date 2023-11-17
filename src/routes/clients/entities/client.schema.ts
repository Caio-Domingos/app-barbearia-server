import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema({
  collection: 'Clients',
})
export class Client {
  @Prop({ required: true })
  name: string;

  @Prop({ unique: true, required: true, lowercase: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const ClientShema = SchemaFactory.createForClass(Client);
