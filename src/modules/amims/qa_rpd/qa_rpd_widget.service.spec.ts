import { Test, TestingModule } from '@nestjs/testing';
import { QaRpdWidgetService } from './qa_rpd_widget.service';
import { DataSource } from 'typeorm';

describe('QaRpdWidgetService', () => {
  let service: QaRpdWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QaRpdWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<QaRpdWidgetService>(QaRpdWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
