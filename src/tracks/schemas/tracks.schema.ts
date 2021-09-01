import * as mongoose from 'mongoose';

const Images = new mongoose.Schema({
  height: Number,
  width: Number,
  url: String,
});

const Artists = new mongoose.Schema({
  external_urls: { spotify: String },
  href: String,
  id: String,
  name: String,
  type: String,
  uri: String,
});

const Album = new mongoose.Schema({
  album_type: String,
  artists: [Artists],
  available_markets: [String],
  external_urls: { spotify: String },
  href: String,
  id: String,
  images: [Images],
  name: String,
  release_date: String,
  release_date_precision: String,
  total_track: Number,
  type: String,
  uri: String,
});

const Items = new mongoose.Schema({
  album: Album,
  artists: [Artists],
  available_markets: [String],
  disc_number: Number,
  duration_ms: Number,
  explicit: Boolean,
  external_ids: { isrc: String },
  external_urls: { spotify: String },
  href: String,
  id: String,
  is_local: Boolean,
  name: String,
  popularity: Number,
  preview_url: String,
  track_number: Number,
  type: String,
  uri: String,
});

export const TracksSchema = new mongoose.Schema({
  items: [Items],
});
