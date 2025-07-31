import { Test, TestingModule } from '@nestjs/testing';
import { SaleShippingController } from './sale_shipping.controller';
import { SaleShippingService } from './sale_shipping.service';

describe('SaleShippingController', () => {
  let controller: SaleShippingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaleShippingController],
      providers: [
        {
          provide: SaleShippingService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<SaleShippingController>(SaleShippingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
