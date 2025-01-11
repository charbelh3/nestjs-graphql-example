import {
  Field,
  InputType,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';

export enum Difficulty {
  EASY = 'Easy',
  MEDIUM = 'Medium',
  HARD = 'Hard',
}

registerEnumType(Difficulty, {
  name: 'Difficulty',
  description: 'Difficulty levels for achievements',
});

@ObjectType()
export class Achievement {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field(() => Int)
  points: number;

  @Field(() => Difficulty)
  difficulty: Difficulty;
}
