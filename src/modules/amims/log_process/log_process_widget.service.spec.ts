import { Test, TestingModule } from '@nestjs/testing';
import { LogProcessWidgetService } from './log_process_widget.service';
import { DataSource } from 'typeorm';

describe('LogProcessWidgetService', () => {
  let service: LogProcessWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LogProcessWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<LogProcessWidgetService>(LogProcessWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
