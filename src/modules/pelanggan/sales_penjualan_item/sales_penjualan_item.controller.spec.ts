import { Test, TestingModule } from '@nestjs/testing';
import { SalesPenjualanItemController } from './sales_penjualan_item.controller';
import { SalesPenjualanItemService } from './sales_penjualan_item.service';

describe('SalesPenjualanItemController', () => {
  let controller: SalesPenjualanItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalesPenjualanItemController],
      providers: [
        {
          provide: SalesPenjualanItemService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<SalesPenjualanItemController>(SalesPenjualanItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
