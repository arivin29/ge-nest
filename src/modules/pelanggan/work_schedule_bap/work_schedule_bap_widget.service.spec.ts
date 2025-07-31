import { Test, TestingModule } from '@nestjs/testing';
import { WorkScheduleBapWidgetService } from './work_schedule_bap_widget.service';
import { DataSource } from 'typeorm';

describe('WorkScheduleBapWidgetService', () => {
  let service: WorkScheduleBapWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WorkScheduleBapWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<WorkScheduleBapWidgetService>(WorkScheduleBapWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
