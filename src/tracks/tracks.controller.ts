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
}
