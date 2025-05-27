import { Test, TestingModule } from '@nestjs/testing';
import { PurGrnItemWidgetService } from './pur_grn_item_widget.service';
import { DataSource } from 'typeorm';

describe('PurGrnItemWidgetService', () => {
  let service: PurGrnItemWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurGrnItemWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PurGrnItemWidgetService>(PurGrnItemWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
