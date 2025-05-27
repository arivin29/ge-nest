import { Test, TestingModule } from '@nestjs/testing';
import { TdRefWidgetService } from './td_ref_widget.service';
import { DataSource } from 'typeorm';

describe('TdRefWidgetService', () => {
  let service: TdRefWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TdRefWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<TdRefWidgetService>(TdRefWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
