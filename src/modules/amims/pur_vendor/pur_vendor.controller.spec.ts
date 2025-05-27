import { Test, TestingModule } from '@nestjs/testing';
import { PurVendorController } from './pur_vendor.controller';
import { PurVendorService } from './pur_vendor.service';

describe('PurVendorController', () => {
  let controller: PurVendorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurVendorController],
      providers: [
        {
          provide: PurVendorService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PurVendorController>(PurVendorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
