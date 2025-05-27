import { Test, TestingModule } from '@nestjs/testing';
import { PurPrclWidgetService } from './pur_prcl_widget.service';
import { DataSource } from 'typeorm';

describe('PurPrclWidgetService', () => {
  let service: PurPrclWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurPrclWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PurPrclWidgetService>(PurPrclWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
