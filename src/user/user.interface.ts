import { Document } from 'mongoose';

interface Track {
  readonly ranking: number;
  readonly id: string;
  readonly popularity: number;
  readonly url: string;
  readonly name: string;
  readonly artist: string;
  readonly image: string;
}

interface Artist {
  readonly ranking: number;
  readonly id: string;
  readonly popularity: number;
  readonly url: string;
  readonly name: string;
  readonly image: string;
}

interface Genre {
  readonly ranking: number;
  readonly name: string;
  readonly count: number;
}

export interface User extends Document {
  readonly spotifyId: string;
  readonly name: string;
  readonly email: string;
  readonly picture: string;
  readonly popularity: number;
  readonly topFifty: string[];
  readonly genres: Genre[];
  readonly artists: Artist[];
  readonly tracks: Track[];
  readonly matched: string[];
  readonly dismissed: string[];
  readonly sentLike: string[];
  readonly receivedLike: string[];
}
