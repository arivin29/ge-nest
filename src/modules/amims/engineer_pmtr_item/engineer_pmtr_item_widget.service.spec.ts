import { Test, TestingModule } from '@nestjs/testing';
import { EngineerPmtrItemWidgetService } from './engineer_pmtr_item_widget.service';
import { DataSource } from 'typeorm';

describe('EngineerPmtrItemWidgetService', () => {
  let service: EngineerPmtrItemWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EngineerPmtrItemWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<EngineerPmtrItemWidgetService>(EngineerPmtrItemWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
