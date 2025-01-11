import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GameDocument, GameEntity } from './schemas/game.schema';
import { Model } from 'mongoose';
import { CreateGameInput } from './input/create-game.input';

@Injectable()
export class GamesService {
  constructor(
    @InjectModel(GameEntity.name)
    private gameModel: Model<GameDocument>,
  ) {}

  async getGames(offset: number, limit: number) {
    return this.gameModel.find().skip(offset).limit(limit);
  }

  async getGameById(id: string) {
    return this.gameModel.findById(id);
  }

  async createGame(game: CreateGameInput) {
    return this.gameModel.create(game);
  }
}
