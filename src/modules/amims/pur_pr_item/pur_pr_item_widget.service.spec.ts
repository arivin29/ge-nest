import { Test, TestingModule } from '@nestjs/testing';
import { PurPrItemWidgetService } from './pur_pr_item_widget.service';
import { DataSource } from 'typeorm';

describe('PurPrItemWidgetService', () => {
  let service: PurPrItemWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurPrItemWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PurPrItemWidgetService>(PurPrItemWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
