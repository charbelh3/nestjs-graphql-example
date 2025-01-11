import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type GameDocument = GameEntity & Document;

@Schema()
export class GameEntity {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  genre: string;
}

export const GameSchema = SchemaFactory.createForClass(GameEntity);
