import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
// import * as mongoose from 'mongoose';

export type UsernDocument = User & mongoose.Document;

@Schema()
class Track {
  @Prop()
  ranking: number;

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
}

@Schema()
class Artist {
  @Prop()
  ranking: number;

  @Prop()
  id: string;

  @Prop()
  popularity: number;

  @Prop()
  url: string;

  @Prop()
  name: string;

  @Prop()
  image: string;
}

@Schema()
class Genre {
  @Prop()
  ranking: number;

  @Prop()
  name: string;

  @Prop()
  count: number;
}

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  spotifyId: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  picture: string;

  @Prop()
  popularity: number;

  @Prop()
  lastUpdated: number;

  @Prop()
  dob: number;

  @Prop()
  topFifty: string[];

  @Prop([Genre])
  genres: Genre[];

  @Prop([Artist])
  artists: Artist[];

  @Prop([Track])
  tracks: Track[];

  @Prop([String])
  matched: string[];

  @Prop([String])
  dismissed: string[];

  @Prop([String])
  sentLike: string[];

  @Prop()
  receivedLike: string[];

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

// const Track = new mongoose.Schema({
//   ranking: Number,
//   id: String,
//   popularity: Number,
//   url: String,
//   name: String,
//   artist: String,
//   image: String,
// });

// const Artist = new mongoose.Schema({
//   ranking: Number,
//   id: String,
//   popularity: Number,
//   url: String,
//   name: String,
//   image: String,
// });

// const Genre = new mongoose.Schema({
//   ranking: Number,
//   name: String,
//   count: Number,
// });

// export const UserSchema = new mongoose.Schema({
//   spotifyId: String,
//   name: String,
//   email: String,
//   picture: String,
//   popularity: Number,
//   lastUpdated: Number,
//   dob: Number,
//   topFifty: [String],
//   genres: [Genre],
//   artists: [Artist],
//   tracks: [Track],
//   matched: [String],
//   dismissed: [String],
//   sentLike: [String],
//   receivedLike: [String],
// });
