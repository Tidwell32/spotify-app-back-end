import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Recommendation } from 'src/recommendation/schemas/recommendation.schema';

export type UserDocument = User & mongoose.Document;

@ObjectType()
@Schema()
class Track {
  @Field(() => Number)
  @Prop()
  ranking: number;

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
}

@ObjectType()
@Schema()
class Artist {
  @Field(() => Number)
  @Prop()
  ranking: number;

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
  image: string;
}

@ObjectType()
@Schema()
class Genre {
  @Field(() => Number)
  @Prop()
  ranking: number;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => Number)
  @Prop()
  count: number;
}

@ObjectType()
@Schema()
export class User {
  @Field(() => String)
  _id: mongoose.Schema.Types.ObjectId;

  @Field(() => String)
  @Prop({ required: true, unique: true })
  spotifyId: string;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String)
  @Prop()
  gender: string;

  @Field(() => String)
  @Prop()
  email: string;

  @Field(() => String)
  @Prop()
  picture: string;

  @Field(() => Number)
  @Prop()
  popularity: number;

  @Field(() => Number)
  @Prop()
  lastUpdated: number;

  @Field(() => Number)
  @Prop()
  dob: number;

  @Field(() => [String])
  @Prop()
  topFifty: string[];

  @Field(() => [Genre])
  @Prop()
  genres: Genre[];

  @Field(() => [Artist])
  @Prop()
  artists: Artist[];

  @Field(() => [Track])
  @Prop()
  tracks: Track[];

  @Field(() => [String])
  @Prop()
  matched: string[];

  @Field(() => [String])
  @Prop()
  dismissed: string[];

  @Field(() => [String])
  @Prop()
  sentLike: string[];

  @Field(() => [String])
  @Prop()
  receivedLike: string[];

  @Field(() => Date)
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

@ObjectType()
@Schema()
class UserWithRecs {
  @Field(() => String)
  _id: mongoose.Schema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  spotifyId: string;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String)
  @Prop()
  gender: string;

  @Field(() => String)
  @Prop()
  email: string;

  @Field(() => String)
  @Prop()
  picture: string;

  @Field(() => Number)
  @Prop()
  popularity: number;

  @Field(() => Number)
  @Prop()
  lastUpdated: number;

  @Field(() => Number)
  @Prop()
  dob: number;

  @Field(() => [String])
  @Prop()
  topFifty: string[];

  @Field(() => [Genre])
  @Prop()
  genres: Genre[];

  @Field(() => [Artist])
  @Prop()
  artists: Artist[];

  @Field(() => [Track])
  @Prop()
  tracks: Track[];

  @Field(() => [String])
  @Prop()
  matched: string[];

  @Field(() => [String])
  @Prop()
  dismissed: string[];

  @Field(() => [String])
  @Prop()
  sentLike: string[];

  @Field(() => [String])
  @Prop()
  receivedLike: string[];

  @Field(() => Date)
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Field(() => [Recommendation])
  @Prop()
  recommendations: Recommendation[];
}

@ObjectType()
@Schema()
export class UserReturnType {
  @Field(() => UserWithRecs, { nullable: true })
  @Prop()
  user: UserWithRecs;

  @Field(() => Boolean)
  @Prop()
  noUser: boolean;
}

export const UserWithRecsSchema = SchemaFactory.createForClass(UserWithRecs);
export const UserSchema = SchemaFactory.createForClass(User);
export const UserReturnTypeSchema =
  SchemaFactory.createForClass(UserReturnType);
