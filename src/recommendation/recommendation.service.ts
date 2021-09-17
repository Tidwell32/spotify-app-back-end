import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRecommendationInput } from './recommendation.inputs';
import {
  RecommendationDocument,
  Recommendation,
} from './schemas/recommendation.schema';

@Injectable()
export class RecommendationService {
  constructor(
    @InjectModel(Recommendation.name)
    private readonly recommendationModel: Model<RecommendationDocument>,
  ) {}

  addRecommendation(
    createRecommendationInput: CreateRecommendationInput,
  ): Promise<Recommendation> {
    const newRecommendation = new this.recommendationModel(
      createRecommendationInput,
    );
    return newRecommendation.save();
  }

  getRecommendations(_id): Promise<Recommendation[]> {
    return this.recommendationModel
      .find({ userId: _id })
      .populate('recommendedBy')
      .exec();
  }

  deleteRecommendation(recommendationID): Promise<any> {
    return this.recommendationModel.findByIdAndRemove(recommendationID).exec();
  }
}
