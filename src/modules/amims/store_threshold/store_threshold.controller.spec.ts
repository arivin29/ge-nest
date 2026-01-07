import { Test, TestingModule } from '@nestjs/testing';
import { StoreThresholdController } from './store_threshold.controller';
import { StoreThresholdService } from './store_threshold.service';

describe('StoreThresholdController', () => {
  let controller: StoreThresholdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreThresholdController],
      providers: [
        {
          provide: StoreThresholdService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<StoreThresholdController>(StoreThresholdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
