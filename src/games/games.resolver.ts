import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { GamesService } from './games.service';
import { Game } from './types/game.type';
import {
  Achievement,
  Difficulty,
} from 'src/achievements/types/achievement.type';
import { AchievementsService } from 'src/achievements/achievements.service';
import { AchievementsArgs } from './args/achievements.args';
import { CreateGameInput } from './input/create-game.input';

@Resolver(() => Game)
export class GamesResolver {
  constructor(
    private readonly gamesService: GamesService,
    private readonly achievementsService: AchievementsService,
  ) {}

  @Query(() => [Game], { name: 'games' })
  async getGames(
    @Args('offset', { type: () => Int }) offset: number,
    @Args('limit', { type: () => Int }) limit: number,
  ) {
    return this.gamesService.getGames(offset, limit);
  }

  @Query(() => Game, { name: 'game' })
  async getGameById(@Args('id') id: string) {
    return this.gamesService.getGameById(id);
  }

  @Mutation(() => Game, { name: 'createGame' })
  createGame(@Args('input') input: CreateGameInput) {
    return this.gamesService.createGame(input);
  }

  @ResolveField(() => [Achievement])
  achievements(@Parent() game: Game, @Args() args: AchievementsArgs) {
    return this.achievementsService.getAchievementsByGameId(game.id, args);
  }
}
