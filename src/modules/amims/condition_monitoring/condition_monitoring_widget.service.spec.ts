import { Test, TestingModule } from '@nestjs/testing';
import { ConditionMonitoringWidgetService } from './condition_monitoring_widget.service';
import { DataSource } from 'typeorm';

describe('ConditionMonitoringWidgetService', () => {
  let service: ConditionMonitoringWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ConditionMonitoringWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<ConditionMonitoringWidgetService>(ConditionMonitoringWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
