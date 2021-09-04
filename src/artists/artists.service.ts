import { Injectable } from '@nestjs/common';
import { Artists } from './artists.interface';
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
});

@Injectable()
export class ArtistsService {
  async getTopArtists(accessToken): Promise<Artists | { message: string }> {
    await spotifyApi.setAccessToken(accessToken);
    return spotifyApi.getMyTopArtists({ limit: 50 }).then(
      function (data) {
        return data.body.items;
      },
      function (err) {
        return { message: err.body.error.message };
      },
    );
  }

  async searchArtists(accessToken, artist): Promise<Artists> {
    await spotifyApi.setAccessToken(accessToken);
    return spotifyApi.searchArtists(artist).then(
      function (data) {
        return data.body.artists.items;
      },
      function (err) {
        return { message: err.body.error.message };
      },
    );
  }
}
