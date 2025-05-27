import { Test, TestingModule } from '@nestjs/testing';
import { LogSpWidgetService } from './log_sp_widget.service';
import { DataSource } from 'typeorm';

describe('LogSpWidgetService', () => {
  let service: LogSpWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LogSpWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<LogSpWidgetService>(LogSpWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
