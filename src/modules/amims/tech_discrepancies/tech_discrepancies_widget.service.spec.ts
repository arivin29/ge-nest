import { Test, TestingModule } from '@nestjs/testing';
import { TechDiscrepanciesWidgetService } from './tech_discrepancies_widget.service';
import { DataSource } from 'typeorm';

describe('TechDiscrepanciesWidgetService', () => {
  let service: TechDiscrepanciesWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TechDiscrepanciesWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<TechDiscrepanciesWidgetService>(TechDiscrepanciesWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
