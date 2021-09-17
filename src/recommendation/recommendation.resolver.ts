import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Recommendation } from './schemas/recommendation.schema';
import { RecommendationService } from './recommendation.service';
import { CreateRecommendationInput } from './recommendation.inputs';

@Resolver()
export class RecommendationResolver {
  constructor(private recommendationService: RecommendationService) {}

  //Mutations
  @Mutation(() => Recommendation)
  async createRecommendation(
    @Args('payload') payload: CreateRecommendationInput,
  ) {
    return this.recommendationService.addRecommendation(payload);
  }

  @Mutation(() => Recommendation)
  async deleteRecommendation(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.recommendationService.deleteRecommendation(_id);
  }

  //query
  @Query(() => [Recommendation])
  async recommendations(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.recommendationService.getRecommendations(_id);
  }
}
