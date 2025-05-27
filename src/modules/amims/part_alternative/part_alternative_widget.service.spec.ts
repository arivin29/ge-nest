import { Test, TestingModule } from '@nestjs/testing';
import { PartAlternativeWidgetService } from './part_alternative_widget.service';
import { DataSource } from 'typeorm';

describe('PartAlternativeWidgetService', () => {
  let service: PartAlternativeWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PartAlternativeWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PartAlternativeWidgetService>(PartAlternativeWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
