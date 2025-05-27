import { Test, TestingModule } from '@nestjs/testing';
import { PurVendorContactController } from './pur_vendor_contact.controller';
import { PurVendorContactService } from './pur_vendor_contact.service';

describe('PurVendorContactController', () => {
  let controller: PurVendorContactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurVendorContactController],
      providers: [
        {
          provide: PurVendorContactService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PurVendorContactController>(PurVendorContactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
