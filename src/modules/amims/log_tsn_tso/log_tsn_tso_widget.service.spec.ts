import { Test, TestingModule } from '@nestjs/testing';
import { LogTsnTsoWidgetService } from './log_tsn_tso_widget.service';
import { DataSource } from 'typeorm';

describe('LogTsnTsoWidgetService', () => {
  let service: LogTsnTsoWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LogTsnTsoWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<LogTsnTsoWidgetService>(LogTsnTsoWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
