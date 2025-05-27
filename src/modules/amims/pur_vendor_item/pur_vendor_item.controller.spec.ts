import { Test, TestingModule } from '@nestjs/testing';
import { PurVendorItemController } from './pur_vendor_item.controller';
import { PurVendorItemService } from './pur_vendor_item.service';

describe('PurVendorItemController', () => {
  let controller: PurVendorItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurVendorItemController],
      providers: [
        {
          provide: PurVendorItemService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PurVendorItemController>(PurVendorItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
