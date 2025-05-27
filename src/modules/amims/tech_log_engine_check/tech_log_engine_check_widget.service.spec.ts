import { Test, TestingModule } from '@nestjs/testing';
import { TechLogEngineCheckWidgetService } from './tech_log_engine_check_widget.service';
import { DataSource } from 'typeorm';

describe('TechLogEngineCheckWidgetService', () => {
  let service: TechLogEngineCheckWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TechLogEngineCheckWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<TechLogEngineCheckWidgetService>(TechLogEngineCheckWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
