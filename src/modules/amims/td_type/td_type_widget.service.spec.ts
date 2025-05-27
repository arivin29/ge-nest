import { Test, TestingModule } from '@nestjs/testing';
import { TdTypeWidgetService } from './td_type_widget.service';
import { DataSource } from 'typeorm';

describe('TdTypeWidgetService', () => {
  let service: TdTypeWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TdTypeWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<TdTypeWidgetService>(TdTypeWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
