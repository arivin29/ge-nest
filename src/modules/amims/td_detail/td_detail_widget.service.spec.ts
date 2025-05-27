import { Test, TestingModule } from '@nestjs/testing';
import { TdDetailWidgetService } from './td_detail_widget.service';
import { DataSource } from 'typeorm';

describe('TdDetailWidgetService', () => {
  let service: TdDetailWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TdDetailWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<TdDetailWidgetService>(TdDetailWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
