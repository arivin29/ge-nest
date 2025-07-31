import { Test, TestingModule } from '@nestjs/testing';
import { PenawaranHistoryWidgetService } from './penawaran_history_widget.service';
import { DataSource } from 'typeorm';

describe('PenawaranHistoryWidgetService', () => {
  let service: PenawaranHistoryWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PenawaranHistoryWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PenawaranHistoryWidgetService>(PenawaranHistoryWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
