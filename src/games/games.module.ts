import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesResolver } from './games.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { GameEntity, GameSchema } from './schemas/game.schema';
import { AchievementsModule } from 'src/achievements/achievements.module';

@Module({
  imports: [
    AchievementsModule,
    MongooseModule.forFeature([
      { name: GameEntity.name, schema: GameSchema, collection: 'games' },
    ]),
  ],
  providers: [GamesResolver, GamesService],
})
export class GamesModule {}
