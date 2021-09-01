import { Document } from 'mongoose';

interface Images {
  readonly height: number;
  readonly width: number;
  readonly url: string;
}

interface Artists {
  readonly external_urls: { spotify: string };
  readonly href: string;
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly uri: string;
}

interface Album {
  readonly album_type: string;
  readonly artists: [Artists];
  readonly available_markets: [string];
  readonly external_urls: { spotify: string };
  readonly href: string;
  readonly id: string;
  readonly images: [Images];
  readonly name: string;
  readonly release_date: string;
  readonly release_date_precision: string;
  readonly total_track: number;
  readonly type: string;
  readonly uri: string;
}

interface Items {
  readonly album: Album;
  readonly artists: [Artists];
  readonly available_markets: [string];
  readonly disc_number: number;
  readonly duration_ms: number;
  readonly explicit: boolean;
  readonly external_ids: { isrc: string };
  readonly external_urls: { spotify: string };
  readonly href: string;
  readonly id: string;
  readonly is_local: boolean;
  readonly name: string;
  readonly popularity: number;
  readonly preview_url: string;
  readonly track_number: number;
  readonly type: string;
  readonly uri: string;
}

export interface Tracks extends Document {
  readonly items: Items[];
}
