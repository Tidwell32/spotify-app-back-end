import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/schemas/user.schema';
import * as mongoose from 'mongoose';

export type RecommendationDocument = Recommendation & mongoose.Document;

@ObjectType()
@Schema()
export class Recommendation {
  @Field(() => String)
  _id: mongoose.Schema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  userId: mongoose.Schema.Types.ObjectId;

  @Field(() => User)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  recommendedBy: User;

  @Field(() => String)
  @Prop()
  id: string;

  @Field(() => Number)
  @Prop()
  popularity: number;

  @Field(() => String)
  @Prop()
  url: string;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String)
  @Prop()
  artist: string;

  @Field(() => String)
  @Prop()
  image: string;

  @Field(() => Date)
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const RecommendationSchema =
  SchemaFactory.createForClass(Recommendation);
