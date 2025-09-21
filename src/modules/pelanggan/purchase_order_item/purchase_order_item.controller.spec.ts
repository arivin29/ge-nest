import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseOrderItemController } from './purchase_order_item.controller';
import { PurchaseOrderItemService } from './purchase_order_item.service';

describe('PurchaseOrderItemController', () => {
  let controller: PurchaseOrderItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseOrderItemController],
      providers: [
        {
          provide: PurchaseOrderItemService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PurchaseOrderItemController>(PurchaseOrderItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
