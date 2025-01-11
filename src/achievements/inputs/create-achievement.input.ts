import { Field, InputType, Int } from '@nestjs/graphql';
import { Difficulty } from '../types/achievement.type';

@InputType()
export class CreateAchievementInput {
  @Field()
  gameId: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => Difficulty)
  difficulty: Difficulty;

  @Field(() => Int)
  points: number;
}
