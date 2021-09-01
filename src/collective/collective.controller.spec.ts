import { Test, TestingModule } from '@nestjs/testing';
import { CollectiveController } from './collective.controller';

describe('CollectiveController', () => {
  let controller: CollectiveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectiveController],
    }).compile();

    controller = module.get<CollectiveController>(CollectiveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
