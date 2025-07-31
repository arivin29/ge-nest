import { Test, TestingModule } from '@nestjs/testing';
import { SalesPenjualanService } from './sales_penjualan.service';

describe('SalesPenjualanService', () => {
  let service: SalesPenjualanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesPenjualanService],
    }).compile();

    service = module.get<SalesPenjualanService>(SalesPenjualanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
