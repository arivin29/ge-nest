import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyWidgetService } from './currency_widget.service';
import { DataSource } from 'typeorm';

describe('CurrencyWidgetService', () => {
  let service: CurrencyWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CurrencyWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<CurrencyWidgetService>(CurrencyWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
