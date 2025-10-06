import { Test, TestingModule } from '@nestjs/testing';
import { WorkCompletedWidgetService } from './work_completed_widget.service';
import { DataSource } from 'typeorm';

describe('WorkCompletedWidgetService', () => {
  let service: WorkCompletedWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WorkCompletedWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<WorkCompletedWidgetService>(WorkCompletedWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
