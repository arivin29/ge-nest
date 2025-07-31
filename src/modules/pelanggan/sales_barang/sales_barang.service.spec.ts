import { Test, TestingModule } from '@nestjs/testing';
import { SalesBarangService } from './sales_barang.service';

describe('SalesBarangService', () => {
  let service: SalesBarangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesBarangService],
    }).compile();

    service = module.get<SalesBarangService>(SalesBarangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
