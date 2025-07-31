import { Test, TestingModule } from '@nestjs/testing';
import { SalesPenjualanController } from './sales_penjualan.controller';
import { SalesPenjualanService } from './sales_penjualan.service';

describe('SalesPenjualanController', () => {
  let controller: SalesPenjualanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalesPenjualanController],
      providers: [
        {
          provide: SalesPenjualanService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<SalesPenjualanController>(SalesPenjualanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
