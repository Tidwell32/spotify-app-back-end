import { Test, TestingModule } from '@nestjs/testing';
import { CollectiveService } from './collective.service';

describe('CollectiveService', () => {
  let service: CollectiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectiveService],
    }).compile();

    service = module.get<CollectiveService>(CollectiveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
