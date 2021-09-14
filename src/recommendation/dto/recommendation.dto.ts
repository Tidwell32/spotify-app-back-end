export class CreateRecommendationDTO {
  readonly userId: string;
  readonly recommendedBy: string;
  readonly id: string;
  readonly popularity: number;
  readonly url: string;
  readonly name: string;
  readonly artist: string;
  readonly image: string;
}
