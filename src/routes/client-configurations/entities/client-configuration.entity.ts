import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientConfigurationDocument = HydratedDocument<ClientConfiguration>;

@Schema({
  collection: 'ClientConfigurations',
})
export class ClientConfiguration {
  @Prop()
  photo: string;
}

export const ClientConfigurationShema =
  SchemaFactory.createForClass(ClientConfiguration);
