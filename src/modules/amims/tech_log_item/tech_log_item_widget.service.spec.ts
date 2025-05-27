import { Test, TestingModule } from '@nestjs/testing';
import { TechLogItemWidgetService } from './tech_log_item_widget.service';
import { DataSource } from 'typeorm';

describe('TechLogItemWidgetService', () => {
  let service: TechLogItemWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TechLogItemWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<TechLogItemWidgetService>(TechLogItemWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
