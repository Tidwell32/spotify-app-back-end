import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRecommendationInput {
  @Field(() => String)
  userId: string;

  @Field(() => String)
  recommendedBy: string;

  @Field(() => String)
  id: string;

  @Field(() => Number)
  popularity: number;

  @Field(() => String)
  url: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  artist: string;

  @Field(() => String)
  image: string;
}
