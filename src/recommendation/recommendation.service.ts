import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Recommendation } from './recommendation.interface';
import { CreateRecommendationDTO } from './dto/recommendation.dto';

@Injectable()
export class RecommendationService {
  constructor(
    @InjectModel('Recommendation')
    private readonly recommendationModel: Model<Recommendation>,
  ) {}

  async addRecommendation(
    createRecommendationDTO: CreateRecommendationDTO,
  ): Promise<Recommendation> {
    const newRecommendation = await new this.recommendationModel(
      createRecommendationDTO,
    );
    return newRecommendation.save();
  }

  async getRecommendations(_id): Promise<Recommendation[]> {
    const recommendations = await this.recommendationModel
      .find({ userId: _id })
      .populate('recommendedBy')
      .exec();
    return recommendations;
  }

  async deleteRecommendation(recommendationID): Promise<any> {
    const deletedRecommendation =
      await this.recommendationModel.findByIdAndRemove(recommendationID);
    return deletedRecommendation;
  }
}
