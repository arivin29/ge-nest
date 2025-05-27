import { Test, TestingModule } from '@nestjs/testing';
import { StoreDestroyController } from './store_destroy.controller';
import { StoreDestroyService } from './store_destroy.service';

describe('StoreDestroyController', () => {
  let controller: StoreDestroyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreDestroyController],
      providers: [
        {
          provide: StoreDestroyService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<StoreDestroyController>(StoreDestroyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
