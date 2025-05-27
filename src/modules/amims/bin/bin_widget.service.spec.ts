import { Test, TestingModule } from '@nestjs/testing';
import { BinWidgetService } from './bin_widget.service';
import { DataSource } from 'typeorm';

describe('BinWidgetService', () => {
  let service: BinWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BinWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<BinWidgetService>(BinWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
