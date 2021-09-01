import * as mongoose from 'mongoose';

const Images = new mongoose.Schema({
  height: Number,
  width: Number,
  url: String,
});

const Items = new mongoose.Schema({
  external_urls: { spotify: String },
  followers: { href: null || String, total: Number },
  genres: [String],
  href: String,
  id: String,
  images: [Images],
  name: String,
  popularity: Number,
  type: String,
  uri: String,
});

export const ArtistsSchema = new mongoose.Schema({
  items: [Items],
});
