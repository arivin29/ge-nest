import { Test, TestingModule } from '@nestjs/testing';
import { TdWidgetService } from './td_widget.service';
import { DataSource } from 'typeorm';

describe('TdWidgetService', () => {
  let service: TdWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TdWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<TdWidgetService>(TdWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
