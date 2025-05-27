import { Test, TestingModule } from '@nestjs/testing';
import { StoreTransferItemController } from './store_transfer_item.controller';
import { StoreTransferItemService } from './store_transfer_item.service';

describe('StoreTransferItemController', () => {
  let controller: StoreTransferItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreTransferItemController],
      providers: [
        {
          provide: StoreTransferItemService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<StoreTransferItemController>(StoreTransferItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
