import { Test, TestingModule } from '@nestjs/testing';
import { WorkScheduleTeknisiWidgetService } from './work_schedule_teknisi_widget.service';
import { DataSource } from 'typeorm';

describe('WorkScheduleTeknisiWidgetService', () => {
  let service: WorkScheduleTeknisiWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WorkScheduleTeknisiWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<WorkScheduleTeknisiWidgetService>(WorkScheduleTeknisiWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
