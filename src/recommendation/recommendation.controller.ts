import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
  Post,
  Body,
} from '@nestjs/common';
import { RecommendationService } from './recommendation.service';
import { CreateRecommendationDTO } from './dto/recommendation.dto';

@Controller('recommendation')
export class RecommendationController {
  constructor(private recommendationService: RecommendationService) {}

  // Submit a recommendation
  @Post('new')
  async addRecommendation(
    @Res() res,
    @Body() createRecommendationDTO: CreateRecommendationDTO,
  ) {
    const newRecommendation =
      await this.recommendationService.addRecommendation(
        createRecommendationDTO,
      );
    return res.status(HttpStatus.OK).json({
      message: 'Recommendation has been submitted successfully!',
      recommendation: newRecommendation,
    });
  }

  // Fetch all recommendations
  @Get('/:id')
  async getRecommendations(@Res() res, @Param('id') id) {
    const recommendations = await this.recommendationService.getRecommendations(
      id,
    );
    return res.status(HttpStatus.OK).json(recommendations);
  }

  @Post('delete/:id')
  async deleteRecommendation(@Res() res, @Param('id') id) {
    const recommendation =
      await this.recommendationService.deleteRecommendation(id);
    if (!recommendation) {
      throw new NotFoundException('none');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Recommendation has been deleted',
    });
  }
}
