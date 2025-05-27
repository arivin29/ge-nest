import { Test, TestingModule } from '@nestjs/testing';
import { PurVendorService } from './pur_vendor.service';

describe('PurVendorService', () => {
  let service: PurVendorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurVendorService],
    }).compile();

    service = module.get<PurVendorService>(PurVendorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
