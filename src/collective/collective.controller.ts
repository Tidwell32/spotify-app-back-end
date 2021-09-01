import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
  Post,
  Body,
  Put,
  Query,
  Delete,
} from '@nestjs/common';
import { CollectiveService } from './collective.service';
import { CreateCollectiveDTO } from './dto/collective.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';

@Controller('collective')
export class CollectiveController {
  constructor(private collectiveService: CollectiveService) {}

  // Fetch all collectives
  @Get('collectives')
  async getCollectives(@Res() res) {
    const collectives = await this.collectiveService.getCollectives();
    return res.status(HttpStatus.OK).json(collectives);
  }

  @Put('edit')
  async editCollective(
    @Res() res,
    @Query('collectiveID', new ValidateObjectId()) collectiveID,
    @Body() createCollectiveDTO: CreateCollectiveDTO,
  ) {
    const editedCollective = await this.collectiveService.editCollective(
      collectiveID,
      createCollectiveDTO,
    );
    if (!editedCollective) {
      throw new NotFoundException('Collective does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Collective has been successfully updated',
      collective: editedCollective,
    });
  }
}
