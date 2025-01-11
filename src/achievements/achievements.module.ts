import { Module } from '@nestjs/common';
import { AchievementsService } from './achievements.service';
import { AchievementsResolver } from './achievements.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import {
  AchievementEntity,
  AchievementSchema,
} from './schemas/achieviement.schema';
import { GameEntity, GameSchema } from 'src/games/schemas/game.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AchievementEntity.name,
        schema: AchievementSchema,
        collection: 'achievements',
      },
      { name: GameEntity.name, schema: GameSchema, collection: 'games' },
    ]),
  ],
  providers: [AchievementsResolver, AchievementsService],
  exports: [AchievementsService],
})
export class AchievementsModule {}
