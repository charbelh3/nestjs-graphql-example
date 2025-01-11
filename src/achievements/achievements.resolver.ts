import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AchievementsService } from './achievements.service';
import { Achievement } from './types/achievement.type';
import { CreateAchievementInput } from './inputs/create-achievement.input';

@Resolver(() => Achievement)
export class AchievementsResolver {
  constructor(private readonly achievementsService: AchievementsService) {}

  @Mutation(() => Achievement)
  createAchievement(@Args('input') input: CreateAchievementInput) {
    return this.achievementsService.createAchievement(input);
  }
}
