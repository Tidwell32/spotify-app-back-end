import { Document } from 'mongoose';

interface Images {
  readonly height: number;
  readonly width: number;
  readonly url: string;
}

interface Items {
  readonly external_urls: { spotify: string };
  readonly followers: { href: null | string; total: number };
  readonly genres: string[];
  readonly href: string;
  readonly id: string;
  readonly images: Images[];
  readonly name: string;
  readonly popularity: number;
  readonly type: string;
  readonly uri: string;
}

export interface Artists extends Document {
  readonly items: Items[];
}
