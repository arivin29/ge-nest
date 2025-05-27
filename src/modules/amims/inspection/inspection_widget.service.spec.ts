import { Test, TestingModule } from '@nestjs/testing';
import { InspectionWidgetService } from './inspection_widget.service';
import { DataSource } from 'typeorm';

describe('InspectionWidgetService', () => {
  let service: InspectionWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InspectionWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<InspectionWidgetService>(InspectionWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
