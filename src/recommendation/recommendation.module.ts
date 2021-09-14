import { Module } from '@nestjs/common';
import { RecommendationService } from './recommendation.service';
import { RecommendationController } from './recommendation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Recommendation,
  RecommendationSchema,
} from './schemas/recommendation.schema';

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
  providers: [RecommendationService],
  controllers: [RecommendationController],
})
export class RecommendationModule {}
