import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
import { ArtistsService } from './artists.service';

@Controller('artists')
export class ArtistsController {
  constructor(private artistsService: ArtistsService) {}

  @Get(':accessToken')
  async getTopArtists(@Res() res, @Param('accessToken') accessToken) {
    const topArtists = await this.artistsService.getTopArtists(accessToken);
    const response = res.status(HttpStatus.OK).json(topArtists);
    return response;
  }
}
