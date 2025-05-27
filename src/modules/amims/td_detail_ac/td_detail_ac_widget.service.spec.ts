import { Test, TestingModule } from '@nestjs/testing';
import { TdDetailAcWidgetService } from './td_detail_ac_widget.service';
import { DataSource } from 'typeorm';

describe('TdDetailAcWidgetService', () => {
  let service: TdDetailAcWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TdDetailAcWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<TdDetailAcWidgetService>(TdDetailAcWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
