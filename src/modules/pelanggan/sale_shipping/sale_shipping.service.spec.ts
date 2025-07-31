import { Test, TestingModule } from '@nestjs/testing';
import { SaleShippingService } from './sale_shipping.service';

describe('SaleShippingService', () => {
  let service: SaleShippingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaleShippingService],
    }).compile();

    service = module.get<SaleShippingService>(SaleShippingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
