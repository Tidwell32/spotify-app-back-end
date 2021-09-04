import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
import { TracksService } from './tracks.service';

@Controller('tracks')
export class TracksController {
  constructor(private tracksService: TracksService) {}

  /// query params arent working
  @Get(':accessToken')
  async getTopTracks(@Res() res, @Param('accessToken') accessToken) {
    const topTracks = await this.tracksService.getTopTracks(accessToken);
    const response = res.status(HttpStatus.OK).json(topTracks);
    return response;
  }

  @Get('search/:params')
  async searchArtists(@Res() res, @Param('params') params) {
    const split = params.split('&');
    const results = await this.tracksService.searchTracks(split[0], split[1]);
    const response = res.status(HttpStatus.OK).json(results);
    return response;
  }
}
