import { Injectable } from '@nestjs/common';
import { Tracks } from './tracks.interface';
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
});

@Injectable()
export class TracksService {
  async getTopTracks(accessToken): Promise<Tracks | { message: string }> {
    await spotifyApi.setAccessToken(accessToken);
    return spotifyApi.getMyTopTracks({ limit: 50 }).then(
      function (data) {
        return data.body.items;
      },
      function (err) {
        return { message: err.body.error.message };
      },
    );
  }
}
