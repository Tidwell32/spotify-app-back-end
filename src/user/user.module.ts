import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import {
  Recommendation,
  RecommendationSchema,
} from 'src/recommendation/schemas/recommendation.schema';
import { RecommendationModule } from 'src/recommendation/recommendation.module';

@Module({
  imports: [
    RecommendationModule,
    MongooseModule.forFeature([
      {
        name: Recommendation.name,
        schema: RecommendationSchema,
        collection: 'recommendations',
      },
    ]),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema, collection: 'users' },
    ]),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
