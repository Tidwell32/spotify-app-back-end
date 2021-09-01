import * as mongoose from 'mongoose';

const list = new mongoose.Schema({
  count: Number,
  id: { type: String, required: false },
  popularity: { type: Number, required: false },
  url: { type: String, required: false },
  name: String,
  image: { type: String, required: false },
  artist: { type: String, required: false },
});

export const CollectiveSchema = new mongoose.Schema({
  type: String,
  count: Number,
  list: [list],
});
