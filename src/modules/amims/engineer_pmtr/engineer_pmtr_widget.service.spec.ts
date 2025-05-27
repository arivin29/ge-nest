import { Test, TestingModule } from '@nestjs/testing';
import { EngineerPmtrWidgetService } from './engineer_pmtr_widget.service';
import { DataSource } from 'typeorm';

describe('EngineerPmtrWidgetService', () => {
  let service: EngineerPmtrWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EngineerPmtrWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<EngineerPmtrWidgetService>(EngineerPmtrWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
