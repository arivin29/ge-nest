import { Test, TestingModule } from '@nestjs/testing';
import { SalesBarangController } from './sales_barang.controller';
import { SalesBarangService } from './sales_barang.service';

describe('SalesBarangController', () => {
  let controller: SalesBarangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalesBarangController],
      providers: [
        {
          provide: SalesBarangService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<SalesBarangController>(SalesBarangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
