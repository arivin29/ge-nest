import { Test, TestingModule } from '@nestjs/testing';
import { StoreTransferController } from './store_transfer.controller';
import { StoreTransferService } from './store_transfer.service';

describe('StoreTransferController', () => {
  let controller: StoreTransferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreTransferController],
      providers: [
        {
          provide: StoreTransferService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<StoreTransferController>(StoreTransferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
