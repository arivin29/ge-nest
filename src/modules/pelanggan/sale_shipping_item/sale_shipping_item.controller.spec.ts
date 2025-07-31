import { Test, TestingModule } from '@nestjs/testing';
import { SaleShippingItemController } from './sale_shipping_item.controller';
import { SaleShippingItemService } from './sale_shipping_item.service';

describe('SaleShippingItemController', () => {
  let controller: SaleShippingItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaleShippingItemController],
      providers: [
        {
          provide: SaleShippingItemService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<SaleShippingItemController>(SaleShippingItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
