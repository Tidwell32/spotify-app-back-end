import { Module } from '@nestjs/common';
import { RecommendationService } from './recommendation.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Recommendation,
  RecommendationSchema,
} from './schemas/recommendation.schema';
import { RecommendationResolver } from './recommendation.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Recommendation.name,
        schema: RecommendationSchema,
        collection: 'recommendations',
      },
    ]),
  ],
  providers: [RecommendationService, RecommendationResolver],
})
export class RecommendationModule {}
