import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
class TrackInput {
  @Field(() => Number)
  ranking: number;

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

@InputType()
class ArtistInput {
  @Field(() => Number)
  ranking: number;

  @Field(() => String)
  id: string;

  @Field(() => Number)
  popularity: number;

  @Field(() => String)
  url: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  image: string;
}

@InputType()
class GenreInput {
  @Field(() => Number)
  ranking: number;

  @Field(() => String)
  name: string;

  @Field(() => Number)
  count: number;
}

@InputType()
export class CreateUserInput {
  @Field(() => String)
  spotifyId: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  gender: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  picture: string;

  @Field(() => Number)
  popularity: number;

  @Field(() => Number)
  dob: number;

  @Field(() => [String])
  topFifty: string[];

  @Field(() => [GenreInput])
  genres: GenreInput[];

  @Field(() => [ArtistInput])
  artists: ArtistInput[];

  @Field(() => [TrackInput])
  tracks: TrackInput[];

  @Field(() => [String])
  matched: string[];

  @Field(() => [String])
  dismissed: string[];

  @Field(() => [String])
  sentLike: string[];

  @Field(() => [String])
  receivedLike: string[];

  @Field(() => Number)
  lastUpdated: number;
}

@InputType()
export class UpdateUserInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  picture: string;

  @Field(() => Number, { nullable: true })
  popularity: number;

  @Field(() => Number, { nullable: true })
  dob: number;

  @Field(() => [String], { nullable: true })
  topFifty: string[];

  @Field(() => [GenreInput], { nullable: true })
  genres: GenreInput[];

  @Field(() => [ArtistInput], { nullable: true })
  artists: ArtistInput[];

  @Field(() => [TrackInput], { nullable: true })
  tracks: TrackInput[];

  @Field(() => [String], { nullable: true })
  matched: string[];

  @Field(() => [String], { nullable: true })
  dismissed: string[];

  @Field(() => [String], { nullable: true })
  sentLike: string[];

  @Field(() => [String], { nullable: true })
  receivedLike: string[];

  @Field(() => Number)
  lastUpdated: number;
}

@InputType()
export class EditUserArraysInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  otherUser: string;
}
