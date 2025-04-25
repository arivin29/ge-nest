import { Test, TestingModule } from '@nestjs/testing';
import { WorkScheduleWidgetService } from './work_schedule_widget.service';
import { DataSource } from 'typeorm';

describe('WorkScheduleWidgetService', () => {
  let service: WorkScheduleWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WorkScheduleWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<WorkScheduleWidgetService>(WorkScheduleWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
