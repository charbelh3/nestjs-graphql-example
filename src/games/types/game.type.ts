import { Field, ObjectType } from '@nestjs/graphql';
import { Achievement } from 'src/achievements/types/achievement.type';

@ObjectType()
export class Game {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ description: 'The genre for the game' })
  genre: string;

  @Field(() => [Achievement])
  achievements: Achievement[];
}
