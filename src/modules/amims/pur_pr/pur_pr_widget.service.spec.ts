import { Test, TestingModule } from '@nestjs/testing';
import { PurPrWidgetService } from './pur_pr_widget.service';
import { DataSource } from 'typeorm';

describe('PurPrWidgetService', () => {
  let service: PurPrWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurPrWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PurPrWidgetService>(PurPrWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
