import { Test, TestingModule } from '@nestjs/testing';
import { StockWidgetService } from './stock_widget.service';
import { DataSource } from 'typeorm';

describe('StockWidgetService', () => {
  let service: StockWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StockWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<StockWidgetService>(StockWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
