class list {
  readonly count: number;
  readonly id?: string;
  readonly popularity?: number;
  readonly url?: string;
  readonly name: string;
  readonly image?: string;
  readonly artist?: string;
}

export class CreateCollectiveDTO {
  readonly type: string;
  readonly count: number;
  readonly list: list[];
}
