import { Test, TestingModule } from '@nestjs/testing';
import { WorkScheduleBapItemWidgetService } from './work_schedule_bap_item_widget.service';
import { DataSource } from 'typeorm';

describe('WorkScheduleBapItemWidgetService', () => {
  let service: WorkScheduleBapItemWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WorkScheduleBapItemWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<WorkScheduleBapItemWidgetService>(WorkScheduleBapItemWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
