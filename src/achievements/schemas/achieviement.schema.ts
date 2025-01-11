import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Difficulty } from '../types/achievement.type';

export type AchievementDocument = AchievementEntity & Document;

@Schema()
export class AchievementEntity {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({
    required: true,
    enum: Difficulty,
  })
  difficulty: Difficulty;

  @Prop({ required: true, type: Number })
  points: number;

  @Prop({ type: Types.ObjectId })
  gameId: Types.ObjectId;
}

export const AchievementSchema =
  SchemaFactory.createForClass(AchievementEntity);
