import { Document, ObjectId } from 'mongoose';

export interface Recommendation extends Document {
  readonly _id: ObjectId;
  readonly userId: ObjectId;
  readonly recommendedBy: ObjectId;
  readonly id: string;
  readonly popularity: number;
  readonly url: string;
  readonly name: string;
  readonly artist: string;
  readonly image: string;
  readonly createdAt: Date;
}
