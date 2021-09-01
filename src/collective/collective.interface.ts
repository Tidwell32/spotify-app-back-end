import { Document } from 'mongoose';

class list {
  readonly count: number;
  readonly id?: string;
  readonly popularity?: number;
  readonly url?: string;
  readonly name: string;
  readonly image?: string;
  readonly artist?: string;
}

export interface Collective extends Document {
  readonly type: string;
  readonly count: number;
  readonly list: list[];
}
