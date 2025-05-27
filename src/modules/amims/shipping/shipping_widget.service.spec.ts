import { Test, TestingModule } from '@nestjs/testing';
import { ShippingWidgetService } from './shipping_widget.service';
import { DataSource } from 'typeorm';

describe('ShippingWidgetService', () => {
  let service: ShippingWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShippingWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<ShippingWidgetService>(ShippingWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
