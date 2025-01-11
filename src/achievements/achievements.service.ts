import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  AchievementDocument,
  AchievementEntity,
} from './schemas/achieviement.schema';
import mongoose, { Model } from 'mongoose';
import { AchievementsArgs } from 'src/games/args/achievements.args';
import { CreateAchievementInput } from './inputs/create-achievement.input';
import { GameDocument, GameEntity } from 'src/games/schemas/game.schema';

@Injectable()
export class AchievementsService {
  constructor(
    @InjectModel(AchievementEntity.name)
    private achievementModel: Model<AchievementDocument>,
    @InjectModel(GameEntity.name)
    private gameModel: Model<GameDocument>,
  ) {}

  async getAchievementsByGameId(gameId: string, args: AchievementsArgs) {
    const match = { gameId: new mongoose.Types.ObjectId(gameId) };

    if (args.difficulty) {
      match['difficulty'] = args.difficulty;
    }

    return this.achievementModel
      .find(match)
      .skip(args.offset)
      .limit(args.limit);
  }

  async createAchievement(input: CreateAchievementInput) {
    const { gameId, ...achievementData } = input;

    const gameExists = await this.gameModel.findById(gameId);
    if (!gameExists) {
      throw new Error('Game not found');
    }

    const newAchievement = new this.achievementModel({
      ...achievementData,
      gameId: new mongoose.Types.ObjectId(gameId),
    });
    return newAchievement.save();
  }
}
