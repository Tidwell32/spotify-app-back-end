import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/schemas/user.schema';
// import * as mongoose from 'mongoose';

export type RecommendationDocument = Recommendation & mongoose.Document;

@Schema()
export class Recommendation {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  userId: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  recommendedBy: User;

  @Prop()
  id: string;

  @Prop()
  popularity: number;

  @Prop()
  url: string;

  @Prop()
  name: string;

  @Prop()
  artist: string;

  @Prop()
  image: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const RecommendationSchema =
  SchemaFactory.createForClass(Recommendation);

// export const RecommendationSchema = new mongoose.Schema({
//   userId: String,
//   recommendedBy: String,
//   ranking: Number,
//   id: String,
//   popularity: Number,
//   url: String,
//   name: String,
//   artist: String,
//   image: String,
// });
