import { Test, TestingModule } from '@nestjs/testing';
import { TechDefectWidgetService } from './tech_defect_widget.service';
import { DataSource } from 'typeorm';

describe('TechDefectWidgetService', () => {
  let service: TechDefectWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TechDefectWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<TechDefectWidgetService>(TechDefectWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
