import { Test, TestingModule } from '@nestjs/testing';
import { PartConditionWidgetService } from './part_condition_widget.service';
import { DataSource } from 'typeorm';

describe('PartConditionWidgetService', () => {
  let service: PartConditionWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PartConditionWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PartConditionWidgetService>(PartConditionWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
