import { Test, TestingModule } from '@nestjs/testing';
import { PurVendorContactService } from './pur_vendor_contact.service';

describe('PurVendorContactService', () => {
  let service: PurVendorContactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurVendorContactService],
    }).compile();

    service = module.get<PurVendorContactService>(PurVendorContactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
