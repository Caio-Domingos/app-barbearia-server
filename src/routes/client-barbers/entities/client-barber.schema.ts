import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Barber } from 'src/routes/barbers/entities/barber.schema';
import { Client } from 'src/routes/clients/entities/client.schema';


export type ClientBarberDocument = HydratedDocument<ClientBarber>;

@Schema({
  collection: 'ClientBarbers',
})
export class ClientBarber {
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Client'})
  client: Client;
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Barber'})
  barber: Barber;
}

export const ClientBarberShema = SchemaFactory.createForClass(ClientBarber);
