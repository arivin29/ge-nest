import { Test, TestingModule } from '@nestjs/testing';
import { TechLogJoWidgetService } from './tech_log_jo_widget.service';
import { DataSource } from 'typeorm';

describe('TechLogJoWidgetService', () => {
  let service: TechLogJoWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TechLogJoWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<TechLogJoWidgetService>(TechLogJoWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
