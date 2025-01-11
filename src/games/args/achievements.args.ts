import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Difficulty } from 'src/achievements/types/achievement.type';
import { PaginationArgs } from 'src/common/args/pagination.args';

@ArgsType()
export class AchievementsArgs extends PaginationArgs {
  @Field(() => Difficulty, { nullable: true })
  difficulty: Difficulty;
}
