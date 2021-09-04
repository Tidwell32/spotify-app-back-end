class track {
  readonly ranking: number;
  readonly id: string;
  readonly popularity: number;
  readonly url: string;
  readonly name: string;
  readonly artist: string;
  readonly image: string;
}

class artist {
  readonly ranking: number;
  readonly id: string;
  readonly popularity: number;
  readonly url: string;
  readonly name: string;
  readonly image: string;
}

class genre {
  readonly ranking: number;
  readonly name: string;
  readonly count: number;
}

export class CreateUserDTO {
  readonly spotifyId: string;
  readonly name: string;
  readonly email: string;
  readonly picture: string;
  readonly popularity: number;
  readonly dob: number;
  readonly topFifty: string[];
  readonly genres: genre[];
  readonly artists: artist[];
  readonly tracks: track[];
  readonly matched: string[];
  readonly dismissed: string[];
  readonly sentLike: string[];
  readonly receivedLike: string[];
}

export class TopFiftyDTO {
  readonly topFifty: string[];
}
