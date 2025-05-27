import { Test, TestingModule } from '@nestjs/testing';
import { TechLogEngineWidgetService } from './tech_log_engine_widget.service';
import { DataSource } from 'typeorm';

describe('TechLogEngineWidgetService', () => {
  let service: TechLogEngineWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TechLogEngineWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<TechLogEngineWidgetService>(TechLogEngineWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
