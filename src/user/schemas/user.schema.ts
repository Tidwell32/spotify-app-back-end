import * as mongoose from 'mongoose';

const Track = new mongoose.Schema({
  ranking: Number,
  id: String,
  popularity: Number,
  url: String,
  name: String,
  artist: String,
  image: String,
});

const Artist = new mongoose.Schema({
  ranking: Number,
  id: String,
  popularity: Number,
  url: String,
  name: String,
  image: String,
});

const Genre = new mongoose.Schema({
  ranking: Number,
  name: String,
  count: Number,
});

export const UserSchema = new mongoose.Schema({
  spotifyId: String,
  name: String,
  email: String,
  picture: String,
  popularity: Number,
  lastUpdated: Number,
  dob: Number,
  topFifty: [String],
  genres: [Genre],
  artists: [Artist],
  tracks: [Track],
  matched: [String],
  dismissed: [String],
  sentLike: [String],
  receivedLike: [String],
});
